import { FC } from 'react';
import { default as NextImage, ImageProps as NextImageProps } from 'next/image';
import styles from './Image.module.css';

export const Image: FC<NextImageProps> = ({ height, width, ...rest }) => {
  return (
    <div className={styles.image_container} style={{ height, width, position: 'relative' }}>
      <NextImage {...rest} fill />
    </div>
  );
};
