import  React,{ forwardRef } from 'react';
import styles from './ObserverSpinner.module.scss'; // 예시로 CSS 모듈을 사용한다고 가정

interface PropsType {
    children:React.ReactNode   
}
const ObserverSpinner = forwardRef<HTMLSpanElement,PropsType>(({children},ref) => {
  return (
    <span className={styles.endPointSpan } ref={ref}>
        {children}
    </span>
  );
});

ObserverSpinner.propTypes = {
  // props의 타입을 정의할 수 있습니다 (예: className 등)
};

export default ObserverSpinner;
