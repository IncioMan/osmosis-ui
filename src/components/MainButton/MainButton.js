import React, { useContext, useEffect, useRef, useState } from 'react';
import { Box, Button, Spinner, Link, Flex, Text} from '@chakra-ui/react'
import AppStageContext from '../../context/AppStageContext';
import KeplrContext from '../../context/KeplrContext';
import SwapContext from '../../context/SwapContext';
import SwapProvider from '../../utils/SwapProvider';
import { useToast } from '@chakra-ui/react'
import { ExternalLinkIcon,CheckCircleIcon } from '@chakra-ui/icons'

function MainButton(props) {
  const [onEnter, setOnEnter] = useState([() => {}])
  const [onClick, setOnClick] = useState([() => {}])
  const [buttonText, setButtonText] = useState('')
  const swapButtonRef = useRef(null);
  const {appStage, setAppStage} = useContext(AppStageContext)
  const {keplrValue, setKeplrValue} = useContext(KeplrContext)
  const {swapContextValue, setSwapContextValue} = useContext(SwapContext)
  const [waiting, setWaiting] = useState(false)
  const [address, setAddress] = useState()
  const toast = useToast()

  useEffect(()=>{
    console.log(appStage)
    if(appStage=='clickSwap'){
        swapButtonRef.current.focus()
    }
  },[appStage])

  useEffect(()=>{
    console.log(swapContextValue)
  },[swapContextValue])

  const refreshSwapContext = ()=>{
    const newState = {
      assetFrom: {
        token: swapContextValue.assetFrom.token,
        amount: swapContextValue.assetFrom.amount
      },
      assetTo:{
        token: swapContextValue.assetTo.token
      }
    }
    setSwapContextValue(newState)
  }

  const showSwapNotExecuted = (errorMsg) => {
    toast({
      title: 'Swap Not Excuted',
      description: errorMsg,
      status: 'error',
      duration: 6000,
      isClosable: false,
    })
  }

  const showSuccessSwap = (txHash, swapMsg)=>{
    toast({
      position: 'bottom',
      duration: 6000,
      isClosable: false,
      render: () => (
        <Flex
        flexDirection={'row'}
        color='white' 
        borderRadius={8}
        p={3} bg='green.500'>
          <CheckCircleIcon w={5} h={6} mt='2px' marginInlineEnd={3}/>
          <Flex 
            flexDirection={'column'} >
            <Text fontSize='md' fontWeight={'bold'} lineHeight={6}>Swap Executed</Text>
            <Link fontSize={16} href={'https://www.mintscan.io/osmosis/txs/'+txHash} isExternal>
              {swapMsg}<ExternalLinkIcon mx='2px' />
            </Link>
          </Flex>
        </Flex>
      ),
    })
  }

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
        const sp = new SwapProvider(keplrValue.accounts[0], keplrValue.wallet.getOfflineSigner('osmo-test-4'))
        const res = sp.swap(swapContextValue.assetFrom.token,swapContextValue.assetTo.token, swapContextValue.assetFrom.amount)
        res.then((r)=>{
            sp.getTxInfo(r.transactionHash)
              .then((txInfo)=>{
                console.log(txInfo)
                if(!txInfo.logs){
                  showSwapNotExecuted(txInfo.raw_log)
                  return
                }
                const swapMsg = sp.parseSwapTx(txInfo)
                showSuccessSwap(r.transactionHash, swapMsg)
                refreshSwapContext()
              }).catch((e)=>{
                console.log(e)
              })
        }).catch((e)=>{
          console.log(e)
          showSwapNotExecuted(e.message)
        }).finally(()=>{
          setWaiting(false)
        })
      }])
      return
    }
    setButtonText('Retry')
    setOnClick([()=>{window.location.reload(false)}])
  },[keplrValue, swapContextValue])

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
