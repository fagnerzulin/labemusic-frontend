import {
  Accordion,
  Checkbox,
  CheckboxGroup,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Input,
  Select,
  HStack,
  Box,
  Button,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import MenuButton from '../../components/MenuButton/MenuButton';
import palette from '../../constants/paletteColor';
import useProtectedPage from '../../hooks/useProtectedPage';
import {
  goToCreateMusicPage,
  goToListMusicPage,
} from '../../routers/coordinate';
import getAllAlbum from '../../services/album/getAllAlbum';
import {
  FormContainer,
  MainContainerList,
  MenuContainer,
  SubTitle,
  Title,
  InputContainer,
  ChoiseContainer,
  RegisterContainer,
} from './createMusicPage.styled';
import getAllGenre from '../../services/genre/getAllGenre';

export default function CreateMusicPage() {
  const history = useHistory();
  useProtectedPage(history);
  const [albums, setAlbums] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    (async () => {
      const albumResult = await getAllAlbum();
      const genresResult = await getAllGenre();

      if (albumResult.status && genresResult.status) {
        setAlbums(albumResult.albums);
        setGenres(genresResult.genres);
      }
    })();
  }, []);

  return (
    <MainContainerList>
      <MenuContainer>
        <Title>LabeMusic</Title>
        <Divider mb="10" />
        <MenuButton click={() => goToCreateMusicPage(history)}>
          Nova Música
        </MenuButton>
        <MenuButton click={() => goToListMusicPage(history)}>
          Listar Músicas
        </MenuButton>
      </MenuContainer>
      <FormContainer>
        <SubTitle>Cadastre sua Música</SubTitle>
        <Divider mb="5" mt="5" />

        <InputContainer>
          <FormControl mb="5" id="subtitle" isRequired>
            <FormLabel>Título da música</FormLabel>
            <Input
              borderColor={palette.blue}
              bg="white"
              placeholder="Título da música"
            />
          </FormControl>

          <FormControl mb="5" id="tile" isRequired>
            <FormLabel>Link da música</FormLabel>
            <Input
              borderColor={palette.blue}
              bg="white"
              placeholder="Link da música"
            />
          </FormControl>

          <ChoiseContainer>
            <FormControl mb="5" mr="5" id="album" isRequired>
              <FormLabel>Álbum</FormLabel>
              <Select
                borderColor={palette.blue}
                placeholder="Selecione o álbum"
              >
                {albums.length > 0 &&
                  albums.map((album) => (
                    <option key={album.id} value={album.id}>
                      {album.album}
                    </option>
                  ))}
              </Select>
            </FormControl>

            <Button>Registre um novo Álbum</Button>
          </ChoiseContainer>
          <ChoiseContainer>
            <FormControl mb="5" mr="5" as="fieldset" isRequired>
              <FormLabel as="legend">Genêros</FormLabel>
              <CheckboxGroup
                colorScheme="green"
                defaultValue={['naruto', 'kakashi']}
              >
                <Accordion allowMultiple>
                  <AccordionItem borderColor={palette.blue}>
                    {({ isExpanded }) => (
                      <>
                        {isExpanded ? (
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                Clique pra recolher
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                        ) : (
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                Clique pra expandir
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                        )}
                        <AccordionPanel bg="white">
                          <HStack>
                            {genres.length > 0 &&
                              genres.map((genre) => (
                                <Checkbox key={genre.id} value={genre.id}>
                                  {genre.genre}
                                </Checkbox>
                              ))}
                          </HStack>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                </Accordion>
              </CheckboxGroup>
              <FormHelperText>Selecione ao menos um genêro</FormHelperText>
            </FormControl>
            <Button>Registre um novo Genêro</Button>
          </ChoiseContainer>
        </InputContainer>

        <RegisterContainer>
          <Button colorScheme="green">Salvar Música</Button>
        </RegisterContainer>
      </FormContainer>
    </MainContainerList>
  );
}
