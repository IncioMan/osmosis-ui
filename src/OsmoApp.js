import React, { useEffect, useState, useRef } from 'react';
import {Box,Flex,Button, Spinner} from '@chakra-ui/react'
import './App.css';
import SwapContainer from './components/SwapContainer/SwapContainer';
import AppStageContext from './context/AppStageContext';
import SwapContext from './context/SwapContext';
import PairDropdown from './components/PairDropdown/PairDropdown';

const appInitialStage = 'search'
const initialSwapContext = 
{
    assetFrom:{
        token: 'OSMO',
        amount: 0
    },
    assetTo: {
        token: 'ATOM'
    }
}

function OsmoApp() {
  const [swapContextValue, setSwapContextValue] = useState(initialSwapContext)
  const [appStage, setAppStage] = useState('searchPair')
  const [waiting, setWaiting] = useState(false)
  const swapButtonRef = useRef(null);

  useEffect(()=>{
    console.log(appStage)
    if(appStage=='clickSwap'){
        swapButtonRef.current.focus()
    }
  },[appStage])

  return (
    <AppStageContext.Provider value={{appStage, setAppStage}}>
        <SwapContext.Provider value={{swapContextValue, setSwapContextValue}}>
            <Box textAlign="center" fontSize="xl">
                <Flex  minH="100vh" alignItems={'center'} justifyContent={'center'} p={3}>
                <Box >
                    <PairDropdown/>
                    <Box h={8}/>
                    <SwapContainer/>
                    <Box pt={16}>
                    {(waiting)&&<Spinner />}
                    {(!waiting)&&<Button 
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
                        }} ref={swapButtonRef}
                        onKeyUp={(e)=>{
                            if (e.key === 'Enter') {
                                setWaiting(true)
                            }
                        }}>SWAP</Button>}
                    </Box>
                </Box>
                </Flex>
            </Box>
        </SwapContext.Provider>
    </AppStageContext.Provider>
  );
}

export default OsmoApp;
