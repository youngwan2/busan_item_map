import styles from './Movement.module.scss';
import { useState, useEffect } from 'react';
import { HiOutlineChevronDoubleUp, HiOutlineChevronDoubleDown } from 'react-icons/hi';

const Movement = () => {
  const [scrollY, setScrollY] = useState(0);


  const isStart = scrollY < 50
  const isEnd = scrollY > document.body.offsetHeight - 1000

  const scrollYHandler = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollYHandler);
    return () => {
      if (scrollY > 200) window.removeEventListener('scroll', scrollYHandler);
    };
  }, [scrollY]);


  /** 스크롤 이동 함수 */
  function handleScroll(top: number, behavior: ScrollBehavior) {
    window.scrollTo({ top, behavior })
  }


  return (
    <article className={styles.movement}>
      <button
        aria-label='위로 이동'
        className={`${styles.top_btn} ${isStart ? '' : styles.active}`}
        onClick={() => { handleScroll(0, 'smooth') }}
      >
        <HiOutlineChevronDoubleUp />
      </button>

      <button
        aria-label='아애로 이동'
        className={`${styles.bottom_btn} ${isEnd ? '' : styles.active}`}
        onClick={() => { handleScroll(10000000000, 'smooth') }}
      >
        <HiOutlineChevronDoubleDown />
      </button>
    </article>
  );
};

export default Movement;
