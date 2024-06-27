import styles from '@pages/Local/Local.module.scss';

import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import useIntersection from '@/hooks/useIntersection';

import LocalFoodList from './components/LocalFoodList';
import GuideMessage from '@components/GuideMessage';
import ObserverSpinner from '@components/Spinner/ObserverSpinner';

import LoadViewCountModal from '@/components/Modal/LoadViewCountModal';
import ListContainer from '@/components/Common/Container';

import { localFoodRegionState } from '@/atom/LocalAtom';

import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import CategoryGrid from '@/components/CategoryGrid';
import { koreanProvinces } from '@/data';

const VIEW_COUNT = 15;

export default function LocalFoodPage() {
  const observerRef = useRef<HTMLButtonElement>(null);
  const [region, setRegion] = useRecoilState(localFoodRegionState);
  const { isEnd } = useIntersection(observerRef);
  const {
    items,
    totalCount,
    isPending,
    isError,
    error,
    isFetching,
    isLastPage,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteScroll(
    `/localfoods?region=${region}&page=`,
    'localfood',
    `${region}`,
  );

  async function nextPageHanlder(isEnd: boolean) {
    isEnd ? (hasNextPage ? fetchNextPage() : null) : null;
  }

  function onSetRegion(name: string) {
    setRegion(name);
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
        <title> 향토음식이야기 | FoodPicker</title>
        <meta
          name="description"
          content="우리 고향의 향토음식을 조회 할 수 있는 페이지 입니다."
        />
      </Helmet>
      <h2 className={styles.page_title}>
        <p>향토음식이야기</p>
      </h2>

      <div className={styles.local_page_inner_bundary}>
        <GuideMessage
          stylesClassName={styles.page_path_guide_message}
          path="/localfood"
          subPath=""
          mainName="향토이야기"
          subName="향토음식"
          totalCount={totalCount}
        />
        <LoadViewCountModal
          currentProductCount={items.length || 0}
          totalProductCount={totalCount}
        />
        <CategoryGrid
          onSetPrdkind={onSetRegion}
          gridTitle="지역"
          categories={koreanProvinces}
          categoryName={region}
          classNames={{
            cell: 'local_category_grid_cell',
            img: 'local_category_grid_cell_img',
          }}
        />
        <ListContainer
          container={'ul'}
          className={styles.local_list_container}
          id="localfood-ul"
        >
          <h2 className={styles.local_list_title}>향토음식 목록</h2>
          {isPending ? (
            <p className={styles.local_list_loading_message}>
              데이터를 조회중 입니다.
            </p>
          ) : items.length > 0 ? (
            <LocalFoodList localfoods={items} />
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
