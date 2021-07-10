import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import palette from './constants/paletteColor';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: palette.purple,
        fontFamily: 'Roboto',
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div>oi</div>
    </ChakraProvider>
  );
}

export default App;
