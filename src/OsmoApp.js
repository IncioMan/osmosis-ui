import React, { useEffect, useState, useRef } from 'react';
import {Box,Flex,Button, Spinner} from '@chakra-ui/react'
import './App.css';
import SwapContainer from './components/SwapContainer/SwapContainer';
import AppStageContext from './context/AppStageContext';
import SwapContext from './context/SwapContext';
import PairDropdown from './components/PairDropdown/PairDropdown';
import MainButton from './components/MainButton/MainButton';
import KeplrContext from './context/KeplrContext';
import { useSearchParams } from 'react-router-dom';

const appInitialStage = 'search'

function OsmoApp() {
  const [appStage, setAppStage] = useState('searchPair')
  const [searchParams, setSearchParams] = useSearchParams();
  const [keplrValue, setKeplrValue] = useState()

  const initialSwapContext = 
    {
        assetFrom:{
            token: searchParams.get("from")?searchParams.get("from"):'OSMO',
            amount: 0
        },
        assetTo: {
            token: searchParams.get("to")?searchParams.get("to"):'ATOM',
        }
    }
    const [swapContextValue, setSwapContextValue] = useState(initialSwapContext)

  return (
    <AppStageContext.Provider value={{appStage, setAppStage}}>
        <SwapContext.Provider value={{swapContextValue, setSwapContextValue}}>
            <KeplrContext.Provider value={{keplrValue, setKeplrValue}}>
                <Box textAlign="center" fontSize="xl">
                    <Flex  minH="100vh" alignItems={'center'} justifyContent={'center'} p={3}>
                    <Box >
                        <PairDropdown/>
                        <Box h={8}/>
                        <SwapContainer/>
                        <Box pt={16}>
                            <MainButton />
                        </Box>
                    </Box>
                    </Flex>
                </Box>
            </KeplrContext.Provider>
        </SwapContext.Provider>
    </AppStageContext.Provider>
  );
}

export default OsmoApp;
