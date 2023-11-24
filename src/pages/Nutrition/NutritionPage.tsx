import styles from "./Nutrition.module.css";
import {useEffect} from 'react'


const Nutrition = () => {
  useEffect(() => {
    document.title = "식품영양정보조회 | FoodPicker";
  }, []);
  return (
    <section className={styles.Nutrition_section}>
      <h2 className={styles.nutrition_title}>
        <strong>식품영양정보조회</strong>
      </h2>
    </section>
  );
};

export default Nutrition;
