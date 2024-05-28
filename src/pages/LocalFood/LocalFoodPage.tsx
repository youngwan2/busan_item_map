import styles from './LocalFood.module.scss';

import { useEffect, useRef } from 'react';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import useIntersection from '../../hooks/useIntersection';

import LocalFoodList from './components/LocalFoodList';
import GuideMessage from '../../components/Common/GuideMessage';
import ObserverSpinner from '@/components/Common/Spinner/ObserverSpinner';
import { ClipLoader } from 'react-spinners';

const LocalFoodPage = () => {
  useEffect(() => {
    document.title = '향토음식조회 | FoodPicker';
  }, []);

  const observerRef = useRef<HTMLButtonElement>(null);

  const { isEnd } = useIntersection(observerRef);
  const { items, totalCount, isPending, isError, error, isFetching, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteScroll(
    '/localfoods?page=',
    'localfood',

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

  return (
    <section className={styles.Localfood}>
      <h2 className={styles.page_title}>
        <p>향토음식이야기</p>
      </h2>
      <GuideMessage
        path="/localfood"
        mainName="향토 이야기"
        subName="향토 음식이야기"
        totalCount={totalCount}
      />
      <LocalFoodList localfoods={items}>


      </LocalFoodList>
      {/* 로딩 스피너 겸 스크롤 위치 체크 */}
      <ObserverSpinner ref={observerRef}>
        {
          isError
            ? error.message
            : isFetching || isPending || isFetchingNextPage
              ? <ClipLoader className={styles.endPointSpan} size={65} color='#6697d6' />
              : null
        }
      </ObserverSpinner>
    </section>
  );
};

export default LocalFoodPage;
