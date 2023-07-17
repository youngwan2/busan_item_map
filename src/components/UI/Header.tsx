import React from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.search_container}>
        <label className={styles.search_icon} htmlFor="search">
          <FontAwesomeIcon style={{color:'black'}} icon={faMagnifyingGlass} />
        </label>
        <input placeholder="부산시 구군/물품명을 입력해보세요!" type="text" id="search" className={styles.search_input} />
      </div>
    </header>
  );
}

export default Header;
