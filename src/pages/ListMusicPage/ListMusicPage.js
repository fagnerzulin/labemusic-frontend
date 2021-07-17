import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  SimpleGrid,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import MenuButton from '../../components/MenuButton/MenuButton';
import MoreMusicDetails from '../../components/MoreMusicDetails/MoreMusicDetails';
import palette from '../../constants/paletteColor';
import useProtectedPage from '../../hooks/useProtectedPage';
import { goToCreateMusicPage } from '../../routers/coordinate';
import getAllMusic from '../../services/music/getAllMusics';

import {
  ListContainer,
  MainContainerList,
  MenuContainer,
  Title,
  Warning,
} from './listMusicPage.styled';

export default function ListMusicPage() {
  const [musics, setMusics] = useState([]);
  const history = useHistory();
  useProtectedPage(history);

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

        <MenuButton click={() => goToCreateMusicPage(history)}>
          Nova Música
        </MenuButton>
        <MenuButton click={handleClick}>Listar Músicas</MenuButton>
      </MenuContainer>
      <ListContainer>
        {musics.length === 0 && (
          <Warning>
            Clique em Listar Músicas ou em Nova Música para começar 🎶💃🏽🕺🏽🎵
          </Warning>
        )}
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
                    Autor: {music.author} <MoreMusicDetails id={music.id} />
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            ))}
        </SimpleGrid>
      </ListContainer>
    </MainContainerList>
  );
}
