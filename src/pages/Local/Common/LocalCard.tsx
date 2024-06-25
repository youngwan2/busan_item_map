import styles from '@pages/Local/Common/LocalCard.module.scss';

import { MouseEventHandler } from 'react';

import { HiSearchCircle } from 'react-icons/hi';

interface PropsType {
  thnumUrl: string;
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function LocalCard({ thnumUrl, title, onClick }: PropsType) {
  return (
    <li className={styles.local_card}>
      <img
        className={styles.main_thumb}
        src={thnumUrl || '/not-image.png'}
        width={250}
        height={250}
      ></img>
      <p className={styles.main_thumb_title}>{title}</p>
      <button onClick={onClick} aria-label="세부 페이지 이동 버튼">
        <span>
          <HiSearchCircle />
        </span>
        더보기
      </button>
    </li>
  );
}
