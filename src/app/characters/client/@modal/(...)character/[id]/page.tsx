'use client';

import { Modal, Title } from '@/components/Mantine';
import { $isOpenCharacterModal, setIsOpenCharacterModal } from '@/app/characters/client/store';
import { useStore } from 'effector-react';

const CharacterModal = () => {
  const isOpenCharacterModal = useStore($isOpenCharacterModal);
  return (
    <Modal
      opened={isOpenCharacterModal}
      onClose={() => setIsOpenCharacterModal(false)}
      title="Single Character"
    >
      <Title>123qweasdZXC</Title>
    </Modal>
  );
};

export default CharacterModal;
