import styles from '@pages/Local/Local.module.scss';

import { useEffect, useRef } from 'react';
import useIntersection from '@/hooks/useIntersection';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

import LocalMarketList from './components/LocalMarketList';
import LoadViewCountModal from '@/components/Modal/LoadViewCountModal';
import ListContainer from '@/components/Common/Container';
import ObserverSpinner from '@/components/Spinner/ObserverSpinner';
import GuideMessage from '@/components/GuideMessage';

import { toast } from 'react-toastify';

import { ClipLoader } from 'react-spinners';
import { Helmet } from 'react-helmet';
import { koreanProvinces } from '@/data';
import CategoryGrid from '@/components/CategoryGrid';
import { useLocalRegionState } from '@/stores/LocalStore';

const VIEW_COUNT = 15;

export default function LocalMarketPage() {
  const observerRef = useRef<HTMLButtonElement>(null);
  const { marketRegion, setMarketRegion } = useLocalRegionState();
  const { isEnd } = useIntersection(observerRef);
  const {
    items,
    totalCount,
    isFetching,
    isFetchingNextPage,
    isPending,
    isLastPage,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteScroll(
    `/localmarkets?region=${marketRegion}&page=`,
    'localmarket',
    `${marketRegion}`,
  );

  async function nextPageHanlder(isEnd: boolean) {
    isEnd ? (hasNextPage ? fetchNextPage() : null) : null;
  }

  function onSetRegion(name: string) {
    setMarketRegion(name);
  }

  function loadAlert() {
    toast.info('모든 목록을 조회하였습니다.');
  }

  useEffect(() => {
    if (VIEW_COUNT > totalCount) return;
    if (isLastPage && isEnd && totalCount === items.length) return loadAlert();
    else nextPageHanlder(isEnd);
  }, [isEnd]);

  return (
    <section className={styles.local_page_container}>
      <Helmet>
        <meta charSet="utf-8" />
        <title> 향토시장이야기 | FoodPicker</title>
        <meta
          name="description"
          content="우리 고향의 향토시장과 유명한 시장 음식과 명물을 조회할 수 있는 페이지 입니다."
        />
      </Helmet>
      <h2 className={styles.page_title}>
        <p>향토시장이야기</p>
      </h2>

      <div className={styles.local_page_inner_bundary}>
        <GuideMessage
          stylesClassName={styles.page_path_guide_message}
          path="/localmarket"
          subPath=""
          mainName="향토이야기"
          subName="향토시장"
          totalCount={totalCount}
        />
        <LoadViewCountModal
          totalProductCount={totalCount}
          currentProductCount={items.length || 0}
        />
        <CategoryGrid
          onSetPrdkind={onSetRegion}
          gridTitle="지역"
          categories={koreanProvinces}
          categoryName={marketRegion}
          classNames={{
            cell: 'local_category_grid_cell',
            img: 'local_category_grid_cell_img',
          }}
        />
        <ListContainer
          container={'ul'}
          className={styles.local_list_container}
          id="localmarket-ul"
        >
          <h2 className={styles.local_list_title}>향토시장 목록</h2>
          {isPending ? (
            <p className={styles.local_list_loading_message}>
              데이터를 조회중 입니다.
            </p>
          ) : items.length > 0 ? (
            <LocalMarketList localmarkets={items} />
          ) : (
            <p className={styles.local_list_loading_message}>
              {' '}
              조회된 목록이 없습니다.
            </p>
          )}
        </ListContainer>
        {/* 로딩 스피너 겸 스크롤 위치 체크 */}
        <ObserverSpinner ref={observerRef}>
          {isError ? (
            error.message
          ) : isFetching || isFetchingNextPage ? (
            <ClipLoader
              className={styles.endPointSpan}
              size={65}
              color="#6697d6"
            />
          ) : null}
        </ObserverSpinner>
      </div>
    </section>
  );
}
