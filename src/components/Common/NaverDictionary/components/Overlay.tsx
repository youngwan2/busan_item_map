import { CSSProperties } from 'react';
import styles from './Overlay.module.css';

interface PropsType {
  display: boolean;
  setDisplay: (value: boolean) => void;
}
function Overlay({ display, setDisplay }: PropsType) {

  const onClickSetDisplay = () => {
    setDisplay(!display);
  }
  const overlayDisplayStyle: CSSProperties = display ? { visibility: 'visible', opacity: 1 } : { visibility: 'hidden', opacity: 0 }
  return (
    <div
     aria-label='모달 뒷 배경'
      className={styles.overlay}
      onClick={onClickSetDisplay}
      style={overlayDisplayStyle}
    ></div>
  );
}

export default Overlay;
