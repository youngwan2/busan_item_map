import styles from "./NavSearch.module.css";
import axios from "axios";
import DictionaryResult from "../module/DictionaryResult";
import { useState, useRef, useEffect } from "react";

export type DictionaryType = {
  title: string;
  thumbnail: string;
  link: string;
  description: string;
};

function NavSearch() {
  const [userInputValue, setUserInputValue] = useState("");
  const [display, setDisplay] = useState(false);
  const [items, setItems] = useState<DictionaryType[]>();

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

  const reqNaverSearchAPI = (value: string) => {
    axios
      .get(`http://localhost:3000/search/encyc?query=${value}`)
      .then((result) => {
        const data = result.data.response.items;
        console.log(data);
        setItems(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <span
        role="button"
        className={styles.nav_search_icon}
        onClick={() => {
          setDisplay(!display);
        }}
      ></span>
      <article
        className={styles.form}
        style={
          display
            ? {
                visibility: "visible",
                opacity: 1,
                transform: "scale(1)  translate(-50%)",
                transformOrigin: "bottom bottom",
              }
            : {
                visibility: "hidden",
                opacity: 0,
                transform: "scale(0.5) translate(-50%)",
                transformOrigin: "right bottom",
              }
        }
      >
        <h2 style={{ textAlign: "center" }}>네이버 백과사전</h2>
        <button className={styles.close_btn} onClick={()=>{
          setDisplay(false)
        }}>나가기</button>
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
            }}
          />
          <button
            className={styles.search_btn}
            type="button"
            onClick={() => {
              reqNaverSearchAPI(userInputValue);
            }}
          >
            찾기
          </button>
        </form>
        <DictionaryResult items={items} />
      </article>
    </>
  );
}

export default NavSearch;
