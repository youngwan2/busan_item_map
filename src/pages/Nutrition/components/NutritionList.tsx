import styles from "./NutritionDb.module.scss";

interface PropsType {
  item: {
    [name: string]: string;
  };
}

function NutritionList({ item }: PropsType) {
  return (
    <div className={styles.result_section}>
      {/* 일반 정보 */}
      <GeneralInfo item={item} />
      {/* 3대 영양소 */}
      <ThreeNutritionInfo item={item} />
      {/* 무기질 */}
      <MineralInfo item={item} />
      {/* 비타민 */}
      <VitaminInfo item={item} />
      {/* 기타 영양소 */}
      <EtcNutrition item={item} />
      {/* 그 외 성분 */}
      <IngredientList item={item} />
    </div>
  );
}

const GeneralInfo = ({ item }: PropsType) => {
  return (
    <section>
      <h4 className={styles.item_name}>{item.식품명}</h4>
      <strong className={styles.sub_title}>일반정보</strong>
      <>
        <p>
          <span>식품기원명</span>
          {item.식품기원명 || "정보 없음"}
        </p>
        <p>
          <span>출처명</span>
          {item.출처명 || "정보 없음"}
        </p>
        <p>
          <span>식품중량</span>
          {item.식품중량 || "정보 없음"}
        </p>
        <p>
          <span>데이터생성일자</span>
          {item.데이터생성일자 || "정보 없음"}
        </p>
        <p>
          <span>데이터기준일자</span>
          {item.데이터기준일자 || "정보 없음"}
        </p>
        <p>
          <span>영양성분함량기준량</span>
          {item.영양성분함량기준량 || "정보 없음"}
        </p>
        <p>
          <span>에너지(kcal)</span>
          {item["에너지(kcal)"] || "정보 없음"}
        </p>
      </>
    </section>
  );
};

const ThreeNutritionInfo = ({ item }: PropsType) => {
  return (
    <section>
      <strong className={styles.sub_title}>3대 영양소 </strong>
      <>
        <p>
          <span>탄수화물(g)</span>
          {item["탄수화물(g)"] || "정보 없음"}
        </p>
        <p>
          <span>단백질(g)</span>
          {item["단백질(g)"] || "정보 없음"}
        </p>
        <p>
          <span>지방(g)</span>
          {item["지방(g)"] || "정보 없음"}
        </p>
      </>
    </section>
  );
};

const MineralInfo = ({ item }: PropsType) => {
  return (
    <section>
      <strong className={styles.sub_title}>무기질</strong>
      <>
        <p>
          <span>칼슘(mg)</span>
          {item["칼슘(mg)"] || "정보 없음"}
        </p>
        <p>
          <span>철(mg)</span>
          {item["철(mg)"] || "정보 없음"}
        </p>
        <p>
          <span>인(mg)</span>
          {item["인(mg)"] || "정보 없음"}
        </p>
        <p>
          <span>칼륨(mg)</span>
          {item["칼륨(mg)"] || "정보 없음"}
        </p>
        <p>
          <span>나트륨(mg)</span>
          {item["나트륨(mg)"] || "정보 없음"}
        </p>
      </>
    </section>
  );
};

const VitaminInfo = ({ item }: PropsType) => {
  return (
    <section>
      <strong className={styles.sub_title}>비타민</strong>
      <>
        <p>
          <span>비타민A(μg RAE)</span>
          {item["비타민 A(μg RAE)"] || "정보 없음"}
        </p>
      </>
    </section>
  );
};

const EtcNutrition = ({ item }: PropsType) => {
  return (
    <section>
      <strong className={styles.sub_title}>기타 영양소</strong>
      <>
        <p>
          <span>당류(g)</span>
          {item["당류(g)"] || "정보 없음"}
        </p>
        <p>
          <span>식이섬유(g)</span>
          {item["식이섬유(g)"] || "정보 없음"}
        </p>
      </>
    </section>
  );
};

const IngredientList = ({ item }: PropsType) => {
  return (
    <section>
      <strong className={styles.sub_title}>그 외 성분</strong>
      <>
        <p>
          <span>레티놀(ug)</span>
          {item["레티놀(μg)"] || "정보 없음"}
        </p>
        <p>
          <span>베타카로틴(μg)</span>
          {item["베타카로틴(μg)"] || "정보 없음"}
        </p>
        <p>
          <span>티아민(mg)</span>
          {item["티아민(mg)"] || "정보 없음"}
        </p>
        <p>
          <span>리보플라빈(mg)</span>
          {item["리보플라빈(mg)"] || "정보 없음"}
        </p>
        <p>
          <span>콜레스테롤(mg)</span>
          {item["콜레스테롤(mg)"] || "정보 없음"}
        </p>
        <p>
          <span>포화지방산(g)</span>
          {item["포화지방산(g)"] || "정보 없음"}
        </p>
        <p>
          <span>트랜스지방산(g)</span>
          {item["트랜스지방산(g)"] || "정보 없음"}
        </p>
      </>
    </section>
  );
};

export default NutritionList;
