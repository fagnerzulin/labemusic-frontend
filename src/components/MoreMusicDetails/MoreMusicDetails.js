import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import palette from '../../constants/paletteColor';
import getMusicBy from '../../services/music/getMusicBy';
import formatDate from '../../utils/formatDate';
import { Field, SubTitle, Text } from './moreMusicDetails.styled';

export default function MoreMusicDetails({ id }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [music, setMusic] = useState({});

  useEffect(() => {
    (async () => {
      const result = await getMusicBy(id);

      if (result.status) {
        const data = {
          ...result.music,
          genre: result.music.genre.join(', '),
          date: formatDate(result.music.date),
        };
        setMusic(data);
      }
    })();
  }, [id]);

  return (
    <>
      <Button onClick={onOpen} colorScheme="blackAlpha" size="sm">
        Mais Detalhes
      </Button>
      <Modal size="2xl" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent padding="1.5" color="#fff" bg={palette.blue}>
          <ModalHeader>
            <SubTitle>{music.subtitle}</SubTitle>
            <Divider />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDir="column" alignItems="center">
            <Field>Álbum:</Field> <Text>{music.album}</Text>
            <Field>Genêros:</Field> <Text>{music.genre}</Text>
            <Field>Data:</Field> <Text>{music.date}</Text>
            <ReactPlayer className="player" controls url={music.file} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
