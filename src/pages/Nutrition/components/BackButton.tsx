import styles from "../NutritionDetail.module.scss";

const BackButton = () => {
  return (
    <article className={styles.back_btn_con}>
      <button
        className={styles.back_btn}
        style={{ margin: "10px" }}
        onClick={() => {
          window.history.back();
        }}
      >
        뒤로가기
      </button>
    </article>
  );
};

export default BackButton;
