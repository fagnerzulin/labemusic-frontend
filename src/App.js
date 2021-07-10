import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import Router from './routers/Router';
import palette from './constants/paletteColor';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: palette.beige,
        fontFamily: 'Roboto',
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  );
}

export default App;
