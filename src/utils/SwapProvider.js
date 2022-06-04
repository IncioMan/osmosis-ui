import { assets } from '@cosmology/cosmos-registry';
import {
  baseUnitsToDisplayUnits,
  baseUnitsToDollarValue,
  dollarValueToDenomUnits,
  getPrice,
  lookupRoutesForTrade,
  calculateAmountWithSlippage,
  makePoolPairs,
  makePoolsPretty,
  osmoDenomToSymbol,
  symbolToOsmoDenom,
  prettyPool,
  noDecimals,
  messages,
  signAndBroadcast,
  getPricesFromCoinGecko,
  getOsmoFee,
  OsmosisApiClient,
  getSigningOsmosisClient,
  CosmosApiClient 
} from '@cosmology/core';
import TokenProvider from './TokenProvider';


export default class SwapProvider{
    constructor(address, signer, lcdUrl, rpcUrl) {
        this.address = address
        this.signer = signer
        this.client = new OsmosisApiClient({
            url: lcdUrl
        });
        this.rpcUrl = rpcUrl
        this.tokenProvider = new TokenProvider()
    }

   async swap(sell, buy, value){
        const slippage = 0.1
        const stargateClient = await getSigningOsmosisClient({
            //https://rpc.osmosis.zone/
            rpcEndpoint: this.rpcUrl,
            signer: this.signer // OfflineSigner
        });
        const prices = await getPricesFromCoinGecko();
        const lcdPools = await this.client.getPools();
        const prettyPools = makePoolsPretty(prices, lcdPools.pools);
        const [account] = await this.signer.getAccounts();
        const { address } = account;
    
        // get pricing and pools info...
        const pairs = makePoolPairs(prettyPools);
        const pools = lcdPools.pools.map((pool) => prettyPool(pool));
    
        const tokenInPrice = getPrice(prices, sell);
        //const tokenInAmount = value ? balances.find((a) => a.symbol === sell).amount : dollarValueToDenomUnits(prices, sell, value);
        const tokenInAmount = this.tokenProvider.valueToDenomPrecision(sell, value)
        const tokenOutPrice = getPrice(prices, buy);
        const tokenOutAmount = dollarValueToDenomUnits(prices, buy, value);
        const tokenOutAmountWithSlippage = calculateAmountWithSlippage(
        tokenOutAmount,
        slippage
        );
    
        const tokenInValue = baseUnitsToDollarValue(prices, sell, tokenInAmount);
        const tokenOutValue = baseUnitsToDollarValue(
        prices,
        buy,
        tokenOutAmountWithSlippage
        );

        const tokenIn = {
            denom: symbolToOsmoDenom(sell),
            symbol: sell,
            amount: tokenInAmount,
            displayAmount: baseUnitsToDisplayUnits(sell, tokenInAmount),
            tokenInPrice,
            tokenInValue
        };

        const tokenOut = {
            denom: symbolToOsmoDenom(buy),
            symbol: buy,
            amount: tokenOutAmountWithSlippage,
            displayAmount: baseUnitsToDisplayUnits(buy, tokenOutAmountWithSlippage),
            tokenOutPrice,
            tokenOutValue
        };

        const routes = lookupRoutesForTrade({
            pools,
            trade: {
                sell: {
                denom: tokenIn.denom,
                amount: tokenInAmount
                },
                buy: {
                denom: tokenOut.denom,
                amount: tokenOutAmount
                },
                beliefValue: value
            },
            pairs
        }).map((tradeRoute) => {
                const {
                    poolId,
                    tokenOutDenom
                    // tokenOutSymbol,
                    // tokenInSymbol,
                    // liquidity
            } = tradeRoute;

            return {
                poolId,
                tokenOutDenom
            };
        });

        // TX


        const fee = getOsmoFee('swapExactAmountIn');
        const msg = messages.swapExactAmountIn({
            sender: address,
            routes,
            tokenIn: {
                denom: tokenIn.denom,
                // TODO: use { coin } from '@cosmjs/amino' e.g. coin(num, denom)
                amount: noDecimals(tokenIn.amount)
            },
            tokenOutMinAmount: noDecimals(tokenOut.amount)
        });

        console.log(JSON.stringify(msg, null, 2));

        const res = await signAndBroadcast({
            client: stargateClient,
            chainId: 'osmo-test-4',
            address,
            msg,
            fee,
            memo: ''
        });

        console.log(res);
        return res
    }

    async getTxInfo(txHash){
        const cs = new CosmosApiClient({url:'https://testnet-rest.osmosis.zone/'});
        const txInfo = await cs.getTransaction(txHash)
        return txInfo
    }

    parseTokenAmount(str){
        let token = ''
        let amount = ''
        if(str.includes('ibc')){
            amount = this.tokenProvider.formatAmount(osmoDenomToSymbol('ibc'+str.split('ibc')[1]), 
                                                     parseInt(str.split('ibc')[0]))
            token = osmoDenomToSymbol('ibc'+str.split('ibc')[1])
        }
        ['uosmo','uion'].forEach((t)=>{
            if(str.includes(t)){
                amount = this.tokenProvider.formatAmount(osmoDenomToSymbol(t), parseInt(str.replace(t,'')))
                token = osmoDenomToSymbol(t)
            }
        })

        return [token, amount]
    }

    parseSwapTx(txMsg){
        let recap = ''
        const logs = txMsg.logs[0].events.filter((e)=>e.type=='token_swapped')
        const tokensIn = logs[0].attributes.find((t)=>t.key=="tokens_in")
        const [tokenInToken, tokenInAmount] = this.parseTokenAmount(tokensIn.value)
        const tokensOut = logs[0].attributes.filter((t)=>t.key=="tokens_out")
        const tokensOutParsed = tokensOut.map((t)=>this.parseTokenAmount(t.value))


        recap = tokenInAmount + ' ' + tokenInToken
        tokensOutParsed.forEach((t)=>{
            recap += ' → ' + t[1] + ' ' + t[0]
        })
        return recap
    }
}