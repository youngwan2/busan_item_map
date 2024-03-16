import styles from './Introduce.module.scss';
import { useEffect, MouseEvent, useState, useRef } from 'react';
import IntroSlide from './IntroSlide';
import IntroSlideButton from './IntroSlideButton';
import Header from '../../../components/Layout/Header';

const MAX_SIZE = 4
const delay = 5000
const Introduce = () => {
  useEffect(() => {
    document.title = 'Food Picker';
  }, []);

  const sectionRef = useRef<HTMLAreaElement>(null);

  const [page, setPage] = useState(1);
  const pageSwitch = (e: MouseEvent<HTMLUListElement>) => {
    if (e.target instanceof HTMLLIElement) {
      const index = Number(e.target.dataset.index) || 0;
      setPage(index);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((old) => ++old);
      if (page >= MAX_SIZE) {
        setPage(1);
      }
    }, delay);
    return () => {
      clearInterval(interval);
    };
  }, [page]);

  return (
    <section className={styles.Introduce} ref={sectionRef}>
      <Header />
      <IntroSlideButton pageSwitch={pageSwitch} page={page} />
      <IntroSlide page={page} />
    </section>
  );
};

export default Introduce;
