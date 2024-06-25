import styles from './Message.module.scss';
import { ReactNode } from 'react';

interface PropsType {
  children: ReactNode;
  styleClassName?: string;
}

export default function Message({ children, styleClassName }: PropsType) {
  return (
    <div
      aria-label="콘텐츠 부가설명 텍스트"
      className={styleClassName ?? styles.message_container}
    >
      {children}
    </div>
  );
}
