import React from "react";
import Header from "../UI/Header";
import styles from "./HccpSearch.module.css";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Modal from "../UI/HccpModal/modal";

export type ItemsType = {
  item: {
    allergy: string; // 알레르기
    barcode: string; // 바코드
    imgurl1: string;
    manufacture: string; // 제조사
    prdkind: string; // 상품 유형
    prdkindstate: string; // 상품 상태
    prdlstNm: string; // 상품 이름
    prdlstReportNo: string; // 상품 보고 번호(일련번호)
    rawmtrl: string; // 영양정보
  };
};

function HccpSearch() {
  const [productName, setProductName] = useState("");
  const [items, setItems] = useState<ItemsType[]>([]);
  const [filterItems, setFilterItems] = useState<ItemsType[]>([]);
  const [modal, setModal] = useState(false);
  const [productId, setProductId] = useState("");

  const getAxios = async (productName: string) => {
    const url = `https://apis.data.go.kr/B553748/CertImgListServiceV2/getCertImgListServiceV2?ServiceKey=${process.env.REACT_APP_BUSAN_KEY}&returnType=json&prdlstNm=${productName}&numOfRows=30`;
    const response = await axios.get(url);
    const data = response.data;
    const items = data.body.items;
    console.log(items);
    setItems(items);
  };

  const filter = useCallback(
    (productId: string) => {
      const result = items.filter((item, i) => {
        return item.item.prdlstReportNo === productId;
      });

      setFilterItems(result);
    },
    [items]
  );

  useEffect(() => {
    if (productId) filter(productId);
  }, [productId, filter]);

  return (
    <div className={styles.Haccp}>
      <Header isStyle={true} />

      <div className={styles.search_container}>
        <input
          className={styles.search_input}
          type="text"
          id={styles.search}
          placeholder="상품명을 입력해주세요!"
          onKeyUp={(e) => {
            setProductName(e.currentTarget.value);
            if (e.code === "Enter") getAxios(e.currentTarget.value);
          }}
        />
        <button
          className={styles.search_btn}
          onClick={() => {
            getAxios(productName);
          }}
        >
          조회
        </button>
      </div>

      <section className={styles.content_container}>
        {Array.isArray(items) ? (
          items.map((item, i) => {
            return (
              <figure key={item.item.prdlstReportNo}>
                <div
                  onClick={() => {
                    setModal(true);
                    setProductId(item.item.prdlstReportNo);
                  }}
                >
                  <img src={`${item.item.imgurl1}`} alt="상품이미지"></img>
                  <hr />
                  <p>{item.item.prdlstNm}</p>
                </div>
              </figure>
            );
          })
        ) : (
          <div></div>
        )}
      </section>
      <Modal
        filterItems={filterItems}
        setModal={setModal}
        modal={modal}
      ></Modal>
    </div>
  );
}

export default HccpSearch;
