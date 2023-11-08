import { useState } from "react";
import MineralChart from "./MineralChart";
import styles from "../NutritionDetail.module.scss";

interface PropsType {
  detailNutritionData: {
    [name: string]: number;
  };
}
const MineralInfo = ({ detailNutritionData }: PropsType) => {

  // 무기질 정보
  const [mineral] = useState({
    칼슘: detailNutritionData["칼슘(mg)"],
    철: detailNutritionData["철(mg)"],
    인: detailNutritionData["인(mg)"],
    칼륨: detailNutritionData["칼륨(mg)"],
    나트륨: detailNutritionData["나트륨(mg)"],
  });

  return (
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
  );
};

export default MineralInfo;
