import styles from "./db.module.css";
import { useRef, useEffect } from "react";

interface ButtonType {
  getNutritions: any[];
  setNextIndex: (index: number) => void;
  nextIndex: number;
}

function DbAddButton({ getNutritions, setNextIndex, nextIndex }: ButtonType) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <button
      ref={buttonRef}
      disabled={getNutritions.length === 0}
      className={styles.add_btn}
      onClick={() => {
        const copy = getNutritions.slice(nextIndex, nextIndex + 8);
        if (copy.length === getNutritions.length) {
            alert("추가 데이터가 존재하지 않습니다.")
        }
        setNextIndex((nextIndex += 8));
      }}
    >
      더보기
    </button>
  );
}

export default DbAddButton;
