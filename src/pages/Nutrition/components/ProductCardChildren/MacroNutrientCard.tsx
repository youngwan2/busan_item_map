import { NutritionProductType } from '@/types/Nutrition.types';
import styles from '@pages/Nutrition/Nutrition.module.scss';

interface PropsType {
  product: NutritionProductType;
}
export default function MacroNutrientCard({ product }: PropsType) {
  return (
    <div className={styles.product_card}>
      <div className={styles.product_card_content}>
        <h3>3대 영양소(단위:g)</h3>
      </div>
      <div className={styles.product_card_content}>
        <strong>탄수화물</strong>
        <p>{product.carbohydrate_g}</p>
      </div>
      <div className={styles.product_card_content}>
        <strong>단백질</strong>
        <p>{product.protein_g}</p>
      </div>
      <div className={styles.product_card_content}>
        <strong>지방</strong>
        <p>{product.fat_g}</p>
      </div>
    </div>
  );
}
