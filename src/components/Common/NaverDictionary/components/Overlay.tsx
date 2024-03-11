import styles from './Overlay.module.css';
import { useRef } from 'react';

interface PropsType {
  display: boolean;
  setDisplay: (value: boolean) => void;
}
function Overlay({ display, setDisplay }: PropsType) {
  const circleRef = useRef<SVGCircleElement>(null);
  return (
    <div
      className={styles.overlay}
      onClick={() => {
        setDisplay(!display);
      }}
      style={display ? { visibility: 'visible', opacity: 1 } : { visibility: 'hidden', opacity: 0 }}
    ></div>
  );
}

export default Overlay;
