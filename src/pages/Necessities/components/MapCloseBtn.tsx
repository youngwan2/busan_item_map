import styles from './Map.module.css';

interface PropsType {
  setIsDisplay?: (state: boolean) => void;
  isDisplay?: boolean;
}
const MapCloseBtn = ({ setIsDisplay, isDisplay }: PropsType) => {
  return (
    <span
      onClick={() => {
        setIsDisplay && setIsDisplay(!isDisplay);
      }}
      className={styles.close_btn}
    >
      ✕
    </span>
  );
};

export default MapCloseBtn;
