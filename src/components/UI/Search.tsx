import React, { useState } from "react";
import styles from "./Search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

type setGugunType = {
  setGugun: (gugun: string) => void;
  setCurrentPage:(page:number) =>void;
};

function Search({ setGugun,setCurrentPage }: setGugunType) {
  //   const [stage, setStage] = useState('')

  return (
    <article className={styles.search}>
      <div className={styles.search_container}>
        <label className={styles.search_icon} htmlFor="search">
          <FontAwesomeIcon
            style={{ color: "black" }}
            icon={faMagnifyingGlass}
          />
        </label>
        <input
          onKeyUp={(e) => {
            if (e.code === "Enter") {
              setGugun(e.currentTarget.value);
              setCurrentPage(1)
              console.log(e.currentTarget.value)
            }
          }}
          placeholder="부산시 구군/물품명을 입력해보세요!"
          type="text"
          id="search"
          className={styles.search_input}
        />
      </div>
    </article>
  );
}

export default Search;
