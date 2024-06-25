import { nutritionalReferenceValues } from '@/data';
import { FormEvent } from 'react';

// memo: 헬퍼함수 아님
export const onSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};

/**
 * 디바운스
 * @param func 디바운스를 적용할 함수
 * @param wait 지연시간
 */

// memo: 함수의 특성상 어떤 매개변수가 들어올지 모르기 때문에 any 타입 사용. 대체 가능한 방안이 보이면 변경 예정
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T>(func: (arg: T) => void, wait: number = 0) {
  let timeout: NodeJS.Timeout;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (arg: T) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func(arg);
    }, wait);
  };
}

interface CalculateIntakePercentageType {
  (type: string, value: number): string;
}
/** 하루 권장섭취량 계산 */
export const calculateIntakePercentage: CalculateIntakePercentageType = (
  type,
  value,
) => {
  if (!type) {
    return '0%';
  }

  let percentage: string = '';
  for (const reference of nutritionalReferenceValues) {
    if (type.includes(reference.name)) {
      percentage = ((value / reference.value) * 100).toFixed(2) + '%';
    }
  }

  return percentage;
};
