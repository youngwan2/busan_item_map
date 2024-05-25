import styles from './Haccp.module.scss';

import { useEffect, useState, useRef, Suspense, type SyntheticEvent, type MouseEvent } from 'react';
import useIntersection from '../../hooks/useIntersection';
import { useInfiniteQuery } from '@tanstack/react-query';

import HaccpResult from './components/HaccpResult';
import HaccpSearchForm from './components/HaccpSearchForm';
import HaccpMessage from './components/HaccpMessage';
import GuideMessage from '../../components/Common/GuideMessage';
import ObserverSpinner from '../../components/Common/Spinner/ObserverSpinner';
import HaccpCategoryGrid from './components/HaccpCategoryGrid';
import { ClipLoader } from 'react-spinners';

import axios from 'axios';


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
      return Number(lastPage.body.pageNo) + 1 ?? undefined
    },
  })

  const totalCount = data?.pages[0].body.totalCount || 0
  const productInfo = data?.pages.map((page) => page.body.items) || []
  const products = productInfo?.flat(Infinity) // 중첩 배열 평탄화

  const { isEnd } = useIntersection(endPointSpanRef) // 스크롤의 끝지점에 도착했는지 관찰


  function onSetPrdkind(name: string) {
    setPrdkind(name)
  }

  function searchAction(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    const input = e.currentTarget.firstChild
    if (!(input instanceof HTMLInputElement)) return
    const searchProduct = input.value
    setProductName(searchProduct)
  }

  function onSearch(e:MouseEvent<HTMLButtonElement>){
    const input = e.currentTarget.previousElementSibling
    if (!(input instanceof HTMLInputElement)) return
    const searchProduct = input.value
    setProductName(searchProduct)

  }


  useEffect(() => {
    document.title = 'HACCP 제품 정보조회 | FoodPicker';
  }, []);

  useEffect(() => {
    if (isEnd && hasNextPage && totalCount>99) {
      setPageNo(old => old + 1)
      fetchNextPage()
    }
  }, [isEnd])


  return (
    <section className={styles.Haccp} ref={haccpContainerRef}>
      <h2 className={styles.haccp_page_title}>
        <p>HACCP제품 정보조회</p>
      </h2>
      <GuideMessage path='/haccp' mainName='조회서비스' subName='HACCP제품조회' />
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
        <HaccpCategoryGrid categoryName={prdkind} onSetPrdkind={onSetPrdkind}/>
        <br />
      </div>

      {/* 검색 결과 보이는 곳 */}
      <Suspense fallback={<span ref={endPointSpanRef}><ClipLoader className={styles.endPointSpan} size={65} color='#6697d6' /></span>}>
        <HaccpResult
          totalCount={totalCount}
          products={products}
        />
      </Suspense>

      {/* 스크롤 끝 지점 관찰 겸용 로딩 스피너 */}
      <ObserverSpinner ref={endPointSpanRef}>
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
}

export default HaccpPage;
