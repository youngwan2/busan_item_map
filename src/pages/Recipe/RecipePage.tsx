import styles from './Recipe.module.scss';

import { useEffect, useState, useRef, SyntheticEvent, MouseEvent } from 'react';

import RecipeSearchForm from './components/RecipeSearchForm';
import RecipeList from './components/RecipeList';
import GuideMessage from '../../components/GuideMessage';
import RecipeCategoryGrid from './components/RecipeCategoryGrid';

import { ApiType, getDefaultFetcher } from '../../api/get.api';

import { type RecipeInfoType } from '@/types/Recipe.types';

import { StorageType, getStoreage, setStoreage } from '@/utils/storage';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const API_KEY = import.meta.env.VITE_FOOD_KEY;

const INITIAL_RECIPE_INFO = {
  recipes: [],
  totalCount: '0',
};

export default function RecipePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [pickedCategory, setPickedCategory] = useState('');
  const [productName, setProductName] = useState('');
  const [recipeInfo, setRecipeInfo] =
    useState<RecipeInfoType>(INITIAL_RECIPE_INFO);

  const sectionRef = useRef<HTMLBaseElement>(null);

  useEffect(() => {
    document.title = '레시피 정보조회 | FoodPicker';
  }, []);

  /** GET | 레시피 api 요청
   * @param productName  요리명
   * @param category 요리 카테고리(ex. 밥, 일품, 후식, 국)
   */
  async function getFetchRecipeData<T extends string>(
    productName?: T,
    category?: T,
  ) {
    setIsLoading(true);
    const recipeName =
      !category && !productName ? '' : `/RCP_NM=${productName}`;
    const url = category
      ? `https://openapi.foodsafetykorea.go.kr/api/${API_KEY}/COOKRCP01/json/1/200/RCP_PAT2=${category}`
      : `https://openapi.foodsafetykorea.go.kr/api/${API_KEY}/COOKRCP01/json/1/200` +
        recipeName;
    const { row: recipes = [], total_count: totalCount = '0' } = (
      await getDefaultFetcher(url, ApiType.EXTERNAL)
    ).COOKRCP01;
    setIsLoading(false);
    return { recipes, totalCount };
  }

  async function onSearchByCategory(pickedName: string) {
    const pickCategory = pickedName === '전체' ? undefined : pickedName;
    const { recipes, totalCount } = await getFetchRecipeData(
      undefined,
      pickCategory,
    );
    setPickedCategory(pickedName);
    setRecipeInfo({ totalCount, recipes });
    setStoreage({
      type: StorageType.SESSION,
      key: 'recipes',
      value: { recipes, totalCount },
    });
  }

  /** 검색어 반환 */
  function getSearchValue(input: HTMLInputElement) {
    if (!(input instanceof HTMLInputElement)) return;
    if (input.value.length <= 1) return false;
    const searchProduct = input.value;
    return searchProduct;
  }

  /** Form Action | 폼 검색 액션  */
  async function searchAction(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const input = e.currentTarget.childNodes[1] as HTMLInputElement;
    const productName = getSearchValue(input) || '';
    if (!productName) return toast.error('2자 이상은 입력해주세요.');
    const { totalCount, recipes } = await getFetchRecipeData(productName);

    setProductName(productName);
    setRecipeInfo({ totalCount, recipes });
    setStoreage({
      type: StorageType.SESSION,
      key: 'recipes',
      value: { recipes, totalCount },
    });
  }

  /** 검색 초기화 */
  function onReset() {
    setProductName('');
  }

  /** 버튼 검색 액션 */
  async function onSearch(e: MouseEvent<HTMLButtonElement>) {
    const input = e.currentTarget.previousElementSibling as HTMLInputElement;
    const productName = getSearchValue(input) || '';
    if (!productName) return toast.error('2자 이상은 입력해주세요.');
    const { totalCount, recipes } = await getFetchRecipeData(productName);

    setProductName(productName);
    setRecipeInfo({ totalCount, recipes });
    setStoreage({
      type: StorageType.SESSION,
      key: 'recipes',
      value: { recipes, totalCount },
    });
  }

  /** 조회된 레시피가 없는 경우 캐시처리 된 레시피로 업데이트 */
  function updateRecipeData() {
    const recipeInfo: RecipeInfoType = getStoreage(
      StorageType.SESSION,
      'recipes',
    );
    setRecipeInfo(recipeInfo);
  }
  useEffect(() => {
    if (recipeInfo.recipes.length < 1) updateRecipeData();
  }, []);

  const recipeCount = Number(recipeInfo.totalCount);
  return (
    <section className={styles.recipe_page_container} ref={sectionRef}>
      <Helmet>
        <meta charSet="utf-8" />
        <title> 음식 레시피 | FoodPicker</title>
        <meta
          name="description"
          content="간단하게 만들어 먹을 수 있는 다양한 레시지 정보를 조회할 수 있는 페이지 입니다."
        />
      </Helmet>
      <h2 className={styles.page_title}>음식 레시피</h2>
      <div className={styles.recipe_page_inner_boundary}>
        <GuideMessage
          stylesClassName={styles.page_path_guide_message}
          path="/recipe"
          subPath="/recipe"
          mainName="조회서비스"
          subName="간단 레시피"
          totalCount={recipeCount}
        />
        <RecipeSearchForm
          action={searchAction}
          onSearch={onSearch}
          onReset={onReset}
        />
        <RecipeCategoryGrid
          onSearch={onSearchByCategory}
          categoryName={pickedCategory}
        />
        <RecipeList
          isLoading={isLoading}
          recipes={recipeInfo.recipes}
          totalCount={Number(recipeInfo?.totalCount) || 0}
          category={pickedCategory}
          searchValue={productName}
        />
      </div>
    </section>
  );
}
