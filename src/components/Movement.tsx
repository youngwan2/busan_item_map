import styles from './Movement.module.scss';
import { useState, useEffect } from 'react';
import { HiOutlineChevronDoubleUp, HiOutlineChevronDoubleDown } from 'react-icons/hi';

const Movement = () => {
  const [scrollY, setScrollY] = useState(0);
  const scrollYHandler = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollYHandler);
    return () => {
      if (scrollY > 200) window.removeEventListener('scroll', scrollYHandler);
    };
  }, [scrollY]);

  return (
    <article className={styles.movement}>
      <button
        style={scrollY < 50 ? { visibility: 'hidden' } : { visibility: 'visible' }}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        {' '}
        <HiOutlineChevronDoubleUp />
      </button>

      <button
        style={
          scrollY > document.body.offsetHeight - 1000
            ? { visibility: 'hidden' }
            : { visibility: 'visible' }
        }
        onClick={() => {
          window.scrollTo({ top: 10000000000, behavior: 'smooth' });
        }}
      >
        <HiOutlineChevronDoubleDown />
      </button>
    </article>
  );
};

export default Movement;
