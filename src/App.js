import React from 'react';
import { ChakraProvider, Box,Flex,Image,Text} from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools';
import './App.css';

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

function App() {
  return (
    <ChakraProvider theme={theme}>
     <Box textAlign="center" fontSize="xl">
        <Flex  minH="100vh" alignItems={'center'} justifyContent={'center'} p={3}>
          <Box >
            <Flex justifyContent={'center'} pb={16}>
              <input className='pair-search-input'></input>
            </Flex>
            <Flex flexWrap={'wrap'}>
              <Box>
                <Flex width={['100%','auto']} justifyContent={'center'}>
                  <input className='asset-from-input' type="number" id="quantity"/>
                  <Box w={8}/>
                  <Image
                    borderRadius='lg'
                    width={[12,12,16]}
                    src='https://app.osmosis.zone/_next/image?url=%2Ftokens%2Fosmo.svg&w=64&q=75'
                    alt='OSMO'
                  />
                </Flex>
                <Text 
                  pt = {4}
                  textAlign={'center'}
                  w={'90%'} 
                  opacity={0.5} 
                  fontSize={14}>1 OSMO = $1.45</Text>
              </Box>
              <Flex width={['100%','auto']} pt={[4,0]} justifyContent={'center'}>
                <Text tabIndex={0} className='arrow-swap' fontSize={40} pt={2} pr={4} pl={4}>&#8594;</Text>
              </Flex>
              <Box>
                <Flex width={['100%','auto']} justifyContent={'center'}>
                  <Image
                      pt={0}
                      borderRadius='lg'
                      width={[12,12,16]}
                      src='https://app.osmosis.zone/_next/image?url=%2Ftokens%2Fatom.svg&w=64&q=75'
                      alt='ATOM'
                    />
                  <Text fontSize={40} p={2} w={170}>1023</Text>
                </Flex>
                <Text 
                    pt = {2}
                    textAlign={'center'}
                    w={'90%'} 
                    opacity={0.5} 
                    fontSize={14}>1 ATOM = $10.30</Text>
                </Box>
              </Flex>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
