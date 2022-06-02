import { OsmosisApiClient } from '@cosmology/core';
import {
  getPricesFromCoinGecko,
} from '@cosmology/core';


const client = new OsmosisApiClient({
     url: 'https://rest-osmosis.ecostake.com'
});

// NOTE this is semi-psuedo code using real examples pasted in

let prices = null;
async function setupApp () {
    prices = await getPricesFromCoinGecko();
}
setupApp()

export { prices };