import styles from "./LocalFood.module.css";
import { localFoods } from "./localfood(202212)";
import Header from "../UI/Header";
import LocalSearchResult from "../module/LocalSearchResult";
import { useEffect, useState, useRef, KeyboardEvent,MouseEvent } from "react";
import NavSearch from "../UI/NavSearch";
import GPT from "../../util/kakao/gpt";
import Movement from "../UI/movement/Movement";

export type localFoodType = {
  addr: string;
  cntnts_url: string;
  core_kwrd_cn: string;
  ctprvn_nm: string;
  data_manage_no: string;
  data_title_nm: string;
  main_thumb_url: string;
  era_nm: string;
  opn_de: string;
  regist_de: string;
  sbjt_nm: string;
  signgu_nm: string;
  sumry_cn: string;
  relate_rstrnt_nm: string;
  rstrnt_addr: string;
  rstrnt_tel_no: string;
};

const LocalFood = () => {
  const categoryRef = useRef<HTMLOListElement>(null);
  const topBtn = useRef<HTMLLIElement>(null);
  const bottomBtn = useRef<HTMLLIElement>(null);
  const [title, setTitle] = useState<string[]>();
  const [searchTargetTitle, setSearchTargetTitle] = useState("");
  const [searchResult, setSearchResult] = useState<localFoodType[]>();
  const [display, setDisplay] = useState(false);

  // 전체 목록에서 중복을 제외한 카테고리 목록을 필터링하는 함수
  const categoryFilter = () => {
    const filterList: any[] = [];
    localFoods?.forEach((data) => {
      filterList.push(data.data_title_nm);
    });
    const filterTitle = [...new Set(filterList)];
    setTitle(filterTitle);
  };


  // 카테고리 중 목록 선택시 데이터 조회하는 함수
  const searchFilter = (e: MouseEvent<HTMLLIElement>) => {
    const choiceTitle = e.currentTarget.textContent!;

    // 제목 리스트에서 유저가 선택한 항목이 포함되어 있는 경우만 필터링
    const choiceFood = localFoods.filter((food) => {
      return food.data_title_nm.includes(choiceTitle);
    });
    setSearchResult(choiceFood);
  };

  // 카테고리 상단 이동
  const categoryTopShifter = () => {
    topBtn.current?.addEventListener("click", () => {
      categoryRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  // 카테고리 하단 이동
  const catgoryBottomShiter = () => {
    bottomBtn.current?.addEventListener("click", () => {
      categoryRef.current?.scrollTo({ top: 100000, behavior: "smooth" });
    });
  };

  // 주제별 필터 검색 함수
  const titleFilter = (e: KeyboardEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setSearchTargetTitle(value); // 검색 버튼 클릭 시 조회에 활용 예정

    if (e.key === "Enter") {
      setTitle(categorySearchFilter(value));
    }
    if (value.length < 1) {
      categoryFilter();
    }
  };

  // 카테고리 검색 함수
  const categorySearch = (e: MouseEvent<HTMLButtonElement>) => {
    const searchList = categorySearchFilter(searchTargetTitle);
    setTitle(searchList);
  };

  // 카테고리 검색어와 일치하는 문자열 배열만 반환하는 함수(필터링함수)
  function categorySearchFilter(value: string) {
    const filterTitle = title?.filter((title) => {
      return title.includes(value);
    });

    return filterTitle;
  }
  useEffect(() => {
    categoryFilter();
  }, []);

  
  useEffect(()=>{
    document.title ="향토음식조회 | FoodPicker"
  },[])


  return (
    <>
      {/* 주제별 카테고리 */}
      <article
        className={styles.category_con}
        style={display ? { display: "block" } : { display: "none" }}
      >
        <input
          onKeyUp={titleFilter}
          className={styles.category_search_input}
          type="text"
          placeholder="키워드를 입력하세요!"
        />
        <button className={styles.search_btn} onClick={categorySearch}>
          {" "}
          <img
            src={process.env.PUBLIC_URL + `/icon/search.svg`}
            alt="searchIcon"
            width={30}
            height={35}
          />{" "}
        </button>
        <ol className={styles.category} ref={categoryRef}>
          <button
            onClick={() => {
              setDisplay(false);
            }}
            className={styles.slide_btn_inner}
          >
            {" "}
            <img
              src={process.env.PUBLIC_URL + "/icon/close.svg"}
              width={30}
              height={30}
              alt=""
            />
          </button>
          {title?.map((title) => {
            return <li onClick={searchFilter}>{title}</li>;
          })}
        </ol>
        <ul className={styles.category_shift_btn_con}>
          <li onClick={categoryTopShifter} ref={topBtn}>
            ▲
          </li>
          <li onClick={catgoryBottomShiter} ref={bottomBtn}>
            ▼
          </li>
        </ul>
      </article>

      {/* 디테일 내용 영역 */}
      <section className={styles.LocalFood}>
        <button
          onClick={() => {
            setDisplay(true);
          }}
          className={styles.slide_btn_outer}
          style={!display ? { display: "block" } : { display: "none" }}
        >
          카테고리
        </button>

        {/* 주제별 세부 내용 */}
        <h2 className={styles.title}>향토음식조회</h2>
        <section className={styles.contents}>
          <p>
            ※ 현재 기능은 검색 기능없이 카테고리 내 주제별 선택을 통해 검색이
            가능합니다.
          </p>

          {/* 대표 이미지 */}
          <img
            style={{maxWidth:380,width:'100%'}}
            src={
              searchResult !== undefined &&
              searchResult[0].main_thumb_url !== ""
                ? `${searchResult[0].main_thumb_url}`
                : process.env.PUBLIC_URL + "/not-image.png"
            }
            alt="thumb"
          ></img>
          <h3 className={styles.sub_title}>
            {searchResult !== undefined ? searchResult[0].data_title_nm : null}
          </h3>
          <p className={styles.foods_sumry}>
            {" "}
            {searchResult !== undefined
              ? searchResult[0].sumry_cn.replace(/&nbsp;/gi, " ")
              : null}
          </p>
          <p className={styles.foods_detail_url}>
            <a
              target="__blank"
              style={{ color: "white", textDecoration: "none" }}
              href={`${
                searchResult !== undefined
                  ? searchResult[0].cntnts_url
                  : "https://encykorea.aks.ac.kr/Article/E0062997"
              }`}
            >
              {searchResult !== undefined
                ? "자세히 보기(링크)"
                : '"향토음식"이란 지방의 특산품이나 특유의 조리법 등을 이용하여 만든 그 지역의 전통 음식을 의미합니다(링크). '}
            </a>
          </p>
          <h2 style={{ marginTop: "3rem" }}>관련 식당</h2>
                <LocalSearchResult searchResult={searchResult}></LocalSearchResult>
        </section>
      </section>
      <NavSearch/>
      <GPT/>
      <Movement/>
    </>
  );
};

export default LocalFood;
