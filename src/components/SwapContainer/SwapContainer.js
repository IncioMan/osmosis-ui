import React, { useContext, useDeferredValue, useEffect, useState } from 'react';
import {Flex,Button} from '@chakra-ui/react'
import SwapAsset from '../SwapAsset/SwapAsset';
import SwapContext from '../../context/SwapContext';
import AppStageContext from '../../context/AppStageContext';
import PriceProvider from '../../utils/PriceProvider';
import KeplrContext from '../../context/KeplrContext';
import TokenProvider from '../../utils/TokenProvider';
import Networkontext from '../../context/NetworkContext';
import { Dec, Int, IntPretty } from '@keplr-wallet/unit';
import {baseUnitsToDisplayUnits,
  displayUnitsToDenomUnits} from '@cosmology/core'


function SwapContainer(props) {
  const {swapContextValue, setSwapContextValue} = useContext(SwapContext)
  const {appStage, setAppStage} = useContext(AppStageContext)
  const [priceAssetTo, setPriceAssetTo] = useState()
  const [priceAssetFrom, setPriceAssetFrom] = useState()
  const [balanceAssetTo, setBalanceAssetTo] = useState()
  const [balanceAssetFrom, setBalanceAssetFrom] = useState()
  const [amountAssetTo, setAmountAssetTo] = useState(0)
  const {keplrValue, setKeplrValue} = useContext(KeplrContext)
  const {networkValue, setNetworkValue} = useContext(Networkontext)
  const tp = new TokenProvider()
  let exponent = 0

  useEffect(()=>{
    const pr = new PriceProvider(networkValue.lcd)
    pr.myGetPrice(swapContextValue.assetFrom.token)
        .then(function (price) {
          setPriceAssetFrom(price)
        })
        .catch(function (error) {
            setPriceAssetFrom('')
            console.log(error);
        })
    pr.myGetPrice(swapContextValue.assetTo.token)
        .then(function (price) {
          setPriceAssetTo(price)
        })
        .catch(function (error) {
            setPriceAssetTo('')
            console.log(error);
        })
    updateAmountAssetTo()
  },[swapContextValue, networkValue])

  useEffect(()=>{
    if(!keplrValue||!keplrValue.accounts){
      return
    }
    const pr = new PriceProvider(networkValue.lcd)
    setBalanceAssetFrom(null)
    setBalanceAssetTo(null)
    pr.getBalance(keplrValue?.accounts[0].address, swapContextValue.assetFrom.token)
    .then(function (balance) {
      let expBalance = balance?baseUnitsToDisplayUnits(swapContextValue.assetFrom.token, balance):0
      let roundedBalance = expBalance
      if(expBalance&&expBalance>1){
        roundedBalance = new IntPretty(expBalance).maxDecimals(2).toString()
      }else{
        roundedBalance = expBalance===0?expBalance:new IntPretty(expBalance).maxDecimals(6).toString()
      }
      setBalanceAssetFrom(roundedBalance)
    })
    .catch(function (error) {
      setBalanceAssetFrom(0)
        console.log(error);
    })
    pr.getBalance(keplrValue?.accounts[0].address, swapContextValue.assetTo.token)
      .then(function (balance) {
        setBalanceAssetTo(balance?balance:0)
      })
      .catch(function (error) {
        setBalanceAssetTo(0)
          console.log(error);
      })
  },[swapContextValue, keplrValue, networkValue])

  const updateAmountAssetTo = ()=>{
    const value = swapContextValue.assetFrom.amount*priceAssetFrom/priceAssetTo
    if(!value){
      setAmountAssetTo(0)
    }
    if(value>1){
      setAmountAssetTo(Math.round(value*100)/100)
    }else{
      setAmountAssetTo(Math.round(value*100000)/100000)
    }
  }
  
  useEffect(()=>{
    updateAmountAssetTo()
  }, [priceAssetFrom,priceAssetTo])

  const enterHandler = ()=>{
    setAppStage('clickSwap')
  }

  const invertAssets = () =>{
    const newState = {
      assetFrom:{
        token: swapContextValue.assetTo.token,
        amount: swapContextValue.assetFrom.amount,
      },
      assetTo: {
        token: swapContextValue.assetFrom
      },
      slippage: swapContextValue.slippage
    }
    setSwapContextValue(newState)
  }

  const onChangeHandler = (e) =>{
    setAmountAssetFrom(e.target.value)
  }

  const setAmountAssetFrom = (amount)=>{
    const newState = {
      assetFrom:{
        token: swapContextValue.assetFrom.token,
        amount: amount
      },
      assetTo: {
        token: swapContextValue.assetTo.token
      },
      slippage: swapContextValue.slippage
    }
    setSwapContextValue(newState)
  }
  return (
    <Flex flexWrap={'wrap'}>
      <SwapAsset 
              assetFrom={true} 
              asset={swapContextValue.assetFrom.token}
              amount={swapContextValue.assetFrom.amount} 
              price={priceAssetFrom}
              balance={(exponent&&exponent>0)?balanceAssetFrom/exponent:balanceAssetFrom}
              inputAmountHandler={(amount)=>setAmountAssetFrom(amount)}
              enterHandler={enterHandler}
              focusHandler={()=>{setAppStage('enterAmount')}}
              onChangeHandler={(e) => onChangeHandler(e)}/>
      <Flex width={['100%','auto']} pt={[4,8]} justifyContent={'center'}>
        <Button 
            tabIndex={0} 
            className='arrow-swap' 
            bg={'transparent'}
            fontSize={40} p={4} m={4}
            _hover={{
              background: 'transparent'
            }}
            onClick={(e)=>{
              invertAssets()
            }}
        >
          &#8594;
        </Button>
      </Flex>
      <SwapAsset 
        assetFrom={false} 
        asset={swapContextValue.assetTo.token} 
        amount={amountAssetTo} 
        balance={balanceAssetTo}
        price={priceAssetTo}/>
    </Flex>
  );
}

export default SwapContainer;
