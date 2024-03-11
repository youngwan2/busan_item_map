import styles from '../Bmi.module.scss';

interface PropsType {
  setResult: (p: number) => void;
  weight: number;
  height: number;
  weightElRef: any;
  heightElRef: any;
}
const BmiButton = ({ setResult, weight, height, weightElRef, heightElRef }: PropsType) => {
  return (
    <div className={styles.button_area}>
      <button
        onClick={() => {
          const result = Number(((weight / height ** 2) * 10000).toFixed(2));
          setResult(result);
        }}
      >
        계산하기
      </button>
      <button
        onClick={() => {
          if (weightElRef.current && heightElRef.current) {
            weightElRef.current.value = '';
            heightElRef.current.value = '';
          }
        }}
      >
        초기화
      </button>
    </div>
  );
};

export default BmiButton;
