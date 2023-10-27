import styles from "./HccpSearch.module.scss";
import { useEffect, useState, useCallback, useRef } from "react";
import axios from "axios";
import Modal from "../UI/HccpModal/modal";
import HccpResult from "../module/HccpResult";
import Movement from "../UI/movement/Movement";
import NavSearch from "../UI/NavSearch";
import GPT from "../../util/kakao/gpt";
import { useRecoilState } from "recoil";
import { HaccpData } from "../../atom/Haccp";
import HaccpSearchForm from "../module/HaccpSearchForm";

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
  const [productName, setProductName] = useState(""); // 상품 이름
  const [loading, setLoading] = useState(false);
  const [itemsAtom, setItemsAtom] = useRecoilState<ItemsType[]>(HaccpData);
  const [filterItems, setFilterItems] = useState<ItemsType[]>([]); // 사용자가 선택한 아이템
  const [modal, setModal] = useState(false);
  const [productId, setProductId] = useState("");
  const [extraHaccpCount, setExtraHaccpDataCount] = useState(0);

  const haccpContainerRef = useRef<HTMLBaseElement>(null);
  const getAxios = async (productName: string) => {
    try {
      setLoading(true);
      const url = `https://apis.data.go.kr/B553748/CertImgListServiceV2/getCertImgListServiceV2?ServiceKey=${process.env.REACT_APP_BUSAN_KEY}&returnType=json&prdlstNm=${productName}&numOfRows=100`;
      const response = await axios.get(url);
      const data = response.data;
      const items = data.body.items;
      setItemsAtom(items);
      setLoading(false);

      setProductName("");
    } catch (err) {
      console.log("아이템 로드 중 에러:", err);
    }
  };

  // 사용자가 선택한 상품의 일련번호와 일치하는 상품만 필터링한다.
  const filter = useCallback(
    (productId: string) => {
      const result = itemsAtom.filter((item) => {
        return item.item.prdlstReportNo === productId;
      });

      setFilterItems(result);
    },
    [itemsAtom]
  );

  async function search() {
    const INITIAL_COUNT = 8;
    setExtraHaccpDataCount(INITIAL_COUNT);
    getAxios(productName);
  }
  
  useEffect(()=>{
    document.title ="HACCP 제품 정보조회 | FoodPicker"
  },[])

  useEffect(() => {
    if (productId) filter(productId);
  }, [productId, filter]);

  // 스크롤높이 추적 함수
  function windowScrollTraces() {
    if (
      haccpContainerRef.current?.offsetHeight! <=
      window.scrollY + window.innerHeight - 90
    ) {
      setExtraHaccpDataCount((old) => (old += 8));
    }
  }

  useEffect(() => {
    if (haccpContainerRef.current && itemsAtom.length > extraHaccpCount) {
      window.addEventListener("scroll", windowScrollTraces);

      return () => {
        window.removeEventListener("scroll", windowScrollTraces);
      };
    } else {
      setExtraHaccpDataCount(itemsAtom.length);
    }
  }, [itemsAtom.length, extraHaccpCount]);
  return (
    <>
      <section className={styles.Haccp} ref={haccpContainerRef}>
        <h2
          style={{ textAlign: "center", margin: "6rem 0" }}
          className={styles.haccp_page_title}
        >
          HACCP제품 정보조회
        </h2>
        <div className={styles.haccp_inner_container}>
          {/* 검색창 */}
          <HaccpSearchForm
            setProductName={setProductName}
            loading={loading}
            search={search}
            productName={productName}
          />
          {/* 잠깐 알고가기 */}
          <p className={styles.message}>
            {" "}
            <span>잠깐 알고가기</span> <br />
            해썹(HACCP) 제도는 식품, 축산물, 사료 등을 만드는 과정에서 생물학적,
            화학적, 물리적 위해요인들이 발생할 수 있는 상황을 과학적으로
            분석하고 사전에 위해요인의 발생여건들을 차단하여 소비자에게 안전하고
            깨끗한 제품을 공급하기 위한 시스템적인 규정을 말합니다.
          </p>{" "}
          <br />
        </div>

        {/* 검색 결과 보이는 곳 */}
        <HccpResult
          items={itemsAtom}
          setModal={setModal}
          setProductId={setProductId}
          modal={modal}
          extraCount={extraHaccpCount}
        />
        <Modal
          filterItems={filterItems}
          setModal={setModal}
          modal={modal}
        ></Modal>
        <Movement />
      </section>

      <NavSearch />
      <GPT />
    </>
  );
}

export default HccpSearch;
