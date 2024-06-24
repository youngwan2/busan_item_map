import styles from '@pages/Nutrition/NutritionProductFliter.module.scss';

import { ChangeEvent } from 'react';
import Container from '@/components/Common/Container';
import { useRecoilState } from 'recoil';

import { nutritionKcalFilter } from '@/atom/NutritionsAtom';
import { debounce } from '@/utils/helpers';

export default function KcalRangeFilter() {
  const [kcal, setKcal] = useRecoilState(nutritionKcalFilter);

  const debounceCloser = debounce(setKcal, 150); // 클로저 생성

  /* eslint-disable @typescript-eslint/no-explicit-any */
  function handleChangeKcal(
    e: ChangeEvent<HTMLInputElement>,
    type: 'min' | 'max',
    debounceCloser: (old: any) => void,
  ) {
    const value = Number(e.currentTarget.value);

    // memo: 함수의 특성상 old 에 어떤 데이터가 들어올지 알 수 없으므로 any 타입 지정. 대체 가능한 방식이 있으면 대체 필수
    /* eslint-disable @typescript-eslint/no-explicit-any */
    debounceCloser((old: any) => ({ ...old, [type]: value }));
  }

  return (
    <Container container={'div'} className={styles.filter_content_wrapper}>
      <h3>칼로리(열량)</h3>
      <div className={styles.filter_contents}>
        <div className={styles.input_container}>
          <input
            min={0}
            max={1000}
            onChange={(e) => handleChangeKcal(e, 'min', debounceCloser)}
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
            onChange={(e) => handleChangeKcal(e, 'max', debounceCloser)}
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
