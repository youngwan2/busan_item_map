import { useState, useRef } from "react";
import BmiResult from "./BmiResult";
import styles from '../Bmi.module.scss'
import BmiButton from "./BmiButton";

function BmiCalculator() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [result, setResult] = useState(0);

  const weightElRef = useRef<HTMLInputElement>(null);
  const heightElRef = useRef<HTMLInputElement>(null);

  return (
    <section className={styles.calcul_input_area}>
              <strong style={{background:'rgba(0,0,0,0.8)', padding:'5px 8px', borderRadius:'5px'}}>참고BMI 란? </strong> <br />
              <p style={{textAlign:'center'}}>체질량 지수(BMI)는 인간의 비만도를 나타내는 지수입니다. 케틀레지수라고도 합니다. 자세한 내용은 백과사전을 이용해보세요.</p>
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

/* 
표준 체중은 남자는, 여자는 , 체질량지수 상한 체중은 남녀 구분없이 키(m) x 키(m) x 25로 구해집니다.
질환이 있는 분은 주치의와 상의하십시오. 
(대한비만학회)
남자  키(m) x 키(m) x 22

여자 키(m) x 키(m) x 21


계산
BMI지수= 몸무게(kg) ÷ (신장(m) × 신장(m))

판정기준(세계보건기구 기준)
체질량지수	분류
18.5 미만	저체중
18.5 - 24.9	정상
25.0 - 29.9	과체중
30.0 이상	비만


*/
