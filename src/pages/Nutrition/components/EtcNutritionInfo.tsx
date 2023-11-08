import styles from "../NutritionDetail.module.scss";

interface PropsType {
  detailNutritionData: {
    [name: string]: string;
  };
}
const EtcNutritionInfo = ({ detailNutritionData }: PropsType) => {
  return (
    <>
      <EtcInfoPartA detailNutritionData={detailNutritionData}/>
      <EtcInfoPartB detailNutritionData={detailNutritionData} />
    </>
  );
};

const EtcInfoPartA = ({ detailNutritionData }: PropsType) => {
    return (
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

    )
}

const EtcInfoPartB = ({ detailNutritionData }: PropsType) => {
  return (
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
  );
};

export default EtcNutritionInfo;
