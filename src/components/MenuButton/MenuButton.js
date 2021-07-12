import React from 'react';
import { Button } from '@chakra-ui/react';
import palette from '../../constants/paletteColor';

export default function MenuButton({ children, click }) {
  return (
    <Button
      onClick={click}
      bg={palette.red}
      _active={{
        transform: 'scale(0.85)',
      }}
      _hover={{
        background: '#702E2E',
      }}
      color="white"
      mb="10"
    >
      {children}
    </Button>
  );
}
