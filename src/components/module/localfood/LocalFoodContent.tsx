import { localFoodType } from "../../page/LocalFood";
import styles from "../../page/LocalFood.module.css";
import LocalSearchResult from "./LocalSearchResult";

interface PropsType {
  setDisplay: (p: boolean) => void;
  display: boolean;
  searchResult?: localFoodType[];
}

function LocalFoodContent({ setDisplay, display, searchResult }: PropsType) {
  return (
    <section className={styles.LocalFood}>
      <button
        onClick={() => {
          setDisplay(true);
        }}
        className={styles.slide_btn_outer}
        style={!display ? { display: "block" } : { display: "none" }}
      >
        메뉴
      </button>

      {/* 주제별 세부 내용 */}
      <h2 className={styles.title}>향토음식조회</h2>
      <section className={styles.contents}>
        <h3 className={styles.sub_title}>
          {searchResult !== undefined
            ? searchResult[0].data_title_nm
            : "우리 지역의 향토 음식을 찾아보자!"}
        </h3>

        {/* 대표 이미지 */}
        <img
          style={{ maxWidth: 380, width: "100%" }}
          src={
            searchResult !== undefined && searchResult[0].main_thumb_url !== ""
              ? `${searchResult[0].main_thumb_url}`
              : process.env.PUBLIC_URL + "/not-image.png"
          }
          alt="thumb"
        ></img>

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
        <h2 style={{ marginTop: "3rem" }}>
          {searchResult?.length! > 0 ? "관련식당" : null}
        </h2>
        <LocalSearchResult searchResult={searchResult}></LocalSearchResult>
      </section>
    </section>
  );
}

export default LocalFoodContent;
