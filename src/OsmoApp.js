import React, { useEffect, useState, useRef } from 'react';
import {Box,Flex,Button, Spinner} from '@chakra-ui/react'
import './App.css';
import SwapContainer from './components/SwapContainer/SwapContainer';
import AppStageContext from './context/AppStageContext';
import SwapContext from './context/SwapContext';
import PairDropdown from './components/PairDropdown/PairDropdown';
import MainButton from './components/MainButton/MainButton';

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
                        <MainButton />
                    </Box>
                </Box>
                </Flex>
            </Box>
        </SwapContext.Provider>
    </AppStageContext.Provider>
  );
}

export default OsmoApp;
