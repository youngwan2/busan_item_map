import axios from "axios";
import styles from "./Necessities.module.scss";
import Pagination from "./components/Pagination";
import ReactSpinner from "../../components/UI/ReactSpinner";
import NecessitiesMap from "./components/NecessitiesMap";
import { ItemsType, laLoType } from "./types/Necessities.types";
import { useState, useEffect, useCallback } from "react";
import Table from "./components/Table";

function NecessitiesPage() {
  const [items, setItems] = useState<ItemsType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [laLo, setLaLo] = useState<laLoType>();
  const [gugun] = useState("금정구");
  const [isDisplay, setIsDisplay] = useState(true);
  const [bsshNm, setBsshNm] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const getItem = useCallback(async (currentPage: number, gugun: string) => {
    setIsLoading(true);
    await axios
      .get(
        `https://apis.data.go.kr/6260000/BusanLifeInfoService/getLifeInfo?serviceKey=${import.meta.env.VITE_BUSAN_KEY}&gugunNm=${gugun}&numOfRows=20&pageNo=${currentPage}&resultType=json`
      )
      .then((result) => {
        // console.log("검색결과:", result);
        const itemList = result.data.getLifeInfo.body.items;
        setItems(itemList.item);

        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    getItem(currentPage, gugun);
  }, [getItem, currentPage, gugun]);

  useEffect(() => {
    document.title = "부산생필품 정보조회 | foodPicker";
  }, []);

  return (
    <>
      <h2
        className={styles.title}
        style={{ textAlign: "center", margin: "6rem 0" }}
      >
        <strong>부산생필품 정보조회</strong>
      </h2>
      <Table
        setBsshNm={setBsshNm}
        setIsDisplay={setIsDisplay}
        isDisplay={isDisplay}
        setLaLo={setLaLo}
        items={items}
      />
      <br /> <br /> <br /> <br /> <br /> <br />
      <Pagination setPage={setCurrentPage}></Pagination>
      <NecessitiesMap
        la={laLo?.la}
        lo={laLo?.lo}
        bss={bsshNm}
        isDisplay={isDisplay}
        setIsDisplay={setIsDisplay}
      ></NecessitiesMap>
      <span
        style={isLoading ? { display: "block" } : { display: "none" }}
        className={styles.loading}
      >
        <ReactSpinner />
      </span>
    </>
  );
}

export default NecessitiesPage;
