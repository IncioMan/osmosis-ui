import {tokens} from '../data/tokens'
import {
    getPrice,
    getPricesFromCoinGecko,
  } from '@cosmology/core';

export default class PriceProvider{
    constructor() {
        this.tokensMap = {}
        tokens.forEach((t)=>this.tokensMap[t.symbol]=t.denom)
        console.log(this.tokensMap)
    }

    async myGetPrice(symbol){
        const prices = await getPricesFromCoinGecko()
        const price = await getPrice(prices, symbol)
        return price
    }
}