import { useEffect, useRef, useState } from "react";
import styles from "../NaverDictionary.module.scss";

interface PropsType {
  display: boolean;
  getNaverSearchData: (value: string) => void;
}
const NaverSearchForm = ({ display, getNaverSearchData }: PropsType) => {
  const [userInputValue, setUserInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function focus() {
    if (display && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }

  useEffect(() => {
    focus();
  }, [display]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        ref={inputRef}
        className={styles.user_input}
        type="search"
        onKeyUp={(e) => {
          setUserInputValue(e.currentTarget.value);
          if (e.code === "Enter") getNaverSearchData(e.currentTarget.value);
        }}
      />
      <button
        className={styles.search_btn}
        type="button"
        onClick={() => {
          getNaverSearchData(userInputValue);
        }}
      >
        찾기
      </button>
    </form>
  );
};

export default NaverSearchForm;
