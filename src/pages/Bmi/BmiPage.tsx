import BmiCalculator from "./components/BmiCalculator";
import BmiInfo from "./components/BmiInfo";
import styles from "./Bmi.module.scss";

import { useState,useEffect } from "react";
function BmiPage() {
  const [selectTap, setSelectTap] = useState("");

  useEffect(()=>{
    document.title = "체질량 지수 | FoodPicker"
},[])

  return (
    <>
      <section className={styles.calculate_section}>

        <h2 className={styles.page_title}>
          <strong>체질량지수</strong>
        </h2>
        <BmiCalculator />
      </section>
      <hr />
      <article
        className={styles.taps_con}
        onClick={(e) => {
          if (e.target instanceof HTMLButtonElement) {
            const target = e.target.dataset.bmi!;
            setSelectTap(target);
          }
        }}
      >
        <button data-bmi="저체중">18.5 미만</button>
        <button data-bmi="정상">18.5 - 24.9</button>
        <button data-bmi="과체중">25.0 - 29.9</button>
        <button data-bmi="비만">30.0 이상</button>
      </article>
   
      <BmiInfo selectTap={selectTap} />
    </>
  );
}

export default BmiPage;
