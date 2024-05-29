import styles from '@pages/Nutrition/Nutrition.module.scss';

import { useState, useRef, useEffect, Fragment, useCallback, type MouseEvent } from 'react';
import { useRecoilState } from 'recoil';

import { NutritionPageNumber } from '../../../atom/NutritionsAtom';


interface PropsType {
  totalPage: number;
}
const NutritionPagination = ({ totalPage }: PropsType) => {
  const [page, setPage] = useRecoilState(NutritionPageNumber);
  const pageSize = useRef<number>(5);
  const [liElements, setLiElements] = useState<JSX.Element[]>();
  const [pageGroup, setPageGroup] = useState(0);
  const [lastPage, setLastPage] = useState(0);
  const [firstPage, setFirstPage] = useState(0);

  const isLastPageGreaterThanTotal = lastPage >= totalPage; // 현재 끝 페이지 인가
  const isFirstPageGreaterThanCurrentPage = firstPage > page; // 현재 첫 페이지인가


  /** 이전 페이지 이동 */
  function handlePrevPage() {
    setPage(old => Math.max(--old, 0));
  }

  /** 다음 페이지 이동 */
  function handleNextPage() {
    setPage(old => Math.min(++old, totalPage));
  }

  /** 선택 페이지 이동 */
  function handlePageChange(e: MouseEvent<HTMLLIElement>) {
    const pageNumber = Number(e.currentTarget.textContent);
    setPage(pageNumber);
    setPageGroup(page / pageSize.current);

  }

  /** 페이지네이션 렌더러 */
  const elementRendererFun = useCallback(
    (page: number, pageGroup: number) => {
      setPageGroup(Math.ceil(page / pageSize.current));
      setLastPage(pageGroup * pageSize.current);
      const lis: JSX.Element[] = [];

      if (isLastPageGreaterThanTotal) {
        setLastPage(totalPage);
      }
      if (isLastPageGreaterThanTotal && isFirstPageGreaterThanCurrentPage) {
        setLastPage(pageGroup * pageSize.current);
      }
      for (let i = firstPage; i <= lastPage; i++) {
        if (i > 0) {
          lis.push(
            <li
              aria-label={`${page} 페이지 이동 버튼`}
              className={`${styles.page_link} ${page === i ? styles.active : ''}`}
              onClick={handlePageChange}
            >
              {i}
            </li>,
          );
        }
      }

      setLiElements(lis);
    },
    [
      setPage,
      firstPage,
      lastPage,
      totalPage,
      isFirstPageGreaterThanCurrentPage,
      isLastPageGreaterThanTotal,
    ],
  );

  // 마지막 페이지가 짝수일 때 보여지는 페이지 버튼 수를 조정하는 이펙트
  useEffect(() => {
    if (lastPage % 2 === 0) {
      setFirstPage(lastPage - pageSize.current + 1);
    } else {
      setFirstPage(lastPage - pageSize.current + 1);
    }
  }, [firstPage, lastPage, totalPage]);

  // 페이지네이션 초깃값을 셋팅하고, 변동 사항을 추적하여 반영하는 이펙트
  useEffect(() => {
    elementRendererFun(page, pageGroup);
  }, [page, pageGroup, elementRendererFun]);

  return (
    <ul
      className={styles.pagination_container}
      style={totalPage === 0 ? { display: 'none' } : { display: 'flex' }}
    >
      <li
        aria-label={`이전 페이지 이동 버튼`}
        aria-hidden={`${page <= 1 ? 'true' : 'false'}`}
        className={`${styles.page_link} ${page <= 1 ? styles.hidden : ''}`}
        onClick={handlePrevPage}
      >
        prev
      </li>
      {liElements?.map((li) => {
        const id = li.props.children;
        return <Fragment key={id}>{li}</Fragment>;
      })}
      <li
        aria-label='다음 페이지 이동 버튼'
        aria-hidden={`${totalPage === page ? 'true' : 'false'}`}
        className={`${styles.page_link} ${totalPage === page ? styles.hidden : ''}`}
        onClick={handleNextPage}
      >
        next
      </li>
    </ul>
  );
};

export default NutritionPagination;
