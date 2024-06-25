import styles from '@pages/Nutrition/Nutrition.module.scss';
interface PropsType {
  onNextClick: () => void;
  onPrevClick: () => void;
}

export default function ProductCardSlideButtonContainer({
  onNextClick,
  onPrevClick,
}: PropsType) {
  return (
    <div className={styles.product_slide_button_container}>
      <button onClick={onPrevClick} className={styles.prev_btn}>
        이전
      </button>
      <button onClick={onNextClick} className={styles.next_btn}>
        다음
      </button>
    </div>
  );
}
