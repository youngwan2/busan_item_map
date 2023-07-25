import { useCallback, useEffect, useState } from "react";
import styles from "./Search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Header from "./Header";
import axios from "axios";

interface SearchType {
  fixed: boolean;
}

function Search({ fixed }: SearchType) {

  const test = useAppSelector((state) => { return state.search.value })
  console.log(test)

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const getSearchData = useCallback(async (item: string) => {
    try {
      const response = await axios.get(`http://apis.data.go.kr/1471000/FoodNtrIrdntInfoService1/getFoodNtrItdntList1?servicekey=${process.env.REACT_APP_BUSAN_KEY}&type=json&desc_kor=${item}`)
      const data = await response.data
      const getData = await data.body.items
      await dispatch(getData)
      
      return 0
    } catch (error) {
      console.log(error)
    }
  }, [dispatch])




  return (
    <>
      <Header isStyle={true}></Header>
      <article
        className={styles.search}
        style={
          fixed
            ? {
              position: "relative",
              top: "8rem",
              maxWidth: "600px",
            }
            : { position: "fixed" }
        }
      >
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
                // sendURL(e.currentTarget.value);
                getSearchData(e.currentTarget.value)
                navigate("/busan_item_map/search");
              }
            }}
            placeholder="음식명을 입력 후 [Enter] 를 눌러주세요!!"
            type="text"
            id="search"
            className={styles.search_input}
            style={fixed ? { boxShadow: "0 0 1px 1px black" } : {}}
          />
        </div>
      </article>
    </>
  );
}

export default Search;
