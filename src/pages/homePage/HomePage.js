import { Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import MainContainer from '../../components/StyledComponents/MainContainer.styled';
import palette from '../../constants/paletteColor';
import { goToListMusicPage, goToLoginPage } from '../../routers/coordinate';
import { hasToken } from '../../utils/localStorageFunctions';
import { Box, Subtitle, Title } from './homePage.styled';

export default function HomePage() {
  const history = useHistory();

  const [hasTokenValue, setHasTokenValue] = useState(false);

  useEffect(() => {
    setHasTokenValue(hasToken());
  }, []);
  return (
    <MainContainer>
      <Box>
        <Title>LabeMusic</Title>
        <Subtitle>🎶 Aqui sua música acontece 🎵</Subtitle>
        <Button
          bg={palette.red}
          _active={{
            transform: 'scale(0.85)',
          }}
          _hover={{
            background: '#702E2E',
          }}
          color="white"
          size="lg"
          onClick={() =>
            hasTokenValue ? goToListMusicPage(history) : goToLoginPage(history)
          }
        >
          {hasTokenValue ? 'Lista de músicas' : 'Login'}
        </Button>
      </Box>
    </MainContainer>
  );
}
