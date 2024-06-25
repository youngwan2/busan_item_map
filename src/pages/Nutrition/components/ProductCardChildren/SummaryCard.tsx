import styles from '@pages/Nutrition/Nutrition.module.scss';

import { NutritionProductType } from '@/types/Nutrition.types';

interface PropsType {
  product: NutritionProductType;
}

export default function SummaryCard({ product }: PropsType) {
  const {
    id,
    sort,
    food_weight,
    base_g,
    kcal_g,
    source_name,
    company_name,
    origin_country_name,
    data_generation_date,
    data_reference_date,
  } = product;
  const productInfo = [
    { label: '식별번호', value: id },
    { label: '분류', value: sort },
    { label: '총중량', value: food_weight },
    { label: '단위중량', value: base_g },
    { label: '칼로리', value: `${kcal_g}kcal` },
    { label: '출처', value: source_name },
    {
      label: '회사명',
      value:
        company_name.replaceAll('해당없음', '').replaceAll(',', '') ||
        '해당없음',
    },
    { label: '원산지', value: origin_country_name },
    { label: '갱신일자', value: data_reference_date },
    { label: '생성일자', value: data_generation_date },
  ];

  return (
    <div className={styles.product_card}>
      {productInfo.map((info, index) => (
        <div key={index} className={styles.product_card_content}>
          <strong>{info.label}</strong>
          <p>{info.value}</p>
        </div>
      ))}
      <p
        className={styles.add_info}
      >{`총중량 ${food_weight} 기준으로 총 섭취 칼로리는 ${calculateKcalByFoodWeight(base_g, kcal_g, food_weight)}kcal 입니다.`}</p>
    </div>
  );
}

interface CalculateKcalByFoodWeightType {
  (unitWeight: string, unitKcal: number, fullWeight: string): number;
}
/** 총중량 칼로리 계산
 * @description
 * (칼로리/중량)는 '그램 당 칼로리'를 의미한다. 여기서 ('총 중량'x'그램 당 칼로리')는 '총 칼로리'가 된다.
 */
export const calculateKcalByFoodWeight: CalculateKcalByFoodWeightType = (
  unitWeight,
  unitKcal,
  fullWeight,
) => {
  const kcalPerGram = unitKcal / removeUnit(unitWeight);
  const fullKcal = removeUnit(fullWeight) * kcalPerGram;
  return Number(fullKcal.toFixed(2));
};

export function removeUnit(target: string) {
  if (target.length < 2) return 0;
  return Number(target.replace('g', '').replace('kcal', ''));
}
