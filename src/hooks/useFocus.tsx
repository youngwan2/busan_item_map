import { RefObject, useEffect } from 'react';

export default function useFoucs(targetRef: RefObject<HTMLElement>) {
  useEffect(() => {
    if (targetRef.current) targetRef.current.focus();
  }, [targetRef]);
}
