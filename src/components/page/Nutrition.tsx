import styles from "./Nutrition.module.css";
import Database from "../../util/db";
import Header from "../UI/Header";

const Nutrition = () => {
  return (
    <>
      <Header isStyle={true} />
      <section className={styles.Nutrition_section}>
        <h2 className={styles.nutrition_title}>식품영양정보조회</h2>
        <Database />
      </section>
    </>
  );
};

export default Nutrition;
