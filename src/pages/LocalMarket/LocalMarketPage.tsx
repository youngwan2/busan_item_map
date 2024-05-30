import { useEffect, useRef } from 'react';
import styles from './LocalMarket.module.scss';
import GuideMessage from '../../components/Common/GuideMessage';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import useIntersection from '../../hooks/useIntersection';
import LocalMarketList from './components/LocalMarketList';
import LoadingSpinner from '@/components/Common/Spinner/LoadingSpinner';

const LocalMarketPage = () => {
  useEffect(() => {
    document.title = '향토음식조회 | FoodPicker';
  }, []);

  const observerRef = useRef<HTMLButtonElement>(null);

  const { isEnd } = useIntersection(observerRef);
  const { items, totalCount, isFetching, hasNextPage, fetchNextPage } = useInfiniteScroll(
    '/localmarkets?page=',
    'localmarket',
 
  );

  async function nextPageHanlder() {
    const isNext = new Promise((reslove) => {
      if (isEnd) {
        reslove(true);
      } else {
        reslove(false);
      }
    });
    (await isNext) ? hasNextPage && fetchNextPage() : null;
  }

  useEffect(() => {
    if (!hasNextPage) return;
    nextPageHanlder();
  }, [isEnd]);

  if (!items && isFetching) {
    return <LoadingSpinner />;
  }
  return (
    <section className={styles.Localmarket}>
      <h2 className={styles.page_title}>
        <p>향토시장이야기</p>
      </h2>
      <GuideMessage
      stylesClassName={styles.page_path_guide_message}
        path="/localmarket"
        subPath=''
        mainName="향토 이야기"
        subName="향토시장이야기"
        totalCount={totalCount}
      />
      <LocalMarketList localmarkets={items} />
      <button className={styles.scroll_pointer} ref={observerRef} aria-hidden={'true'}></button>
    </section>
  );
};

export default LocalMarketPage;
