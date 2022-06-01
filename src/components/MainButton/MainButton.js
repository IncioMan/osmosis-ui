import React, { useContext, useEffect, useRef, useState } from 'react';
import { Box, Button, Spinner, Text} from '@chakra-ui/react'
import AppStageContext from '../../context/AppStageContext';
import { useToast } from '@chakra-ui/react'
import KeplrContext from '../../context/KeplrContext';




function MainButton(props) {
  const [onEnter, setOnEnter] = useState([() => {}])
  const [onClick, setOnClick] = useState([() => {}])
  const [buttonText, setButtonText] = useState('')
  const swapButtonRef = useRef(null);
  const {appStage, setAppStage} = useContext(AppStageContext)
  const {keplrValue, setKeplrValue} = useContext(KeplrContext)
  const [waiting, setWaiting] = useState(false)
  const [address, setAddress] = useState()
  const toast = useToast()

  useEffect(()=>{
    console.log(appStage)
    if(appStage=='clickSwap'){
        swapButtonRef.current.focus()
    }
  },[appStage])

  window.onload = async () => {
    if(!window.keplr){
      setButtonText('Install Keplr')
      setOnClick([()=>{
        window.open("https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap", "_blank")
      }])
    }else{
      let accounts = []
      try{
        const chainId = "osmosis-1"
        await window.keplr.enable(chainId);
        const offlineSigner = window.keplr.getOfflineSigner(chainId);
        accounts = await offlineSigner.getAccounts();
      }catch(e){
        toast({
          title: 'No address detected',
          description: 'You need to log into your Keplr extension',
          status: 'error',
          duration: 4000,
          isClosable: false,
        })
      }
      if(accounts.length>0){
        setKeplrValue(window.keplr)
        toast({
          title: 'Wallet connected',
          description: accounts[0].address,
          status: 'success',
          duration: 4000,
          isClosable: false,
        })
        setButtonText('SWAP')
        setAddress(accounts[0])
        setOnClick([(e)=>{
          setWaiting(true)
        }])
      }else{
        setButtonText('Connect Wallet')
        setOnClick([()=>{console.log('connect')}])
      }}
  }

  return (
  <>
  {(!waiting)&& 
  <>
  <Button 
      bg={'#322dc1'} 
      fontSize={20}
      borderRadius={24}
      padding={'24px 44px'}
      _hover={{
      background: "#322dc1"
      }}
      _focus={{
          outline: 'solid'
      }}
      _active={{
      background: "#322dc1",
      opacity: 0.5
      }} 
      ref={swapButtonRef}
      onClick={onClick[0]}
      onKeyUp={(e)=>{
        if (e?.key === 'Enter') {
          onClick[0]()
        }
      }}>
        {buttonText}
    </Button>
    </>}
    {(waiting)&&<Spinner></Spinner>}
  </>  
  );
}

export default MainButton;
