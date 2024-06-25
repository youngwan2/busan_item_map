import styles from './Maps.module.scss';

import { SlSizeFullscreen, SlSizeActual } from 'react-icons/sl';
interface PropsType {
  isFull: boolean;
  onClick: () => void;
}

export default function MapRoadViewSizeControlButton({
  isFull,
  onClick,
}: PropsType) {
  if (isFull)
    return (
      <button
        title="창모드 전환 버튼"
        onClick={onClick}
        className={`${styles.map_loadview_size_control_btn}`}
      >
        <SlSizeActual />
      </button>
    );
  else
    return (
      <button
        title="전체화면 전환 버튼"
        onClick={onClick}
        className={`${styles.map_loadview_size_control_btn}`}
      >
        <SlSizeFullscreen />
      </button>
    );
}
