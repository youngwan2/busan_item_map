import styles from "../LocalFood.module.scss";
import { RefObject, useRef } from "react";

interface PropsType {
  categoryTopShifter: (p: RefObject<HTMLLIElement>) => void;
  categoryBottomShifter: (p: RefObject<HTMLLIElement>) => void;
}
const ScrollButtonPanel = ({
  categoryTopShifter,
  categoryBottomShifter,
}: PropsType) => {
  const topBtnRef = useRef<HTMLLIElement>(null);
  const bottomBtnRef = useRef<HTMLLIElement>(null);

  return (
    <ul className={styles.category_shift_btn_con}>
      <li
        onClick={() => {
          categoryTopShifter(topBtnRef);
        }}
        ref={topBtnRef}
      >
        <button>▲</button>
      </li>
      <li
        onClick={() => {
          categoryBottomShifter(bottomBtnRef);
        }}
        ref={bottomBtnRef}
      >
        <button>▼</button>
      </li>
    </ul>
  );
};

export default ScrollButtonPanel;
