import styles from './Nutrition.module.scss';

import { useEffect, useState, SyntheticEvent, MouseEvent } from 'react';
import { useRecoilState } from 'recoil';
import useDefaultQuery from '../../hooks/useDefaultQuery';

import NutritionSearchForm from './components/NutritionSearchForm';
import NutritionPagination from './components/NutritionPagination';
import NutritionProductList from './components/NutritionProductList';
import GuideMessage from '../../components/GuideMessage';
import LoadViewCountModal from '@/components/Modal/LoadViewCountModal';

import { NutritionPageNumber } from '../../atom/NutritionsAtom';

import { toast } from 'react-toastify';
import ListContainer from '@/components/Common/Container';



const MIN_VIEW_COUNT = 20;
const Nutrition = () => {
  const [page, setPage] = useRecoilState(NutritionPageNumber);
  const [productName, setProductName] = useState('');

  useEffect(() => {
    document.title = '식품영양정보조회 | FoodPicker';
  }, []);

  const url = `/nutritions?search=${productName}&page=${page}`;
  const queryKey = ['nutrition', productName, page];

  const { data = [], error, isError, isFetching, isPending } = useDefaultQuery(queryKey, url);

  const { items: products, totalCount = 0 } = data
  const hasProducts = Array.isArray(products) && products.length > 0;

  const totalPage = Math.ceil(totalCount / MIN_VIEW_COUNT) || 1;

  /** 검색어 반환 */
  function getSearchValue(input: HTMLInputElement) {
    if (!(input instanceof HTMLInputElement)) return
    if (input.value.length <= 1) return false
    const searchProduct = input.value
    return searchProduct
  }

  /** action: 검색 Form 액션 */
  function searchAction(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    const input = e.currentTarget.childNodes[1] as HTMLInputElement
    const searchProductName = getSearchValue(input) || ''
    if (!searchProductName) return toast.error('2자 이상은 입력해주세요.')
    updateState(searchProductName, 1)
  }

  /** 버튼 검색 액션 */
  async function onSearch(e: MouseEvent<HTMLButtonElement>) {
    const input = e.currentTarget.previousElementSibling as HTMLInputElement
    const searchProductName = getSearchValue(input) || ''
    if (!searchProductName) return toast.error('2자 이상은 입력해주세요.')
    updateState(searchProductName, 1)
  }

  function updateState(productName: string, initialPage: number) {
    setProductName(productName)
    setPage(initialPage)

  }

  if (isError) return <p>{error?.message}</p>

  return (
    <section className={styles.nutrition_page_container}>
      <h2 className={styles.nutrition_page_title}>
        <strong>식품영양정보조회</strong>
      </h2>
      <div className={styles.nutrition_page_inner_boundary}>
        <GuideMessage
          stylesClassName={styles.page_path_guide_message}
          path="/nutrition"
          subPath=''
          mainName="조회 서비스"
          subName={`식품영양정보조회`}
          totalCount={totalCount}
        />
        <NutritionSearchForm action={searchAction} onSearch={onSearch} />
        <LoadViewCountModal type={true} totalProductCount={totalPage} currentProductCount={page} />
        <ListContainer container={'section'} className={`${styles.product_list_container}`}>
          <h2 className={styles.product_list_title}>식품영양정보 목록</h2>
          {isFetching
            ? <p className={styles.product_list_loading_message}>데이터를 조회중입니다.</p>
            : hasProducts
              ? <NutritionProductList products={products} />
              : <p className={styles.product_list_loading_message}>조회된 목록이 존재하지 않습니다.</p>}
        </ListContainer>
        <NutritionPagination totalPage={totalPage} />
      </div>
    </section>
  );
};

export default Nutrition;
