import styles from "./NavSearch.module.css";
import axios from "axios";
import DictionaryResult from "../module/DictionaryResult";
import ReactSpinner from "./loading/ReactSpinner";
import { useState, useRef, useEffect } from "react";

export type DictionaryType = {
  title: string;
  thumbnail: string;
  link: string;
  description: string;
};

function NavSearch() {
  const [userInputValue, setUserInputValue] = useState("");
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    if (process.env.NODE_ENV === "production") {
      axios
        .get(`/search/encyc?query=${value}`)
        .then((result) => {
          const data = result.data.response.items;
          setItems(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          alert("데이터를 가져오던 중 문제가 발생하였습니다.");
          setLoading(false);
        });
    } else {
      axios
        .get(`http://localhost:3000/search/encyc?query=${value}`)
        .then((result) => {
          const data = result.data.response.items;
          setItems(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  };

  return (
    <>
      {/* 아이콘 */}
      <span
        role="button"
        className={styles.nav_search_icon}
        onClick={() => {
          setDisplay(!display);
        }}
      ></span>
      {/* 콘텐츠 뷰 */}
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
        <button
          className={styles.close_btn}
          onClick={() => {
            setDisplay(false);
          }}
        >
          나가기
        </button>
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
        {loading ? <span style={{position:'relative', transform:'translate(-50%)',left:'40%'}}><ReactSpinner /></span> : <DictionaryResult items={items} />}
      </article>
    </>
  );
}

export default NavSearch;
