import styles from './Maps.module.scss';

import { BiStreetView } from 'react-icons/bi';

interface PropsType {
  id: string;
  isAtive: boolean;
  onClick: () => void;
}

export default function RoadviewButton({ id, isAtive, onClick }: PropsType) {
  return (
    <button
      title="로드뷰 열기 버튼"
      className={`${isAtive ? styles.active : ''} ${styles.map_roadview_button} `}
      id={id}
      onClick={onClick}
    >
      <BiStreetView />
    </button>
  );
}
