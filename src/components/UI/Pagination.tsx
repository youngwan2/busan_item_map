import React, { MouseEvent } from "react";
import styles from "./Pagination.module.css";
import { useState } from "react";

function Pagination() {
  // 총 페이지
  const [totalNum, setTotalNum] = useState(100);
  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);
  // 현재 페이지가 속한 그룹
  const [currentGroup] = useState(Math.ceil(currentPage / 10));
  // 마지막 페이지
  const [lastPage] = useState(currentGroup * 10);
  // 첫 페이지 번호
  const [firstPage] = useState(lastPage - 10 + 1);

  function pageSwitch(i: number) {
    // console.log("이동페이지:", i);
  }

  /* 페이지네이션 실질적으로 그려넣는 역할 */
  const render = [];
  render.push(
    <button
      className={styles.prev_btn}
      style={
        currentPage === 1 ? { visibility: "hidden" } : { visibility: "visible" }
      }
      onClick={() => {
        if (currentPage === 1) return;
        setCurrentPage((number) => (number -= 1));
      }}
    >
      Prev
    </button>
  );
  for (let i = 0; i < 10; i++) {
    render.push(
      <li
        style={
          currentPage === i + 1
            ? { backgroundColor: "black" }
            : { backgroundColor: "" }
        }
        onClick={() => {
          const switchPage = i + 1;
          pageSwitch(switchPage);
          setCurrentPage((number) => (number = switchPage));
        }}
        className={styles.page_item}
        key={i}
      >
        {i + 1}
      </li>
    );
  }
  render.push(
    <button
      className={styles.next_btn}
      onClick={() => {
        setCurrentPage((number) => (number += 1));
      }}
    >
      Next
    </button>
  );

  return (
    <article>
      <h1>페이지네이션</h1>
      <ul className={styles.page_container}>{render}</ul>
    </article>
  );
}

export default Pagination;
