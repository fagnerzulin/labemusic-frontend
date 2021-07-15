import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import palette from '../../constants/paletteColor';
import { ContainerFormSingUp, SubTitle } from './newGenreModal.styled';
import useForm from '../../hooks/useForm';
import createGenre from '../../services/genre/createGenre';

const initialValues = { name: '' };

export default function NewGenreModal({ addNewGenre }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [form, onChange, clearForm] = useForm(initialValues);

  const onClickSave = async () => {
    window.event.preventDefault();
    const body = { ...form };

    const result = await createGenre(body);
    if (result.status) {
      addNewGenre(result.genre);
      clearForm(initialValues);
      onClose();
    }
  };

  return (
    <>
      <Button
        padding="5"
        onClick={onOpen}
        bg={palette.blue}
        _active={{
          transform: 'scale(0.85)',
        }}
        _hover={{
          background: '#5c779a',
        }}
        color="white"
      >
        Registre um novo Genêro
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg={palette.darkYellow}>
          <ModalHeader>
            <SubTitle>Novo Genêro</SubTitle>
            <Divider />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ContainerFormSingUp onSubmit={onClickSave}>
              <FormControl id="name" isRequired>
                <FormLabel>Nome do Genêro</FormLabel>
                <Input
                  value={form.name}
                  onChange={onChange}
                  name="name"
                  type="text"
                />
              </FormControl>

              <Divider mt="10" />
              <ModalFooter>
                <Button type="submit" colorScheme="green">
                  Salvar
                </Button>
                <Button colorScheme="gray" ml={3} onClick={onClose}>
                  Cancelar
                </Button>
              </ModalFooter>
            </ContainerFormSingUp>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
