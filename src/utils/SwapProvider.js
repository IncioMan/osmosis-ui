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
  getSigningOsmosisClient
} from '@cosmology/core';


export default class SwapProvider{
    constructor(address, signer) {
        this.address = address
        this.signer = signer
        this.client = new OsmosisApiClient({
            url: 'https://testnet-rest.osmosis.zone/'
        });
    }

   async swap(sell, buy, value){
        const slippage = 0.1
        const stargateClient = await getSigningOsmosisClient({
            //https://rpc.osmosis.zone/
            rpcEndpoint: 'https://testnet-rpc.osmosis.zone/',
            signer: this.signer // OfflineSigner
        });
        const prices = await getPricesFromCoinGecko();
        const lcdPools = await this.client.getPools();
        const prettyPools = makePoolsPretty(prices, lcdPools.pools);
        const [account] = await this.signer.getAccounts();
        const { address } = account;
        const accountBalances = await this.client.getBalances(account.address);
        const balances = accountBalances.result.map(({ denom, amount }) => {
            const symbol = osmoDenomToSymbol(denom);
            return {
            symbol,
            denom,
            amount
            };
        });
        const tokenInBal = accountBalances.result.find(({ denom, amount }) => {
        return osmoDenomToSymbol(denom) == sell;
        });
    
        // get pricing and pools info...
        const pairs = makePoolPairs(prettyPools);
        const pools = lcdPools.pools.map((pool) => prettyPool(pool));
    
        const usdValue = baseUnitsToDollarValue(prices, sell, tokenInBal.amount);
        const tokenInPrice = getPrice(prices, sell);
        //const tokenInAmount = value ? balances.find((a) => a.symbol === sell).amount : dollarValueToDenomUnits(prices, sell, value);
        const tokenInAmount = value*1000000
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
}