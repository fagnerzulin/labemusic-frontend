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
import { ContainerFormSingUp, SubTitle } from './newAlbumModal.styled';
import useForm from '../../hooks/useForm';
import createAlbum from '../../services/album/createAlbum';

const initialValues = { name: '' };

export default function NewAlbumModal({ addNewAlbum }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [form, onChange, clearForm] = useForm(initialValues);

  const onClickSave = async () => {
    window.event.preventDefault();
    const body = { ...form };

    const result = await createAlbum(body);
    if (result.status) {
      addNewAlbum(result.album);
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
        Registre um novo Álbum
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg={palette.darkYellow}>
          <ModalHeader>
            <SubTitle>Novo Álbum</SubTitle>
            <Divider />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ContainerFormSingUp onSubmit={onClickSave}>
              <FormControl id="name" isRequired>
                <FormLabel>Nome do Álbum</FormLabel>
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
