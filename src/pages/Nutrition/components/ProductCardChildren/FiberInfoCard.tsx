import styles from '@pages/Nutrition/Nutrition.module.scss';

import { calculateIntakePercentage } from '@/utils/helpers';

import { NutritionProductType } from '@/types/Nutrition.types';

interface PropsType {
  product: NutritionProductType;
}

export default function FiberInfoCard({ product }: PropsType) {
  const { potassium_mg, calcium_mg, sodium_mg, phosphorus_mg, iron_mg } =
    product;
  const mineralData = [
    { name: '칼륨', value: potassium_mg || 0 },
    { name: '칼슘', value: calcium_mg || 0 },
    { name: '나트륨(소듐)', value: sodium_mg || 0 },
    { name: '인', value: phosphorus_mg || 0 },
    { name: '철분', value: iron_mg || 0 },
  ];

  return (
    <div className={styles.product_card}>
      <div className={styles.product_card_content}>
        <h3>식이섬유(단위:mg)</h3>
      </div>
      {mineralData.map((mineral) => (
        <div key={mineral.name} className={styles.product_card_content}>
          <strong>{mineral.name}</strong>
          <p>
            {mineral.value} (
            {calculateIntakePercentage(mineral.name, mineral.value)})
          </p>
        </div>
      ))}
    </div>
  );
}
