import ThreeChart from "./ThreeChart";
import styles from "../NutritionDetail.module.scss";
import { useState } from "react";

interface PropsType {
  detailNutritionData: {
    [name: string]: number;
  };
}
const ThreeNutritionInfo = ({ detailNutritionData }: PropsType) => {
  // 3대 영양소 정보
  const [threeInfo] = useState({
    탄수화물: detailNutritionData["탄수화물(g)"],
    단백질: detailNutritionData["단백질(g)"],
    지방: detailNutritionData["지방(g)"],
  });
  
  return (
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
  );
};

export default ThreeNutritionInfo;
