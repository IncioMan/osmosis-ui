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
import { Switch, FormControl, FormLabel, Input} from '@chakra-ui/react'
import { Icon,Link } from '@chakra-ui/react'
import { FaTwitter, FaGithub } from 'react-icons/fa'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text
  } from '@chakra-ui/react'



const appInitialStage = 'search'

function OsmoApp() {
    const [appStage, setAppStage] = useState('searchPair')
    const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(true)
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
    const [networkValue, setNetworkValue] = useState(mainnet)
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
            console.log(e)
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
        },
        slippage: 1
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

    const disclaimer = ()=>{
        return <Modal isCentered isOpen={isDisclaimerOpen} onClose={()=>setIsDisclaimerOpen(false)}>
                    <ModalOverlay
                        bg='blackAlpha.300'
                        backdropFilter='blur(10px)'
                        />
                    <ModalContent>
                    <ModalHeader bg='blackAlpha.700'>Disclaimer</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody bg='blackAlpha.700'>
                        <Text color={'white'}>
                            The code for this interface has not been audited and is simply the result
                            of my passion for both programming and Osmosis.
                        </Text>
                        <Text color={'white'}>
                            I decline any responsability for funds lost or swapped to wrong assets.
                            Always double check the transaction before signing it. 
                        </Text>
                        <Text color={'white'}>
                        Use at your own risk.
                        </Text>
                    </ModalBody>
                    <ModalFooter bg='blackAlpha.700'>
                    </ModalFooter>
                    </ModalContent>
                </Modal>
    }

    const setSlippage = (slippage)=>{
        const context = 
        {
            assetFrom:{
                token: swapContextValue.assetFrom.token,
                amount: swapContextValue.assetFrom.amount
            },
            assetTo: {
                token: swapContextValue.assetTo.token,
            },
            slippage: slippage
        }
        setSwapContextValue(context)
    }

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
                        <Box position={'absolute'} w={'90%'} top={[4,8,12]} right={[4,8,12]}>
                            <FormControl display='flex' alignItems='center' justifyContent={'end'}>
                                <FormLabel htmlFor='emaeil-alerts' mb='0'>
                                    Mainnet
                                </FormLabel>
                                <Switch id='network'
                                        width={14}
                                        colorScheme={'gray'}
                                        onChange={(e)=>{
                                            if(e.target.checked){
                                                setNetworkValue(mainnet)
                                            }else{
                                                setNetworkValue(testnet)
                                            }
                                        }} 
                                        defaultChecked={true}/>
                            </FormControl>
                            <FormControl display='flex' alignItems='center' justifyContent={'end'}>
                                <FormLabel htmlFor='emaeil-alerts' mb='0'>
                                    Slippage (%)
                                </FormLabel>
                                <Input value={swapContextValue.slippage} 
                                       width={14} 
                                       border={'none'}
                                       borderBottom={'solid'}
                                       borderRadius={0}
                                       outline={'none'}
                                       boxShadow='none !important'
                                       type={'number'}
                                       onChange={(e)=>{
                                        if(e.target.value){
                                            setSlippage(e.target.value)
                                        }else{
                                            setSlippage('')
                                        }
                                    }}>
                                </Input>
                            </FormControl>
                        </Box>
                        <Flex 
                            justifyContent={'start'}
                            position={'absolute'} 
                            w={'90%'} 
                            bottom={[4,8,12]} 
                            left={[4,8,12]}>
                            <Link href='https://twitter.com/IncioMan' isExternal>
                                <Icon as={FaTwitter} w={6} h={6} />
                            </Link>
                            <Link href='https://github.com/IncioMan' isExternal>
                                <Icon as={FaGithub} w={6} h={6} mx={4}/>
                            </Link>
                        </Flex>
                    </Box>
                    {disclaimer()}
                </NetworkContext.Provider>
            </KeplrContext.Provider>
        </SwapContext.Provider>
    </AppStageContext.Provider>
  );
}

export default OsmoApp;
