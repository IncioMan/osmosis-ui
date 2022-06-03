import React from 'react';
import { ChakraProvider} from '@chakra-ui/react'
import theme from './theme';
import './App.css';
import OsmoApp from './OsmoApp';
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<OsmoApp />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
