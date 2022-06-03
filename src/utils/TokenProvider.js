import {assetsList} from '../data/assets'

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
}