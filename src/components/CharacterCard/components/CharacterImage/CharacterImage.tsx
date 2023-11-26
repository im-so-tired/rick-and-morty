import { FC } from 'react';
import Image from 'next/image';
import styles from './CharacterImage.module.css';

interface CharacterImageProps {
  src: string;
}

export const CharacterImage: FC<CharacterImageProps> = ({ src }) => {
  return (
    <div className={styles.image_container}>
      <Image src={src} fill sizes="204.8px" alt="character image" />
    </div>
  );
};
