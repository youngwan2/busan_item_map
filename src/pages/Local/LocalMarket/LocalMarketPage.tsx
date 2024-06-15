import styles from '@pages/Local/Local.module.scss'

import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import useIntersection from '@/hooks/useIntersection';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

import LocalMarketList from './components/LocalMarketList';
import LoadViewCountModal from '@/components/Modal/LoadViewCountModal';
import LocalCategoryGrid from '../Common/LocalCategoryGrid';
import ListContainer from '@/components/Common/Container';
import ObserverSpinner from '@/components/Spinner/ObserverSpinner';
import GuideMessage from '@/components/GuideMessage';

import { localMarketRegionState } from '@/atom/LocalAtom';
import { toast } from 'react-toastify';

import { ClipLoader } from 'react-spinners';


const VIEW_COUNT = 15

export default function LocalMarketPage() {
  const observerRef = useRef<HTMLButtonElement>(null);
  const [region, setRegion] = useRecoilState(localMarketRegionState)
  const { isEnd } = useIntersection(observerRef);
  const { items, totalCount, isFetching, isFetchingNextPage, isPending, isLastPage, isError, error, hasNextPage, fetchNextPage } = useInfiniteScroll(
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

  useEffect(() => {
    if (VIEW_COUNT > totalCount) return
    if (isLastPage && isEnd && totalCount === items.length) return loadAlert()
    else nextPageHanlder(isEnd);
  }, [isEnd]);

  useEffect(() => {
    document.title = '향토시장이야기 | FoodPicker';
  }, []);

  return (
    <section className={styles.local_page_container}>
      <h2 className={styles.page_title}>
        <p>향토시장이야기</p>
      </h2>
      
      <div className={styles.local_page_inner_bundary}>
        <GuideMessage
          stylesClassName={styles.page_path_guide_message}
          path="/localmarket"
          subPath=''
          mainName="향토이야기"
          subName="향토시장"
          totalCount={totalCount}
        />
        <LoadViewCountModal totalProductCount={totalCount} currentProductCount={items.length || 0}/>
        <LocalCategoryGrid onSetPrdkind={onSetRegion} categoryName={region} />
        <ListContainer container={'ul'} className={styles.local_list_container} id="localmarket-ul">
          <h2 className={styles.local_list_title}>향토시장 목록</h2>
          {isPending
            ? <p className={styles.local_list_loading_message}>데이터를 조회중 입니다.</p>
            : items.length > 0 ? <LocalMarketList localmarkets={items} />
              : <p className={styles.local_list_loading_message}> 조회된 목록이 없습니다.</p>}
        </ListContainer>
        {/* 로딩 스피너 겸 스크롤 위치 체크 */}
        <ObserverSpinner ref={observerRef}>
          {
            isError
              ? error.message
              : isFetching || isFetchingNextPage
                ? <ClipLoader className={styles.endPointSpan} size={65} color='#6697d6' />
                : null
          }
        </ObserverSpinner>
      </div>
    </section>
  );
};

