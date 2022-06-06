import {assetsList} from '../data/assets'
import {baseUnitsToDisplayUnits,
    displayUnitsToDenomUnits} from '@cosmology/core'
import { Dec, Int, IntPretty } from '@keplr-wallet/unit';

export default class TokenProvider{
    constructor() {
       this.assets = {}
       assetsList.assets.forEach((a)=>{
            this.assets[a.symbol] = {
                'icon': a.logo_URIs.svg?a.logo_URIs.svg:a.logo_URIs.png,
                'token': a.base,
                'exponent': a.denom_units.filter((d)=>d.denom==a.display)[0]?.exponent
            }
       })
       console.log(this.assets)
    }

    formatAmount(token, amount){
        return new IntPretty(baseUnitsToDisplayUnits(token, amount)).maxDecimals(6).toString()
    }

    valueToDenomPrecision(token,value){
        return displayUnitsToDenomUnits(token, value)
    }
}