import styles from './Maps.module.scss';

import { ReactNode } from 'react';

interface PropsType {
  isAtive: boolean;
  isFull: boolean;
  children: ReactNode;
}

export default function MapRoadViewContainer({
  children,
  isAtive,
  isFull,
}: PropsType) {
  return (
    <div
      className={`${styles.map_roadview_container} ${isAtive ? styles.active : ''} ${isFull ? styles.full : ''}`}
    >
      {children}
    </div>
  );
}
