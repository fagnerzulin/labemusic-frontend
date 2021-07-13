import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import SignUpModal from '../../components/SignUpModal/SignUpModal';
import palette from '../../constants/paletteColor';
import {
  Box,
  ContainerSignUp,
  MainContainerLogin,
  Text,
  Title,
} from './loginPage.styled';
import useForm from '../../hooks/useForm';
import login from '../../services/login';
import { saveToken } from '../../utils/localStorageFunctions';
import { goToListMusicPage } from '../../routers/coordinate';

const initialValue = {
  email: '',
  password: '',
};

export default function LoginPage() {
  const [form, onChange, clearForm] = useForm(initialValue);
  const history = useHistory();

  const onClickLogin = async () => {
    window.event.preventDefault();
    const body = { ...form };
    const result = await login(body);

    if (result.status) {
      saveToken(result.token);
      goToListMusicPage(history);
    }

    clearForm(initialValue);
  };

  return (
    <MainContainerLogin>
      <Box onSubmit={onClickLogin}>
        <Title>Login</Title>
        <FormControl id="email" isRequired>
          <FormLabel>E-mail</FormLabel>
          <Input
            value={form.email}
            onChange={onChange}
            name="email"
            type="email"
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

        <Button
          bg={palette.red}
          _active={{
            transform: 'scale(0.85)',
          }}
          _hover={{
            background: '#702E2E',
          }}
          color="white"
          size="md"
          type="submit"
        >
          Entrar
        </Button>
      </Box>
      <ContainerSignUp>
        <Text>É novo aqui?</Text>
        <Text>Faça já seu cadastro</Text>
        <SignUpModal />
      </ContainerSignUp>
    </MainContainerLogin>
  );
}
