import { NutritionProductType } from '@/types/Nutrition.types';
import styles from '@pages/Nutrition/Nutrition.module.scss';

interface PropsType {
  product: NutritionProductType;
}

export default function VitaminInfoCard({ product }: PropsType) {
  return (
    <div className={styles.product_card}>
      <div className={styles.product_card_content}>
        <h3>비타민</h3>
      </div>
      <div className={styles.product_card_content}>
        <strong>비타민A(μg)</strong>
        <p>{product.vitamin_a_μg_rae || 0}</p>
      </div>
      <div className={styles.product_card_content}>
        <strong>비타민B1(mg)</strong>
        <p>{product.thiamine_mg || 0}</p>
      </div>
      <div className={styles.product_card_content}>
        <strong>비타민B2(mg)</strong>
        <p>{product.riboflavin_mg || 0}</p>
      </div>
      <div className={styles.product_card_content}>
        <strong>비타민B3(mg)</strong>
        <p>{product.niacin_mg || 0}</p>
      </div>
      <div className={styles.product_card_content}>
        <strong>비타민C(mg)</strong>
        <p>{product.vitamin_c_mg || 0}</p>
      </div>
      <div className={styles.product_card_content}>
        <strong>비타민D(μg)</strong>
        <p>{product.vitamin_d_μg || 0}</p>
      </div>
    </div>
  );
}
