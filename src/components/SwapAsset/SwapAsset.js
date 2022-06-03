import React, { useContext, useEffect, useRef, useState } from 'react';
import { ChakraProvider, Box,Flex,Image,Text, Spinner} from '@chakra-ui/react'
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
  const {assetFrom, asset, amount, balance, price, enterHandler, focusHandler, onChangeHandler} = props
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
        <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
          {(!balance && balance!==0)&&
            <>
              <Spinner opacity={0.5} size={'xs'}/>
              <Box height={2}/>
            </>
          }
          {(balance||balance===0)&&
            <Text 
              pt = {0}
              textAlign={'center'}
              w={'90%'} 
              opacity={0.5} 
              fontSize={14}>{balance/1000000}</Text>}
          <input className='asset-from-input' type="number" id="quantity"
          ref={amountRef}
          tabIndex={1} 
          onChange={onChangeHandler}
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
            fontSize={14}>1 {asset} = ${price}</Text>
          </Flex>
        }
        {(assetFrom)&&<Box w={8}/>}
        <Image
          borderRadius='lg'
          width={[12+logos[asset].correction,
                  12+logos[asset].correction,
                  16+logos[asset].correction]}
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
            fontSize={14}>1 {asset} = ${price}</Text>
          </Flex>
        }
      </Flex>
  );
}

export default SwapAsset;
