import { RefObject, MouseEvent, useRef } from 'react';
import styles from '../LocalFood.module.scss';

interface PropsType {
  setDisplay: (p: boolean) => void;
  title?: string[];
  searchFilter: (e: MouseEvent<HTMLLIElement>) => void;
}

const SidebarNav = ({ setDisplay, title, searchFilter }: PropsType) => {
  const categoryRef = useRef<HTMLOListElement>(null);

  // 카테고리 상단 이동
  const categoryTopShifter = (topBtnRef: RefObject<HTMLLIElement>) => {
    topBtnRef.current?.addEventListener('click', () => {
      categoryRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };

  // 카테고리 하단 이동
  const categoryBottomShifter = (bottomBtnRef: RefObject<HTMLLIElement>) => {
    bottomBtnRef.current?.addEventListener('click', () => {
      categoryRef.current?.scrollTo({ top: 100000, behavior: 'smooth' });
    });
  };

  return (
    <ol className={styles.category} ref={categoryRef}>
      <button
        onClick={() => {
          setDisplay(false);
        }}
        className={styles.slide_btn_inner}
      >
        <img src={'/icon/close.svg'} width={30} height={30} alt="" />
      </button>
      {title?.map((title, i) => {
        return (
          <li key={i} onClick={searchFilter}>
            {title}
          </li>
        );
      })}
    </ol>
  );
};

export default SidebarNav;
