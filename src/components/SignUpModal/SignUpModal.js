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
import { ContainerFormSingUp, SubTitle } from './signUpModal.styled';
import useForm from '../../hooks/useForm';
import signUp from '../../services/signUp';
import { saveToken } from '../../utils/localStorageFunctions';

const initialValues = {
  email: '',
  password: '',
  nickname: '',
  name: '',
};

export default function SignUpModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [form, onChange] = useForm(initialValues);

  const onClickSignUp = async () => {
    window.event.preventDefault();
    const body = { ...form };

    const result = await signUp(body);
    if (result.status) {
      saveToken(result.token);
    }
  };

  return (
    <>
      <Button
        onClick={onOpen}
        bg={palette.red}
        _active={{
          transform: 'scale(0.85)',
        }}
        _hover={{
          background: '#702E2E',
        }}
        color="white"
      >
        Sign Up
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg={palette.darkYellow}>
          <ModalHeader>
            <SubTitle>Cadastre-se</SubTitle>
            <Divider />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ContainerFormSingUp onSubmit={onClickSignUp}>
              <FormControl id="name" isRequired>
                <FormLabel>Nome de usuário</FormLabel>
                <Input
                  value={form.name}
                  onChange={onChange}
                  name="username"
                  type="text"
                />
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel>E-mail</FormLabel>
                <Input
                  value={form.email}
                  onChange={onChange}
                  name="email"
                  type="email"
                />
              </FormControl>

              <FormControl id="nickname" isRequired>
                <FormLabel>Nickname</FormLabel>
                <Input
                  value={form.nickname}
                  onChange={onChange}
                  name="nickname"
                  type="text"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Senha</FormLabel>
                <Input
                  value={form.password}
                  onChange={onChange}
                  name="password"
                  type="password"
                />
              </FormControl>
              <Divider />
              <ModalFooter>
                <Button type="submit" colorScheme="green">
                  Cadastrar
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
