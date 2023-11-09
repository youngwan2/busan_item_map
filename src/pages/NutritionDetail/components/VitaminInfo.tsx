import styles from "../NutritionDetail.module.scss";

interface PropsType {
    detailNutritionData : {
        "비타민 A(μg RAE)": string
    }
}
const VitaminInfo = ({detailNutritionData}:PropsType) => {
    return (
        <section className={styles.vitamin}>
        <strong>비타민</strong>
        <>
          <p>
            <span>비타민A(μg RAE)</span>
            {detailNutritionData["비타민 A(μg RAE)"] || "정보 없음"}
          </p>
        </>
      </section>
    );
}

export default VitaminInfo;