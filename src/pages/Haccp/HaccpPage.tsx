import styles from './Haccp.module.scss';
import { useEffect, useState, useCallback, useRef, Suspense, SyntheticEvent } from 'react';
import HaccpModal from './components/HaccpModal';
import HaccpResult from './components/HaccpResult';
import HaccpSearchForm from './components/HaccpSearchForm';
import { FilterItemType, ItemsType } from './types/Haccp.types';
import HaccpMessage from './components/HaccpMessage';
import { ApiType, getDefaultFetcher } from '../../api/get.api';
import { toast } from 'react-toastify';
import GuideMessage from '../../components/Common/GuideMessage';

function HaccpPage() {
  const [productName, setProductName] = useState(''); // 상품 이름
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<ItemsType[]>()
  const [filterItem, setFilterItem] = useState<FilterItemType>(); // 사용자가 선택한 아이템
  const [modal, setModal] = useState(false);
  const [productId, setProductId] = useState('');
  const haccpContainerRef = useRef<HTMLBaseElement>(null);

  const getHaccpItemListFromOpanApi = async (productName: string) => {
    setLoading(true);
    const url = `https://apis.data.go.kr/B553748/CertImgListServiceV2/getCertImgListServiceV2?ServiceKey=${import.meta.env.VITE_PUBLIC_KEY}&returnType=json&prdlstNm=${productName}&numOfRows=100`;
    const data = await getDefaultFetcher(url, ApiType.EXTERNAL)
    const { items } = data.body;
    console.log(items)

    if (!items) { toast.error('조회된 제품이 존재하지 않습니다.'); return setProductName(''); }
    setProducts(items);
    toast.success('제품조회에 성공 하였습니다.')
    setLoading(false);
    setProductName('');
  };

  // 사용자가 선택한 상품의 일련번호와 일치하는 상품만 필터링한다.
  const filter = useCallback(
    (productId: string) => {
      const result = products?.find((item) => {
        return item.item.prdlstReportNo === productId;
      });

      if (!result) return
      const item = result.item
      setFilterItem(item);
    },
    [products],
  );

  function search() {
    getHaccpItemListFromOpanApi(productName);
    sessionStorage.setItem('currentHccp', `${0}`);
  }

  function searchAction(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    const input = e.currentTarget.firstChild
    if (!(input instanceof HTMLInputElement)) return
    const searchProduct = input.value
    setProductName(searchProduct)
    search()
  }

  useEffect(() => {
    document.title = 'HACCP 제품 정보조회 | FoodPicker';
  }, []);

  useEffect(() => {
    if (productId) filter(productId);
  }, [productId, filter]);

  return (
    <section className={styles.Haccp} ref={haccpContainerRef}>
      <h2 style={{ textAlign: 'center', margin: '6rem 0' }} className={styles.haccp_page_title}>
        <p>HACCP제품 정보조회</p>
      </h2>
      <GuideMessage path='/haccp' mainName='조회서비스' subName='HACCP제품조회' />
      <div className={styles.haccp_inner_container}>
        {/* 검색창 */}
        <HaccpSearchForm
          loading={loading}
          search={search}
          searchAction={searchAction}
          productName={productName}
        />
        {/* 잠깐 알고가기 */}
        <HaccpMessage />
        <br />
      </div>

      {/* 검색 결과 보이는 곳 */}
      <Suspense fallback={<h2>결과를 가져오는 중입니다.</h2>}>
        <HaccpResult
          items={products}
          setModal={setModal}
          setProductId={setProductId}
        />
        <HaccpModal filterItem={filterItem} setModal={setModal} modal={modal}></HaccpModal>
      </Suspense>
    </section>
  );
}

export default HaccpPage;
