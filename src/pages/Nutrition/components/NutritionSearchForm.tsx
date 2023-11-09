import { forwardRef, useEffect, RefObject } from "react";
import styles from "./NutritionDb.module.scss";
import { useRef } from "react";

function NutritionSearchForm({
  setItemName,
}: {
  setItemName: (name: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className={styles.search_container}
    >
      <input
        className={styles.search_input}
        ref={inputRef}
        type="search"
        placeholder="음식명을 입력해주세요!"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setItemName(e.currentTarget.value);
            setTimeout(() => {
              inputRef.current && (inputRef.current.value = "");
            }, 100);
          }
        }}
      />
      <SearchButton inputRef={inputRef} setItemName={setItemName} />
    </form>
  );
}
interface ButtonType {
  inputRef: RefObject<HTMLInputElement>;
  setItemName: (p: string) => void;
}

const SearchButton = forwardRef(({ inputRef, setItemName }: ButtonType, _) => {
  return (
    <button
      className={styles.search_btn}
      type="button"
      onClick={() => {
        if (inputRef.current) setItemName(inputRef.current.value);
        setTimeout(() => {
          if (inputRef.current) inputRef.current.value = "";
        }, 100);
      }}
    >
      검색
    </button>
  );
});

export default NutritionSearchForm;
