import styles from './ObserverSpinner.module.scss';

import { type ReactNode, forwardRef } from 'react';

interface PropsType {
  children: ReactNode;
}
const ObserverSpinner = forwardRef<HTMLSpanElement, PropsType>(
  ({ children }, ref) => {
    return (
      <span className={styles.endPointSpan} ref={ref}>
        {children}
      </span>
    );
  },
);

export default ObserverSpinner;
