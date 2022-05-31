import React, { useContext, useEffect, useRef } from 'react';
import { ChakraProvider, Box,Flex,Image,Text} from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools';
import './SwapAsset.css'
import {logos} from '../../data/logos.js'
import AppStageContext from '../../context/AppStageContext';

const styles = {
  global: props => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('gray.100', '#180f34')(props),
    },
  }),
};

const theme = extendTheme({
  styles,
});


function SwapAsset(props) {
  const {assetFrom, asset, amount, enterHandler, focusHandler} = props
  const {appStage, setAppStage} = useContext(AppStageContext)
  const amountRef = useRef()

  useEffect(()=>{
    if(assetFrom && appStage=='inputAmount'){
      amountRef.current.focus()
    }
  },[appStage])


  return (
      <Flex width={['100%','auto']} justifyContent={'center'}>
      {(assetFrom)&&
        <Flex flexDirection={'column'} pt={10} justifyContent={'center'} alignItems={'center'}>
          <input className='asset-from-input' type="number" id="quantity"
          ref={amountRef}
          onFocus={focusHandler}
          onKeyUp = {(e) =>{
              if (e.key === 'Enter') {
                  enterHandler();
              }
            }}
          />
          <Text 
            pt = {4}
            textAlign={'center'}
            w={'90%'} 
            opacity={0.5} 
            fontSize={14}>1 {asset} = $1.45</Text>
          </Flex>
        }
        {(assetFrom)&&<Box w={8}/>}
        <Image
          borderRadius='lg'
          width={[12,12,16]}
          src={logos[asset].icon}
          alt={asset}
          pt={logos[asset].padding}
        />
        {(!assetFrom)&&
        <Flex flexDirection={'column'} pt={10} justifyContent={'center'} alignItems={'center'}>
          <Text fontSize={40} p={1} w={170}>{amount}</Text>
          <Text 
            pt = {0}
            textAlign={'center'}
            w={'90%'} 
            opacity={0.5} 
            fontSize={14}>1 {asset} = $15</Text>
          </Flex>
        }
      </Flex>
  );
}

export default SwapAsset;
