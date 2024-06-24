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
export function debounce(func: (arg: any) => void, wait: number = 0) {
  let timeout: NodeJS.Timeout;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (arg: any) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func(arg);
    }, wait);
  };
}
