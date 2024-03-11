import styles from '../NaverDictionary.module.scss';

const NaverCloseIcon = ({ setDisplay }: { setDisplay: (p: boolean) => void }) => {
  return (
    <button
      className={styles.close_btn}
      onClick={() => {
        setDisplay(false);
      }}
    >
      나가기
    </button>
  );
};

export default NaverCloseIcon;
