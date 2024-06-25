import { MouseEventHandler } from 'react';
import styles from './Search.module.scss';

interface PropsType {
  onClick: MouseEventHandler<HTMLButtonElement>;
  options: {
    text: string;
    type?: 'submit' | 'reset' | 'button';
  };
}
export default function SearchButton({ onClick, options }: PropsType) {
  const { type, text } = options;
  return (
    <button type={type} className={styles.search_btn} onClick={onClick}>
      {text}
    </button>
  );
}
