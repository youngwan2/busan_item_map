import React from "react";
import styles from "./Pagination.module.css";
import { useState,useEffect } from "react";


type PaginationType ={
  setPage:(currentPage:number) => void
}


function Pagination({setPage}:PaginationType) {
  // 총 페이지
  const [totalNum, setTotalNum] = useState(100);
  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);
  // 현재 페이지가 속한 그룹
  const [currentGroup,setCurrentGroup] = useState(Math.ceil(currentPage / 10));
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
   
        console.log("현재 페이지:",currentPage)
        setPage(currentPage)
      }}
    >
      Prev
    </button>
  );
  for (let i = firstPage-1; i < lastPage; i++) {
    render.push(
      <li
        style={
          currentPage-1 === i 
            ? { backgroundColor:"rgb(19, 66, 221)" }
            : { backgroundColor: "" }
        }
        onClick={() => {
          const switchPage = i+1;
          let updatePage = switchPage
          pageSwitch(updatePage);
          setCurrentPage((number) => (number = updatePage));
          console.log("현재 페이지:",currentPage)
          setPage(currentPage)
        }}
        className={styles.page_item}
        key={i+1}
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
        console.log("현재 페이지:",currentPage)
        setPage(currentPage)
      }}
    >
      Next
    </button>
  );



  return (
    <article>
      <ul className={styles.page_container}>{render}</ul>
    </article>
  );
}

export default Pagination;
