import React from 'react';
import { ChakraProvider} from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools';
import './App.css';
import OsmoApp from './OsmoApp';

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
      <OsmoApp/>
    </ChakraProvider>
  );
}

export default App;
