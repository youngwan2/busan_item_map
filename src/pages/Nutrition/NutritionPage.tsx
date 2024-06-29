import styles from './Nutrition.module.scss';

import { useState, SyntheticEvent, MouseEvent, ChangeEvent } from 'react';
import useDefaultQuery from '../../hooks/useDefaultQuery';

import NutritionSearchForm from './components/NutritionSearchForm';
import NutritionProductList from './components/NutritionProductList';
import GuideMessage from '../../components/GuideMessage';
import LoadViewCountModal from '@/components/Modal/LoadViewCountModal';
import Pagination from '@/components/Pagination';
import ListContainer from '@/components/Common/Container';
import NutritionProductFilter from './components/Filter/NutritionProductFilter';

import { debounce } from '@/utils/helpers';
import PageError from '@/components/Errors/PageError';
import { Helmet } from 'react-helmet';
import {
  useNutritionKcalFilterStore,
  useNutritionPageStore,
} from '@/stores/NutritionStore';

interface KeywordType {
  companyName: string[];
  foodType: string[];
}

const MIN_VIEW_COUNT = 20;

export default function NutritionPage() {
  const { page, setPage } = useNutritionPageStore();
  const [productName, setProductName] = useState('');
  const [keywords, setKeywords] = useState<KeywordType>({
    companyName: [],
    foodType: [],
  });
  const { kcal } = useNutritionKcalFilterStore();

  const url = `/nutritions?name=${productName}&company_name=${keywords.companyName}&food_type=${keywords.foodType}&min_kcal=${kcal.min}&max_kcal=${kcal.max}&page=${page}`;
  const queryKey = ['nutrition', productName, keywords, kcal, page];
  const {
    data = [],
    error,
    isError,
    isFetching,
  } = useDefaultQuery(queryKey, url);
  const { items: products, totalCount = 0 } = data;
  const hasProducts = Array.isArray(products) && products.length > 0;
  const totalPage = Math.ceil(totalCount / MIN_VIEW_COUNT) || 1;

  /** 검색어 반환 */
  function getSearchValue(input: HTMLInputElement) {
    if (!(input instanceof HTMLInputElement)) return;
    if (input.value.length <= 1) return false;
    const searchProduct = input.value;
    return searchProduct;
  }

  /** action: 검색 Form 액션 */
  function searchAction(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const input = e.currentTarget.childNodes[1] as HTMLInputElement;
    const searchProductName = getSearchValue(input) || '';
    updateState(searchProductName, 1);
  }

  /** 검색어 초기화 */
  function onReset() {
    setProductName('');
  }

  /** 버튼 검색 액션 */
  async function onSearch(e: MouseEvent<HTMLButtonElement>) {
    const input = e.currentTarget.previousElementSibling as HTMLInputElement;
    const searchProductName = getSearchValue(input) || '';
    updateState(searchProductName, 1);
  }
  function updateState(productName: string, initialPage: number) {
    setProductName(productName);
    setPage(initialPage);
  }

  /** 가공/일반 필터 */
  function onChangeFoodTypeValue(e: ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    if (e.currentTarget.checked) {
      setKeywords((old) => ({ ...old, foodType: [...old.foodType, value] }));
    } else {
      setKeywords((old) => ({
        ...old,
        foodType: [...old.foodType.filter((type) => type !== value)],
      }));
    }
  }

  /** 상호명 필터 */
  const debounceKeywords = debounce(setKeywords, 1000);
  function onChangeRestaurantValue(e: ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    if (e.currentTarget.checked) {
      debounceKeywords((old: KeywordType) => ({
        ...old,
        companyName: [...old.companyName, value],
      }));
    } else {
      setKeywords((old: KeywordType) => ({
        ...old,
        companyName: [...old.companyName.filter((type) => type !== value)],
      }));
    }
  }

  /** 페이지네이션 */
  function onPageSwitch(page: number) {
    setPage(page);
  }

  if (isError && error) return <PageError>{error.message}</PageError>;

  return (
    <section className={styles.nutrition_page_container}>
      <Helmet>
        <meta charSet="utf-8" />
        <title> 식품영양정보조회 | FoodPicker</title>
        <meta
          name="description"
          content="우리가 즐겨먹는 음식의 영양정보를 조회할 수 있는 페이지 입니다."
        />
      </Helmet>
      <h2 className={styles.nutrition_page_title}>
        <strong>식품영양정보조회</strong>
      </h2>
      <div className={styles.nutrition_page_inner_boundary}>
        <GuideMessage
          stylesClassName={styles.page_path_guide_message}
          path="/nutrition"
          subPath=""
          mainName="조회 서비스"
          subName={`식품영양정보조회`}
          totalCount={totalCount}
        />
        <NutritionSearchForm
          action={searchAction}
          onSearch={onSearch}
          onReset={onReset}
        />
        <NutritionProductFilter
          onChangeFoodTypeValue={onChangeFoodTypeValue}
          onChangeRestaurantValue={onChangeRestaurantValue}
        />
        <LoadViewCountModal
          type={true}
          totalProductCount={totalPage}
          currentProductCount={page}
        />
        <ListContainer
          container={'section'}
          className={`${styles.product_list_container}`}
        >
          <h2 className={styles.product_list_title}>식품영양정보 목록</h2>
          {isFetching ? (
            <p className={styles.product_list_loading_message}>
              데이터를 조회중입니다.
            </p>
          ) : hasProducts ? (
            <NutritionProductList products={products} />
          ) : (
            <p className={styles.product_list_loading_message}>
              조회된 목록이 존재하지 않습니다.
            </p>
          )}
        </ListContainer>
        <Pagination
          totalPage={totalPage}
          page={page}
          onPageSwitch={onPageSwitch}
        />
      </div>
    </section>
  );
}
