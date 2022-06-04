import React, { useEffect, useState, useRef } from 'react';
import {Box,Flex,Button, Spinner} from '@chakra-ui/react'
import './App.css';
import SwapContainer from './components/SwapContainer/SwapContainer';
import AppStageContext from './context/AppStageContext';
import SwapContext from './context/SwapContext';
import PairDropdown from './components/PairDropdown/PairDropdown';
import MainButton from './components/MainButton/MainButton';
import KeplrContext from './context/KeplrContext';
import NetworkContext from './context/NetworkContext';
import { useSearchParams } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'
import { Switch, FormControl, FormLabel} from '@chakra-ui/react'


const appInitialStage = 'search'

function OsmoApp() {
    const [appStage, setAppStage] = useState('searchPair')
    const [searchParams, setSearchParams] = useSearchParams();
    const [keplrValue, setKeplrValue] = useState({wallet:null,accounts:null})
    const mainnet = 
    {
        chainId: 'osmosis-1',
        rpc: 'https://rpc.osmosis.zone/', 
        lcd: 'https://lcd.osmosis.zone/'
    }
    const testnet = 
    {
        chainId: 'osmo-test-4',
        rpc: 'https://testnet-rpc.osmosis.zone/', 
        lcd: 'https://testnet-rest.osmosis.zone/'
    }
    const [networkValue, setNetworkValue] = useState(testnet)
    const toast = useToast()

    window.onload = async () =>
    {
        if(!window.keplr){
            setKeplrValue({wallet:null, accounts:null})
            return
        }
        
        let accounts = []
        try{
            const chainId = networkValue.chainId
            await window.keplr.enable(chainId);
            const offlineSigner = window.keplr.getOfflineSigner(chainId);
            accounts = await offlineSigner.getAccounts();
        }catch(e){
            toast({
            title: 'No address detected',
            description: 'You need to log into your Keplr extension and reload the page',
            status: 'error',
            duration: 4000,
            isClosable: false,
            })
            setKeplrValue({wallet:window.keplr,accounts:null})
        }
        if(accounts.length>0){
            setKeplrValue({wallet:window.keplr,accounts:accounts})
            toast({
            title: 'Wallet connected',
            description: accounts[0].address,
            status: 'success',
            duration: 4000,
            isClosable: false,
            })
        }
    }

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

    function insertUrlParam(key, value) {
        if (window.history.pushState) {
            let searchParams = new URLSearchParams(window.location.search);
            searchParams.set(key, value);
            let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + searchParams.toString();
            window.history.pushState({path: newurl}, '', newurl);
        }
    }

    useEffect(()=>{
        insertUrlParam("from", swapContextValue.assetFrom.token ? swapContextValue.assetFrom.token:'OSMO')
        insertUrlParam("to", swapContextValue.assetTo.token?swapContextValue.assetTo.token:'ATOM')
    }, [swapContextValue])

    return (
    <AppStageContext.Provider value={{appStage, setAppStage}}>
        <SwapContext.Provider value={{swapContextValue, setSwapContextValue}}>
            <KeplrContext.Provider value={{keplrValue, setKeplrValue}}>
                <NetworkContext.Provider value={{networkValue, setNetworkValue}}>
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
                        <Box position={'absolute'} w={'100%'} top={[2,8,12]} right={[2,8,12]}>
                            <FormControl display='flex' alignItems='center' justifyContent={'end'}>
                                <FormLabel htmlFor='emaeil-alerts' mb='0'>
                                    Mainnet
                                </FormLabel>
                                <Switch id='email-alerts'
                                        colorScheme={'gray'}
                                        onChange={(e)=>{
                                            if(e.target.checked){
                                                setNetworkValue(mainnet)
                                            }else{
                                                setNetworkValue(testnet)
                                            }
                                        }} 
                                        value={true}/>
                            </FormControl>
                        </Box>
                    </Box>
                </NetworkContext.Provider>
            </KeplrContext.Provider>
        </SwapContext.Provider>
    </AppStageContext.Provider>
  );
}

export default OsmoApp;
