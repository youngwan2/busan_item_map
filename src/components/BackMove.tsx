import { HiArrowLeft } from 'react-icons/hi';
import styles from './BackMove.module.scss';
export default function BackMove() {
  return (
    <button
      className={styles.backmove_btn}
      aria-label="뒤로가기 버튼"
      onClick={() => {
        window.history.go(-1);
      }}
    >
      <HiArrowLeft />
    </button>
  );
}
