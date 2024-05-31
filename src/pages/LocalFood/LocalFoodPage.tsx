import styles from './LocalFood.module.scss';

import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import useIntersection from '@/hooks/useIntersection';

import LocalFoodList from './components/LocalFoodList';
import GuideMessage from '@components/GuideMessage';

import ObserverSpinner from '@components/Common/Spinner/ObserverSpinner';
import { ClipLoader } from 'react-spinners';
import LoadViewCountModal from '@components/LoadViewCountModal';
import LocalCategoryGrid from './components/LocalCategoryGrid';
import { toast } from 'react-toastify';

import { localFoodRegionState } from '@/atom/LocalAtom';


const VIEW_COUNT=15
const LocalFoodPage = () => {


  const observerRef = useRef<HTMLButtonElement>(null);
  const [region, setRegion] = useRecoilState(localFoodRegionState)
  const { isEnd } = useIntersection(observerRef);
  const { items, totalCount, isPending, isError, error, isFetching, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteScroll(
    `/localfoods?region=${region}&page=`,
    'localfood',
    `${region}`

  );

  async function nextPageHanlder(isEnd: boolean) {
    isEnd ? hasNextPage ? fetchNextPage() : null : null
  }

  function onSetRegion(name: string) {
    setRegion(name)
  }

  function loadAlert() {
    toast.info('모든 목록을 조회하였습니다.')
  }

  useEffect(() => {
    if (!hasNextPage && VIEW_COUNT<totalCount&& isEnd && totalCount === items.length) return loadAlert()
    else nextPageHanlder(isEnd);

  }, [isEnd]);


  useEffect(() => {
    document.title = '향토음식조회 | FoodPicker';
  }, []);

  return (
    <section className={styles.localfood_page_container}>
      <h2 className={styles.page_title}>
        <p>향토음식이야기</p>
      </h2>

      <div className={styles.localfood_page_inner_bundary}>
      <GuideMessage
        stylesClassName={styles.page_path_guide_message}
        path="/localfood"
        subPath=''
        mainName="향토 이야기"
        subName="향토 음식이야기"
        totalCount={totalCount}
      />
      <LoadViewCountModal currentProductCount={items?.length || 0} totalProductCount={totalCount} />
      <LocalCategoryGrid categoryName={region} onSetPrdkind={onSetRegion} />
      <LocalFoodList localfoods={items} />
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
      </div>
    </section>
  );
};

export default LocalFoodPage;
