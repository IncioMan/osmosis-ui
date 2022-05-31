import React, { useContext, useEffect } from 'react';
import {Flex,Text} from '@chakra-ui/react'
import SwapAsset from '../SwapAsset/SwapAsset';
import SwapContext from '../../context/SwapContext';
import AppStageContext from '../../context/AppStageContext';

function SwapContainer(props) {
  const {swapContextValue, setSwapContextValue} = useContext(SwapContext)
  const {appStage, setAppStage} = useContext(AppStageContext)

  const enterHandler = ()=>{
    setAppStage('clickSwap')
  }
  return (
    <Flex flexWrap={'wrap'}>
      <SwapAsset assetFrom={true} asset={swapContextValue.assetFrom.token} 
              enterHandler={enterHandler}
              focusHandler={()=>{setAppStage('enterAmount')}}/>
      <Flex width={['100%','auto']} pt={[4,12]} justifyContent={'center'}>
        <Text tabIndex={0} className='arrow-swap' fontSize={40} pt={2} pr={4} pl={4}>&#8594;</Text>
      </Flex>
      <SwapAsset assetFrom={false} asset={swapContextValue.assetTo.token} amount={0}/>
    </Flex>
  );
}

export default SwapContainer;
