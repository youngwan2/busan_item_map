import { useState, useRef } from "react";
import BmiResult from "./BmiResult";
import styles from '../Bmi.module.scss'
import BmiButton from "./BmiButton";

const BmiCalculator = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [result, setResult] = useState(0);

  const weightElRef = useRef<HTMLInputElement>(null);
  const heightElRef = useRef<HTMLInputElement>(null);

  return (
    <section className={styles.calcul_input_area}>
      <strong style={{ background: 'rgba(0,0,0,0.8)', padding: '5px 8px', borderRadius: '5px' }}>참고BMI 란? </strong> <br />
      <p style={{ textAlign: 'center' }}>체질량 지수(BMI)는 인간의 비만도를 나타내는 지수입니다. 케틀레지수라고도 합니다. 자세한 내용은 백과사전을 이용해보세요.</p>
      <hr />
      {/* 신장 */}
      <div className={styles.height_input_con}>
        <label htmlFor="height" placeholder="m">
          신장(키)
        </label>
        <input
          ref={heightElRef}
          id="height"
          type="number"
          onKeyUp={(e) => {
            const height = Number(e.currentTarget.value);
            console.log(height);
            setHeight(height);
          }}
          placeholder="m"
        />
      </div>
      {/* 몸무게 */}
      <div className={styles.weight_input_con}>
        <label htmlFor="weight">몸무게</label>
        <input
          ref={weightElRef}
          id="weight"
          type="number"
          placeholder="kg"
          onKeyUp={(e) => {
            const weight = Number(e.currentTarget.value);
            setWeight(weight);
          }}
        />
      </div>
      {/* 계산/초기화 버튼 */}
      <BmiButton
        setResult={setResult}
        height={height}
        weight={weight}
        weightElRef={weightElRef}
        heightElRef={heightElRef}
      />
      {/* bmi 추가 정보 */}
      <BmiResult result={result} />
    </section>
  );
}

export default BmiCalculator;