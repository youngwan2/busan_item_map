import styles from '@pages/Nutrition/Nutrition.module.scss';

import { calculateIntakePercentage } from '@/utils/helpers';

import { NutritionProductType } from '@/types/Nutrition.types';
import NutritionChart from './NutritionChart';

interface PropsType {
  product: NutritionProductType;
}
export default function MacroNutrientCard({ product }: PropsType) {
  const { carbohydrate_g, protein_g, fat_g } = product;

  const data = {
    labels: ['탄수화물', '단백질', '지방'],
    datasets: [
      {
        label: '3대 영양소',
        data: [carbohydrate_g || 0, protein_g || 0, fat_g || 0],
        backgroundColor: 'rgba(25, 23, 255, 0.2)',
        borderColor: 'rgba(25, 99, 255, 0.5)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={styles.product_card}>
      <div className={styles.product_card_content}>
        <h3>3대 영양소(단위:g)</h3>
      </div>
      <div className={styles.product_card_content}>
        <strong>탄수화물</strong>
        <p>
          {carbohydrate_g || 0}(
          {calculateIntakePercentage('탄수화물', carbohydrate_g)})
        </p>
      </div>
      <div className={styles.product_card_content}>
        <strong>단백질</strong>
        <p>
          {protein_g || 0}({calculateIntakePercentage('단백질', protein_g)})
        </p>
      </div>
      <div className={styles.product_card_content}>
        <strong>지방</strong>
        <p>
          {fat_g || 0}({calculateIntakePercentage('지방', fat_g)})
        </p>
      </div>
      <div className={styles.rader_chart}>
        <NutritionChart data={data} />
      </div>
    </div>
  );
}
