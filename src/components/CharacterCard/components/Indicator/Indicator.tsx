import { FC } from 'react';
import cn from 'classnames';
import styles from './Indicator.module.css';

interface IndicatorProps {
  status: Status;
}

export const Indicator: FC<IndicatorProps> = ({ status }) => {
  return <span className={cn(styles.indicator, styles[status.toLowerCase()])} />;
};
