import ThreeChart from "../../chart/ThreeChart";
import MineralChart from "../../chart/MineralChart";
import styles from "./NutritionDetail.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState, useRef, useEffect } from "react";

const NutritionDetail = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  const detailNutritionData = useSelector<any>(
    (state) => state.nutrition
  ) as any;

  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.scrollIntoView(true);
    }
  }, []);

  // 3대 영양소 정보
  const [threeInfo] = useState({
    탄수화물: detailNutritionData["탄수화물(g)"],
    단백질: detailNutritionData["단백질(g)"],
    지방: detailNutritionData["지방(g)"],
  });

  // 무기질 정보
  const [mineral] = useState({
    칼슘: detailNutritionData["칼슘(mg)"],
    철: detailNutritionData["철(mg)"],
    인: detailNutritionData["인(mg)"],
    칼륨: detailNutritionData["칼륨(mg)"],
    나트륨: detailNutritionData["나트륨(mg)"],
  });
  return (
    <div ref={pageRef}>
      <button
        style={{ margin: "10px" }}
        onClick={() => {
          window.history.back();
        }}
      >
        뒤로가기
      </button>

      <article className={styles.detail_article} key={detailNutritionData.id}>
        <h2 className={styles.detail_page_title}>
          {detailNutritionData ? (
            `${detailNutritionData.식품명} : ${detailNutritionData.식품기원명}`
          ) : (
            <br />
          )}
        </h2>
        {/* 상단 그룹(일반정보, 비타민, 기타 영양성분, 그외) */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <section
            id={`${detailNutritionData.id}`}
            className={styles.general_info}
          >
            <h4>{detailNutritionData.식품명}</h4>
            <strong>일반정보</strong>
            <>
              <p>
                <span>식품기원명</span>
                {detailNutritionData.식품기원명 || "정보 없음"}
              </p>
              <p>
                <span>출처명</span>
                {detailNutritionData.출처명 || "정보 없음"}
              </p>
              <p>
                <span>식품중량</span>
                {detailNutritionData.식품중량 || "정보 없음"}
              </p>
              <p>
                <span>데이터생성일자</span>
                {detailNutritionData.데이터생성일자 || "정보 없음"}
              </p>
              <p>
                <span>데이터기준일자</span>
                {detailNutritionData.데이터기준일자 || "정보 없음"}
              </p>
              <p>
                <span>영양성분함량기준량</span>
                {detailNutritionData.영양성분함량기준량 || "정보 없음"}
              </p>
              <p>
                <span>에너지(kcal)</span>
                {detailNutritionData["에너지(kcal)"] || "정보 없음"}
              </p>
            </>
          </section>
          {/* 비타민 */}

          <section className={styles.vitamin}>
            <strong>비타민</strong>
            <>
              <p>
                <span>비타민A(μg RAE)</span>
                {detailNutritionData["비타민 A(μg RAE)"] || "정보 없음"}
              </p>
            </>
          </section>
          {/* 기타 영양소 */}
          <section className={styles.etc_a}>
            <strong>기타 영양소</strong>
            <>
              <p>
                <span>당류(g)</span>
                {detailNutritionData["당류(g)"] || "정보 없음"}
              </p>
              <p>
                <span>식이섬유(g)</span>
                {detailNutritionData["식이섬유(g)"] || "정보 없음"}
              </p>
            </>
          </section>

          {/* 그 외 성분 */}
          <section className={styles.etc_b}>
            <strong>그 외 성분</strong>
            <>
              <p>
                <span>레티놀(ug)</span>
                {detailNutritionData["레티놀(μg)"] || "정보 없음"}
              </p>
              <p>
                <span>베타카로틴(μg)</span>
                {detailNutritionData["베타카로틴(μg)"] || "정보 없음"}
              </p>
              <p>
                <span>티아민(mg)</span>
                {detailNutritionData["티아민(mg)"] || "정보 없음"}
              </p>
              <p>
                <span>리보플라빈(mg)</span>
                {detailNutritionData["리보플라빈(mg)"] || "정보 없음"}
              </p>
              <p>
                <span>콜레스테롤(mg)</span>
                {detailNutritionData["콜레스테롤(mg)"] || "정보 없음"}
              </p>
              <p>
                <span>포화지방산(g)</span>
                {detailNutritionData["포화지방산(g)"] || "정보 없음"}
              </p>
              <p>
                <span>트랜스지방산(g)</span>
                {detailNutritionData["트랜스지방산(g)"] || "정보 없음"}
              </p>
            </>
          </section>
        </div>
        {/* 하단 그룹(3대 영양소, 미네랄) */}
        {/* 3대 영양소 */}
        <div className={styles.bottom_group}>
          <section className={styles.three_info}>
            <strong>3대 영양소 </strong>
            <div>
              <p>
                <span>탄수화물(g)</span>
                {detailNutritionData["탄수화물(g)"] || "정보 없음"}
              </p>
              <p>
                <span>단백질(g)</span>
                {detailNutritionData["단백질(g)"] || "정보 없음"}
              </p>
              <p>
                <span>지방(g)</span>
                {detailNutritionData["지방(g)"] || "정보 없음"}
              </p>
            </div>
            <hr />
            <ThreeChart item={threeInfo}></ThreeChart>
          </section>

          {/* 무기질 */}
          <section className={styles.mineral}>
            <strong>무기질</strong>
            <>
              <p>
                <span>칼슘(mg)</span>
                {detailNutritionData["칼슘(mg)"] || "정보 없음"}
              </p>
              <p>
                <span>철(mg)</span>
                {detailNutritionData["철(mg)"] || "정보 없음"}
              </p>
              <p>
                <span>인(mg)</span>
                {detailNutritionData["인(mg)"] || "정보 없음"}
              </p>
              <p>
                <span>칼륨(mg)</span>
                {detailNutritionData["칼륨(mg)"] || "정보 없음"}
              </p>
              <p>
                <span>나트륨(mg)</span>
                {detailNutritionData["나트륨(mg)"] || "정보 없음"}
              </p>
            </>
            <hr />
            <MineralChart item={mineral} />
          </section>
          <hr />
        </div>
      </article>
    </div>
  );
};

export default NutritionDetail;
