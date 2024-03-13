import { useEffect, useState } from 'react';

/**
 * * 참조하는 요소의 경계가 끝 지점에 도달하였는지 체크하는 커스텀 훅
 * @param ref  참조할 DOM 요소의 인스턴스
 * @returns true or false
 */
export default function useIntersection(ref: React.RefObject<any>) {
  const [isEnd, setIsEnd] = useState(false);

  const options = {
    threshold: 0.7,
    root: null,
  };
  const obsever = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) return setIsEnd(true);
      else setIsEnd(false);
    });
  }, options);

  useEffect(() => {
    if (!ref.current) return;
    const viewTarget = ref.current;
    obsever.observe(viewTarget);

    return () => {
      obsever.disconnect();
    };
  });
  return { isEnd };
}
