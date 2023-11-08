import styles from "./NutritionDb.module.scss";

interface Type {
  item: 
    {
      [name: string]: string;
    }
}

function NutritionResult({ item }: Type) {
  return (
    <div className={styles.result_section}>
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

      {/* 3대 영양소 */}
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

      {/* 무기질 */}
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

      {/* 비타민 */}
      <section>
        <strong className={styles.sub_title}>비타민</strong>
        <>
          <p>
            <span>비타민A(μg RAE)</span>
            {item["비타민 A(μg RAE)"] || "정보 없음"}
          </p>
        </>
      </section>
      {/* 기타 영양소 */}
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

      {/* 그 외 성분 */}
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
    </div>
  );
}

export default NutritionResult;
