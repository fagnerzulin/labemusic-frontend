import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  SimpleGrid,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import MenuButton from '../../components/MenuButton/MenuButton';
import palette from '../../constants/paletteColor';
import getAllMusic from '../../services/getAllMusics';

import {
  ListContainer,
  MainContainerList,
  MenuContainer,
  Title,
} from './listMusicPage.styled';

export default function ListMusicPage() {
  const [musics, setMusics] = useState([]);

  const handleClick = async () => {
    const result = await getAllMusic();

    if (result.status) {
      setMusics(result.musics);
    }
  };

  return (
    <MainContainerList>
      <MenuContainer>
        <Title>LabeMusic</Title>

        <Divider mb="10" />

        <MenuButton>Nova Música</MenuButton>
        <MenuButton click={handleClick}>Listar Músicas</MenuButton>
      </MenuContainer>
      <ListContainer>
        <SimpleGrid
          style={{ margin: '20px auto' }}
          columns={[1, 1, 1, 2]}
          spacingX="90px"
          spacingY="30px"
        >
          {musics.length > 0 &&
            musics.map((music) => (
              <Accordion key={music.id} allowMultiple>
                <AccordionItem color="#fff" bg={palette.blue}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        {music.subtitle}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    pb={4}
                  >
                    Autor: {music.author}{' '}
                    <Button colorScheme="blackAlpha" size="sm">
                      Saiba mais
                    </Button>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            ))}
        </SimpleGrid>
      </ListContainer>
    </MainContainerList>
  );
}
