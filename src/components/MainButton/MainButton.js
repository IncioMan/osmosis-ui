import React, { useContext, useEffect, useRef, useState } from 'react';
import { Box, Button, Spinner, Text} from '@chakra-ui/react'
import AppStageContext from '../../context/AppStageContext';
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

  useEffect(()=>{
    console.log(appStage)
    if(appStage=='clickSwap'){
        swapButtonRef.current.focus()
    }
  },[appStage])

  useEffect(()=>{
    if(!keplrValue.wallet){
      setButtonText('Install Keplr')
      setOnClick([()=>{
        window.open("https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap", "_blank")
      }])
      return
    }
    if(keplrValue.accounts&&keplrValue.accounts.length>0){
      setButtonText('SWAP')
      setAddress(keplrValue.accounts[0])
      setOnClick([(e)=>{
        setWaiting(true)
      }])
      return
    }
    setButtonText('Retry')
    setOnClick([()=>{window.location.reload(false)}])
  },[keplrValue])

  return (
  <>
  {(!waiting)&& 
  <>
  <Button 
      tabIndex={1} 
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
