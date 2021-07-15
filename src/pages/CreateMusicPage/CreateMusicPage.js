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
import NewAlbumModal from '../../components/NewAlbumModal/NewAlbumModal';
import NewGenreModal from '../../components/NewGenreModal/NewGenreModal';
import useForm from '../../hooks/useForm';
import createMusic from '../../services/music/createMuisc';

const initialValue = {
  subtitle: '',
  file: '',
  genre: [],
  album: '',
};

export default function CreateMusicPage() {
  const history = useHistory();
  useProtectedPage(history);
  const [albums, setAlbums] = useState([]);
  const [genres, setGenres] = useState([]);
  const [form, onChange, clearForm] = useForm(initialValue);

  const onClickSave = async () => {
    window.event.preventDefault();
    const body = { ...form };

    const result = await createMusic(body);

    if (result.status) {
      clearForm(initialValue);
    }
  };

  const addNewAlbum = (album) => {
    setAlbums([...albums, album]);
  };

  const addNewGenre = (genre) => {
    setGenres([...genres, genre]);
  };

  const checkboxController = (value) => {
    const event = {
      target: {
        name: 'genre',
        value,
      },
    };
    onChange(event);
  };

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
      <FormContainer onSubmit={onClickSave}>
        <SubTitle>Cadastre sua Música</SubTitle>
        <Divider mb="5" mt="5" />

        <InputContainer>
          <FormControl mb="5" id="subtitle" isRequired>
            <FormLabel>Título da música</FormLabel>
            <Input
              value={form.subtitle}
              onChange={onChange}
              name="subtitle"
              borderColor={palette.blue}
              bg="white"
              placeholder="Título da música"
            />
          </FormControl>

          <FormControl mb="5" id="file" isRequired>
            <FormLabel>Link da música</FormLabel>
            <Input
              value={form.file}
              onChange={onChange}
              name="file"
              borderColor={palette.blue}
              bg="white"
              placeholder="Link da música"
            />
          </FormControl>

          <ChoiseContainer>
            <FormControl mb="5" mr="5" id="album" isRequired>
              <FormLabel>Álbum</FormLabel>
              <Select
                value={form.album}
                onChange={onChange}
                name="album"
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

            <NewAlbumModal addNewAlbum={addNewAlbum} />
          </ChoiseContainer>
          <ChoiseContainer>
            <FormControl mb="5" mr="5" as="fieldset" isRequired>
              <FormLabel as="legend">Genêros</FormLabel>
              <CheckboxGroup
                colorScheme="green"
                name="genre"
                value={form.genre}
                onChange={checkboxController}
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
            <NewGenreModal addNewGenre={addNewGenre} />
          </ChoiseContainer>
        </InputContainer>

        <RegisterContainer>
          <Button type="submit" colorScheme="green">
            Salvar Música
          </Button>
        </RegisterContainer>
      </FormContainer>
    </MainContainerList>
  );
}
