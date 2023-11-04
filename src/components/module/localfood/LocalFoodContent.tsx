import { localFoodType } from "../../page/LocalFood";
import styles from "../../page/LocalFood.module.css";

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
        <div className={styles.left_contents}>
          <h3 className={styles.sub_title}>
            {searchResult !== undefined
              ? searchResult[0].data_title_nm
              : "우리 지역의 향토 음식을 찾아보자!"}
          </h3>

          {/* 대표 이미지 */}
          <img
            style={{ width: "90%" }}
            src={
              searchResult !== undefined &&
              searchResult[0].main_thumb_url !== ""
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
        </div>
        <aside className={styles.right_contents}>
          <div>
            <strong>콘텐츠 바로가기</strong> <hr />
            <a
              className={styles.foods_detail_url}
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
                : "향토음식 이란?(링크). "}
            </a>
          </div>
          <div>
            <strong>연관 키워드</strong>
            <hr />
            {searchResult && searchResult[0].core_kwrd_cn}
          </div>
          <div>
            <strong>등록일자</strong> <hr />
            {searchResult && searchResult[0].regist_de}
          </div>
          <div>
            <strong>갱신일자</strong> <hr />
            {searchResult && searchResult[0].opn_de}
          </div>
          <div>
            <strong>연관 식당</strong> <hr />
            {searchResult && searchResult[0].relate_rstrnt_nm}(
            {searchResult && searchResult[0].rstrnt_addr})
          </div>
          <div>
            <strong>지방문화원 주소</strong> <hr />
            {searchResult && searchResult[0].addr}
          </div>
        </aside>
      </section>
    </section>
  );
}

export default LocalFoodContent;
