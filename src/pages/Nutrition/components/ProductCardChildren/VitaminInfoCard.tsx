import { NutritionProductType } from '@/types/Nutrition.types';
import { calculateIntakePercentage } from '@/utils/helpers';
import styles from '@pages/Nutrition/Nutrition.module.scss';

interface PropsType {
  product: NutritionProductType;
}

export default function VitaminInfoCard({ product }: PropsType) {
  const {
    vitamin_a_μg_rae,
    vitamin_c_mg,
    vitamin_d_μg,
    thiamine_mg,
    riboflavin_mg,
    niacin_mg,
  } = product;

  const vitaminData = [
    { name: '비타민A', value: vitamin_a_μg_rae || 0, unit: 'μg' },
    { name: '비타민B1', value: thiamine_mg || 0, unit: 'mg' },
    { name: '비타민B2', value: riboflavin_mg || 0, unit: 'mg' },
    { name: '비타민B3', value: niacin_mg || 0, unit: 'mg' },
    { name: '비타민C', value: vitamin_c_mg || 0, unit: 'mg' },
    { name: '비타민D', value: vitamin_d_μg || 0, unit: 'μg' },
  ];
  return (
    <div className={styles.product_card}>
      <div className={styles.product_card_content}>
        <h3>비타민</h3>
      </div>
      {vitaminData.map((vitamin) => (
        <div key={vitamin.name} className={styles.product_card_content}>
          <strong>
            {vitamin.name}({vitamin.unit})
          </strong>
          <p>
            {vitamin.value} (
            {calculateIntakePercentage(vitamin.name, vitamin.value)})
          </p>
        </div>
      ))}
    </div>
  );
}
