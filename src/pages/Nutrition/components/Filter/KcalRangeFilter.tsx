import styles from '@pages/Nutrition/NutritionProductFliter.module.scss';

import { ChangeEvent } from 'react';
import Container from '@/components/Common/Container';

import { debounce } from '@/utils/helpers';
import { useNutritionKcalFilterStore } from '@/stores/NutritionStore';

export default function KcalRangeFilter() {
  const { kcal, setKcal } = useNutritionKcalFilterStore();

  const debounceCloser = debounce(setKcal, 150); // 클로저 생성

  function handleChangeKcal(
    e: ChangeEvent<HTMLInputElement>,
    type: 'min' | 'max',
  ) {
    const value = Number(e.currentTarget.value);

    debounceCloser({ ...kcal, [type]: value });
  }

  return (
    <Container container={'div'} className={styles.filter_content_wrapper}>
      <h3>칼로리(열량)</h3>
      <div className={styles.filter_contents}>
        <div className={styles.input_container}>
          <input
            min={0}
            max={1000}
            onChange={(e) => handleChangeKcal(e, 'min')}
            name="kcal"
            id="min-kcal"
            type="range"
            defaultValue={kcal.min}
          />
          <label htmlFor="min-kcal">최소 {kcal.min}kcal</label>
        </div>
        <div className={styles.input_container}>
          <input
            min={0}
            max={1000}
            onChange={(e) => handleChangeKcal(e, 'max')}
            name="kcal"
            id="max-kcal"
            type="range"
            defaultValue={kcal.max}
          />
          <label htmlFor="max-kcal">최대 {kcal.max}kcal</label>
        </div>
      </div>
    </Container>
  );
}
