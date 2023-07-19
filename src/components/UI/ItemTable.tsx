import React from "react";
import axios from "axios";
import styles from "./ItemTable.module.css";
import Pagination from "./Pagination";

import { useState, useEffect, useCallback } from "react";

type ItemsType = {
  adres: string;
  bsshNm: string;
  examinDe: string;
  itemName: string;
  pumNm: string;
  la: string;
  lo: string;
  unit: string;
  unitprice: number;
};

function ItemTable() {
  const [items, setItems] = useState<ItemsType[]>([]);
  const [currnetPage,setCurrentPage] = useState(1);

  const getItem = useCallback(async (currentPage:number) => {
    await axios
      .get(
        `http://apis.data.go.kr/6260000/BusanLifeInfoService/getLifeInfo?serviceKey=${process.env.REACT_APP_BUSAN_KEY}&numOfRows=10&pageNo=${currentPage}&resultType=json`
      )
      .then((result) => {
        const itemList = result.data.getLifeInfo.body.items;
        setItems(itemList.item);
      });
  }, []);

  useEffect(() => {
    getItem(currnetPage);
  }, [getItem,currnetPage]);

  return (
    <>
      {" "}
      <table className={styles.item_table}>
        <thead>
        <tr>
          <th>상품명</th>
          <th>판매점</th>
          <th>주소</th>
          <th>등록일</th>
          <th>카테고리</th>
          <th>단위</th>
          <th>단위 당 가격</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(items)
          ? items.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.itemName}</td>
                  <td>{item.bsshNm}</td>
                  <td>{item.adres}</td>
                  <td>{item.examinDe}</td>
                  <td>{item.pumNm}</td>
                  <td>{item.unit}</td>
                  <td>{item.unitprice.toLocaleString()}(원)</td>
                </tr>
              );
            })
          : null}
      </tbody>
      </table>
      <br /><br /><br /><br /><br /><br />
      <Pagination setPage={setCurrentPage} ></Pagination>
    </>
  );
}

export default ItemTable;
