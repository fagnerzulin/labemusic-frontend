import { Divider } from '@chakra-ui/react';
import React from 'react';
import MenuButton from '../../components/MenuButton/MenuButton';

import {
  ListContainer,
  MainContainerList,
  MenuContainer,
  Title,
} from './listMusicPage.styled';

export default function ListMusicPage() {
  return (
    <MainContainerList>
      <MenuContainer>
        <Title>LabeMusic</Title>

        <Divider mb="10" />

        <MenuButton>Nova Música</MenuButton>
        <MenuButton>Listar Músicas</MenuButton>
      </MenuContainer>
      <ListContainer>lista aaai hahaha</ListContainer>
    </MainContainerList>
  );
}
