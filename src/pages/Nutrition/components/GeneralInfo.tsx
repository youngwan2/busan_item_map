import styles from "../NutritionDetail.module.scss";

interface PropsType {
  detailNutritionData: {
    [property: string]: string;
  };
}
const GeneralInfo = ({ detailNutritionData }: PropsType) => {
  return (
    <section id={`${detailNutritionData.id}`} className={styles.general_info}>
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
  );
};

export default GeneralInfo;
