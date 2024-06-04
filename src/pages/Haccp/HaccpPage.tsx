import styles from './Haccp.module.scss';

import { useEffect, useState, useRef, type SyntheticEvent, type MouseEvent } from 'react';
import useIntersection from '../../hooks/useIntersection';
import { useInfiniteQuery } from '@tanstack/react-query';

import HaccpSearchForm from './components/HaccpSearchForm';
import HaccpMessage from './components/HaccpMessage';
import GuideMessage from '../../components/GuideMessage';
import ObserverSpinner from '../../components/Common/Spinner/ObserverSpinner';
import HaccpCategoryGrid from './components/HaccpCategoryGrid';
import ListContainer from '@/components/Common/Container';
import LoadViewCountModal from '@/components/LoadViewCountModal';
import HaccpProductList from './components/HaccpProductList';

import axios from 'axios';
import { ClipLoader } from 'react-spinners';

function HaccpPage() {
  const [pageNo, setPageNo] = useState(1)
  const [productName, setProductName] = useState(''); // 상품 이름
  const [prdkind, setPrdkind] = useState('')

  const haccpContainerRef = useRef<HTMLBaseElement>(null);
  const endPointSpanRef = useRef<HTMLSpanElement>(null)

  const url = `https://apis.data.go.kr/B553748/CertImgListServiceV3/getCertImgListServiceV3?ServiceKey=${import.meta.env.VITE_PUBLIC_KEY}&returnType=json&prdlstNm=${productName}&prdkind=${prdkind} &numOfRows=100`;
  const queryKey = ['haccp', productName, prdkind]

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isPending,
    isError,
    error,
    isFetchingNextPage,
    isFetching
  } = useInfiniteQuery({
    queryKey: queryKey,
    queryFn: async ({ pageParam = pageNo }) => {
      const res = await axios.get(url + `&pageNo=${pageParam}`)
      return res.data
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return Number(lastPage.body.pageNo) + 1 || undefined
    },
  })

  const totalCount = data?.pages[0].body.totalCount || 0
  const productInfo = data?.pages.map((page) => page.body.items) || []
  const products = productInfo?.flat(Infinity) // 중첩 배열 평탄화

  const { isEnd } = useIntersection(endPointSpanRef) // 스크롤의 끝지점에 도착했는지 관찰


  function onSetPrdkind(name: string) {
    setPrdkind(name)
  }

  function getSearchValue(input: HTMLInputElement) {

    if (!(input instanceof HTMLInputElement)) return
    const searchProduct = input.value

    return searchProduct

  }

  function searchAction(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    const input = e.currentTarget.childNodes[1] as HTMLInputElement
    const productName = getSearchValue(input)
    setProductName(productName || '')

  }

  function onSearch(e: MouseEvent<HTMLButtonElement>) {
    const input = e.currentTarget.previousElementSibling as HTMLInputElement
    const productName = getSearchValue(input)
    setProductName(productName || '')
  }


  useEffect(() => {
    document.title = 'HACCP 제품 정보조회 | FoodPicker';
  }, []);

  useEffect(() => {
    if (isEnd && hasNextPage && totalCount > 99) {
      setPageNo(old => old + 1)
      fetchNextPage()
    }
  }, [isEnd])


  return (
    <section className={styles.haccp_page_container} ref={haccpContainerRef}>
      <h2 className={styles.haccp_page_title}>
        <p>HACCP제품 정보조회</p>
      </h2>
      <div className={styles.haccp_page_inner_bounday}>
        <GuideMessage totalCount={totalCount} stylesClassName={styles.page_path_guide_message} path='/haccp' subPath='' mainName='조회서비스' subName='HACCP제품조회' />

        <div className={styles.haccp_inner_container}>
          {/* 검색창 */}
          <HaccpSearchForm
            onSearch={onSearch}
            searchAction={searchAction}
            productName={productName}
          />
          {/* 잠깐 알고가기 */}
          <HaccpMessage />
          {/* 품목 유형 카테고리 */}
          <HaccpCategoryGrid categoryName={prdkind} onSetPrdkind={onSetPrdkind} />
          <br />
        </div>
        <LoadViewCountModal totalProductCount={totalCount} currentProductCount={products.length} />
        {/* 검색 결과 보이는 곳 */}
        <ListContainer container='section' className={styles.content_container}>
          <h2 className={styles.haccp_product_list_title}>상품목록</h2>
          {isPending
            ? <p className={styles.haccp_product_list_loading_message}>데이터를 조회중입니다.</p>
            : totalCount > 0
              ? <HaccpProductList products={products} />
              : <p className={styles.haccp_product_list_loading_message}>조회된 목록이 없습니다.</p>}

        </ListContainer>
        {/* 스크롤 끝 지점 관찰 겸용 로딩 스피너 */}
        <ObserverSpinner ref={endPointSpanRef}>
          {
            isError
              ? error.message
              : isFetching || isFetchingNextPage
                ? <ClipLoader className={styles.endPointSpan} size={65} color='#6697d6' />
                : null
          }
        </ObserverSpinner>
      </div>
    </section >
  );
}

export default HaccpPage;
