import {tokens} from '../data/tokens'
import {
    getPrice,
    getPricesFromCoinGecko,
    osmoDenomToSymbol
  } from '@cosmology/core';
import { OsmosisApiClient } from '@cosmology/core';

export default class PriceProvider{
    constructor(lcdUrl) {
        this.tokensMap = {}
        tokens.forEach((t)=>this.tokensMap[t.symbol]=t.denom)
        console.log(this.tokensMap)

            // 'https://lcd-osmosis.keplr.app/'
        this.client = new OsmosisApiClient({
            url: lcdUrl
        });
    }

    async myGetPrice(symbol){
        const prices = await getPricesFromCoinGecko()
        const price = await getPrice(prices, symbol)
        return price
    }

    async getBalance(address, symbol){
        const accountBalances = await this.client.getBalances(address)
        const balances = {}
        accountBalances.result.forEach(({ denom, amount }) => {
            const symbol = osmoDenomToSymbol(denom);
            balances[symbol] = amount
        })
        return balances[symbol]
    }
}