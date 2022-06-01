import React, { useContext, useEffect, useState } from 'react';
import {Flex,Text} from '@chakra-ui/react'
import SwapAsset from '../SwapAsset/SwapAsset';
import SwapContext from '../../context/SwapContext';
import AppStageContext from '../../context/AppStageContext';
import {coingeko_ids} from '../../data/coingeko_map'
const axios = require('axios').default;

function SwapContainer(props) {
  const {swapContextValue, setSwapContextValue} = useContext(SwapContext)
  const {appStage, setAppStage} = useContext(AppStageContext)
  const [priceAssetTo, setPriceAssetTo] = useState()
  const [priceAssetFrom, setPriceAssetFrom] = useState()

  useEffect(()=>{
    axios.get("https://api.coingecko.com/api/v3/simple/price?ids="+
              coingeko_ids[swapContextValue.assetFrom.token].id+
              "&vs_currencies=USD")
        .then(function (response) {
          setPriceAssetFrom(response.data[coingeko_ids[swapContextValue.assetFrom.token].id].usd)
        })
        .catch(function (error) {
            setPriceAssetFrom('')
            console.log(error);
        })
    axios.get("https://api.coingecko.com/api/v3/simple/price?ids="+
              coingeko_ids[swapContextValue.assetTo.token].id+
              "&vs_currencies=USD")
        .then(function (response) {
          setPriceAssetTo(response.data[coingeko_ids[swapContextValue.assetTo.token].id].usd)
        })
        .catch(function (error) {
            setPriceAssetTo('')
            console.log(error);
        })
  },[swapContextValue])

  const enterHandler = ()=>{
    setAppStage('clickSwap')
  }
  return (
    <Flex flexWrap={'wrap'}>
      <SwapAsset assetFrom={true} asset={swapContextValue.assetFrom.token} 
              price={priceAssetFrom}
              enterHandler={enterHandler}
              focusHandler={()=>{setAppStage('enterAmount')}}/>
      <Flex width={['100%','auto']} pt={[4,12]} justifyContent={'center'}>
        <Text tabIndex={0} className='arrow-swap' fontSize={40} pt={2} pr={4} pl={4}>&#8594;</Text>
      </Flex>
      <SwapAsset assetFrom={false} asset={swapContextValue.assetTo.token} amount={0} price={priceAssetTo}/>
    </Flex>
  );
}

export default SwapContainer;