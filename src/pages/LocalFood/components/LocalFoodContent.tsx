import { localFoodType } from "../types/localFood.types";
import styles from "../LocalFood.module.scss";
import LocalFoodMenuIcon from "./LocalFoodMenuIcon";
import useMap from "../../../hooks/useMap";


interface ContentsType {
  searchResult?: localFoodType[];
}

interface PropsType extends ContentsType {
  setDisplay: (p: boolean) => void;
  display: boolean;
}

const LocalFoodContent = ({ setDisplay, display, searchResult }: PropsType) => {
  return (
    <section className={styles.LocalFood}>
      <LocalFoodMenuIcon display={display} setDisplay={setDisplay} />

      {/* 주제별 세부 내용 */}
      <h2 className={styles.title}>향토음식조회</h2>
      <section className={styles.contents}>
        <SummaryContents searchResult={searchResult} />
        <AsideContents searchResult={searchResult} />
      </section>
    </section>
  );
}


// 제목/사진/줄거리 요약
const SummaryContents = ({ searchResult }: ContentsType) => {
  return (
    <section className={styles.left_contents}>
      <h3 className={styles.sub_title}>
        {searchResult !== undefined
          ? searchResult[0].data_title_nm
          : "우리 지역의 향토 음식을 찾아보자!"}
      </h3>

      {/* 대표 이미지 */}
      <img
        width={350}
        height={320}
        style={{ width: "90%" }}
        src={
          searchResult !== undefined && searchResult[0].main_thumb_url !== ""
            ? `${searchResult[0].main_thumb_url}`
            : "/not-image.png"
        }
        alt="thumb"
      ></img>

      <p className={styles.foods_sumry}>
        {" "}
        {searchResult !== undefined
          ? searchResult[0].sumry_cn.replace(/&nbsp;/gi, " ")
          : null}
      </p>
    </section>
  );
};

// 바로가기 / 연관 키워드 / 등록일자 / 연관 식당 등
const AsideContents = ({ searchResult }: ContentsType) => {

  const bss = searchResult && searchResult[0].relate_rstrnt_nm
  const addres = searchResult && searchResult[0].rstrnt_addr
  const id = 'localfood_map'
  const hasRelateRstrntName = searchResult && searchResult[0].relate_rstrnt_nm
  const hasAddres = searchResult && searchResult[0].addr

  useMap('', '', bss, id, addres)

  if (searchResult === undefined) return
  else return (
    <section className={styles.right_contents}>
      <div>
        <strong>콘텐츠 바로가기</strong> <hr />
        <a
          className={styles.foods_detail_url}
          target="__blank"
          style={{ color: "white", textDecoration: "none" }}
          href={`${searchResult !== undefined
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
        {searchResult[0].core_kwrd_cn}
      </div>
      <div>
        <strong>등록일자</strong> <hr />
        {searchResult[0].regist_de}
      </div>
      <div>
        <strong>갱신일자</strong> <hr />
        {searchResult[0].opn_de}
      </div>
      <div>
        <strong style={{ display: 'block', margin: '15px 0' }}>연관 식당</strong> <hr />
        {hasRelateRstrntName ? searchResult[0].relate_rstrnt_nm + '(' + searchResult[0].rstrnt_addr + ')' : "정보가 존재하지 않습니다."}

        <br /><br />
        <div aria-label="연관식당 주소를 나타내고 있는 지도" id="localfood_map" className={styles.localfood_map}></div>
      </div>
      <div>
        <strong>지방문화원 주소</strong> <hr />
        {hasAddres ? searchResult[0].addr : "정보가 존재하지 않습니다."}
      </div>
    </section>
  );
};

export default LocalFoodContent;
