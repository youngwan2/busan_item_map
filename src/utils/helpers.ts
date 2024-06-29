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
export function debounce<T>(func: (arg: T) => void, wait: number = 0) {
  let timeout: NodeJS.Timeout;

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
