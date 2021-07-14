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
import React from 'react';
import { useHistory } from 'react-router-dom';
import MenuButton from '../../components/MenuButton/MenuButton';
import palette from '../../constants/paletteColor';
import useProtectedPage from '../../hooks/useProtectedPage';
import {
  goToCreateMusicPage,
  goToListMusicPage,
} from '../../routers/coordinate';
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

export default function CreateMusicPage() {
  const history = useHistory();
  useProtectedPage(history);

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
                <option>Ceremonials</option>
                <option>A Night at the Opera</option>
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
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Clique para expandir
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel bg="white">
                      <HStack>
                        <Checkbox value="naruto">Naruto</Checkbox>
                        <Checkbox value="sasuke">Sasuke</Checkbox>
                        <Checkbox value="kakashi">kakashi</Checkbox>
                      </HStack>
                    </AccordionPanel>
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
