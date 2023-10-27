import BmiCalculator from "../module/BmiCalculator";
import BmiInfo from "../module/bmi/BmiInfo";
import styles from "./Calculate.module.scss";

import { useState } from "react";
function Calculator() {


    const [selectTap, setSelectTap] =useState('')
  return (
    <>
      <section className={styles.calculate_section}>
        <h2 className={styles.page_title}><p>체질량지수</p></h2>
        <BmiCalculator />
      </section>
      <ul
        className={styles.taps_con}
        onClick={(e) => {
            if(e.target instanceof HTMLLIElement) {
            const target = e.target.dataset.bmi!
            setSelectTap(target)}
        }}
      >
        <li data-bmi="저체중">18.5 미만</li>
        <li data-bmi="정상">18.5 - 24.9</li>
        <li data-bmi="과체중">25.0 - 29.9</li>
        <li data-bmi="비만">30.0 이상</li>
      </ul>
      <BmiInfo selectTap={selectTap} />
    </>
  );
}

export default Calculator;
