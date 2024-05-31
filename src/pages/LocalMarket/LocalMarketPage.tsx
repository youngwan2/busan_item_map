import { useEffect, useRef } from 'react';
import styles from './LocalMarket.module.scss';
import GuideMessage from '../../components/GuideMessage';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import useIntersection from '../../hooks/useIntersection';
import LocalMarketList from './components/LocalMarketList';
import LoadingSpinner from '@/components/Common/Spinner/LoadingSpinner';
import LoadViewCountModal from '@/components/LoadViewCountModal';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';
import { localMarketRegionState } from '@/atom/LocalAtom';
import LocalCategoryGrid from '../LocalFood/components/LocalCategoryGrid';

const VIEW_COUNT = 15
const LocalMarketPage = () => {
  useEffect(() => {
    document.title = '향토음식조회 | FoodPicker';
  }, []);

  const observerRef = useRef<HTMLButtonElement>(null);
  const [region, setRegion] = useRecoilState(localMarketRegionState)
  const { isEnd } = useIntersection(observerRef);
  const { items, totalCount, isFetching, hasNextPage, fetchNextPage } = useInfiniteScroll(
    `/localmarkets?region=${region}&page=`,
    'localmarket',
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

  console.log(totalCount, items.length)

  useEffect(() => {
    if(VIEW_COUNT> totalCount) return 
    if (!hasNextPage && VIEW_COUNT > totalCount && isEnd && totalCount === items.length) return loadAlert()
    else nextPageHanlder(isEnd);

  }, [isEnd]);


  if (!items && isFetching) {
    return <LoadingSpinner />;
  }
  return (
    <section className={styles.localmarket_page_container}>
      <h2 className={styles.page_title}>
        <p>향토시장이야기</p>
      </h2>
      <div className={styles.localmarket_page_inner_boundaray}>
        <GuideMessage
          stylesClassName={styles.page_path_guide_message}
          path="/localmarket"
          subPath=''
          mainName="향토 이야기"
          subName="향토시장이야기"
          totalCount={totalCount}
        />
        <LoadViewCountModal totalProductCount={totalCount} currentProductCount={items.length} />
        <LocalCategoryGrid onSetPrdkind={onSetRegion} categoryName={region} />
        <LocalMarketList localmarkets={items} />
        <button className={styles.scroll_pointer} ref={observerRef} aria-hidden={'true'}></button>
      </div>
    </section>
  );
};

export default LocalMarketPage;
