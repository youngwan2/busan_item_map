
import { useEffect, useState } from "react";
import useGetData from "../../custom/useGetData";
import styles from "./Search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";



function Search(){

   const url =`http://apis.data.go.kr/1471000/FoodNtrIrdntInfoService1/getFoodNtrItdntList1?servicekey=${process.env.REACT_APP_BUSAN_KEY}&type=json`


    // const {data, loading,error} =useGetData(url)
  // console.log(data,loading,error)
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
              console.log(e.currentTarget.value)
            }
          }}
          placeholder="음식명을 입력 후 [Enter] 를 눌러주세요!!"
          type="text"
          id="search"
          className={styles.search_input}
        />
      </div>
    </article>
  );
}

export default Search;
