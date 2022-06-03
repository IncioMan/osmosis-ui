import React, { useContext, useEffect, useRef, useState } from 'react';
import { ChakraProvider, Box,Flex,Image,Text, Spinner} from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools';
import './SwapAsset.css'
import TokenProvider from '../../utils/TokenProvider';
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
  const {assetFrom, asset, amount, balance, price, 
        inputAmountHandler, enterHandler, focusHandler, onChangeHandler} = props
  const {appStage, setAppStage} = useContext(AppStageContext)
  const amountRef = useRef()
  const tp = new TokenProvider()

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
              opacity={0.5} 
              _hover={{
                cursor: 'pointer'
              }}
              onClick={()=>{inputAmountHandler(balance)}}
              fontSize={14}>{balance}</Text>}
          <input className='asset-from-input' type="number" id="quantity"
          ref={amountRef}
          tabIndex={1} 
          value={amount>0?amount:null}
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
            opacity={0.5} 
            fontSize={14}>1 {asset} = ${price}</Text>
          </Flex>
        }
        {(assetFrom)&&<Box w={8}/>}
        <Flex alignItems={'center'}>
          <Image
            borderRadius='lg'
            width={[12,
                    12,
                    16]}
            height={[12,
                    12,
                    16]}
            src={tp.assets[asset].icon}
            alt={asset}
            //pt={logos[asset].padding}
          />
        </Flex>
        {(!assetFrom)&&
        <Flex flexDirection={'column'} pt={10} justifyContent={'center'} alignItems={'center'}>
          <Text fontSize={40} p={1} w={170}>{amount}</Text>
          <Text 
            pt = {0}
            textAlign={'center'}
            opacity={0.5} 
            fontSize={14}>1 {asset} = ${price}</Text>
          </Flex>
        }
      </Flex>
  );
}

export default SwapAsset;
