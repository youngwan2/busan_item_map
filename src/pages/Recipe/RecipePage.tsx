import styles from './Recipe.module.scss';

import { useEffect, useState, useRef, SyntheticEvent, MouseEvent } from 'react';

import RecipeSearchForm from './components/RecipeSearchForm';
import RecipeList from './components/RecipeList';
import GuideMessage from '../../components/Common/GuideMessage';
import RecipeCategoryGrid from './components/RecipeCategoryGrid';
import Message from '@/components/Message';

import { ApiType, getDefaultFetcher } from '../../api/get.api';

import { type RecipeInfoType } from '@/types/Recipe.types';

import { HiInformationCircle } from "react-icons/hi2";
import { StorageType, getStoreage, setStoreage } from '@/utils/storage';


const API_KEY = import.meta.env.VITE_FOOD_KEY;

const INITIAL_RECIPE_INFO = {
  recipes: [],
  totalCount: '0'
}

export default function RecipePage() {

  const [pickedCategory, setPickedCategory] = useState('')
  const [productName, setProductName] = useState('')
  const [recipeInfo, setRecipeInfo] = useState<RecipeInfoType>(INITIAL_RECIPE_INFO);


  const sectionRef = useRef<HTMLBaseElement>(null);

  useEffect(() => {
    document.title = '레시피 정보조회 | FoodPicker';
  }, []);



  /** 검색어 반환 */
  function getSearchValue(input: HTMLInputElement) {
    if (!(input instanceof HTMLInputElement)) return
    const searchProduct = input.value
    return searchProduct
  }

  /** GET | 레시피 api 요청 
   * @param productName  요리명
   * @param category 요리 카테고리(ex. 밥, 일품, 후식, 국)
  */
  async function getFetchRecipeData<T extends string>(productName?: T, category?: T) {
    const url =
      category && category !== ''
        ? `https://openapi.foodsafetykorea.go.kr/api/${API_KEY}/COOKRCP01/json/1/200/RCP_PAT2=${category}`
        : `https://openapi.foodsafetykorea.go.kr/api/${API_KEY}/COOKRCP01/json/1/200/RCP_NM=${productName}`
    const { row: recipes = [], total_count: totalCount = '0' } = (await getDefaultFetcher(url, ApiType.EXTERNAL)).COOKRCP01

    return { recipes, totalCount }

  }

  async function onSearchByCategory(pickedName: string) {
    if (pickedName === '') {
      setPickedCategory('')
      setRecipeInfo(INITIAL_RECIPE_INFO)
      return
    }
    const { recipes, totalCount } = await getFetchRecipeData(undefined, pickedName)

    setPickedCategory(pickedName)
    setRecipeInfo({ totalCount, recipes })
    setStoreage({ type: StorageType.SESSION, key: 'recipes', value: { recipes, totalCount } })

  }

  /** Form Action | 폼 검색 액션  */
  async function searchAction(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    const input = e.currentTarget.childNodes[1] as HTMLInputElement
    const productName = getSearchValue(input) || ''
    const { totalCount, recipes } = await getFetchRecipeData(productName)

    setProductName(productName)
    setRecipeInfo({ totalCount, recipes })
    setStoreage({ type: StorageType.SESSION, key: 'recipes', value: { recipes, totalCount } })
  }

  /** 버튼 검색 액션 */
  async function onSearch(e: MouseEvent<HTMLButtonElement>) {
    const input = e.currentTarget.previousElementSibling as HTMLInputElement
    const productName = getSearchValue(input) || ''
    const { totalCount, recipes } = await getFetchRecipeData(productName)

    setProductName(productName)
    setRecipeInfo({ totalCount, recipes })
    setStoreage({ type: StorageType.SESSION, key: 'recipes', value: { recipes, totalCount } })
  }

  /** 조회된 레시피가 없는 경우 캐시처리 된 레시피로 업데이트 */
  function updateRecipeData() {
    const recipeInfo: RecipeInfoType = getStoreage(StorageType.SESSION, 'recipes')
    setRecipeInfo(recipeInfo)

  }
  useEffect(() => {
    if(recipeInfo.recipes.length<1) updateRecipeData()
  }, [])


  useEffect(() => {
    getStoreage(StorageType.SESSION, 'recipes')

  }, [])

  const recipeCount = Number(recipeInfo.totalCount)
  return (
    <section className={styles.recipe_page_container} ref={sectionRef}>
      <h2 className={styles.page_title}>음식 레시피</h2>
      <GuideMessage path='/recipe' subPath='/recipe' mainName='조회서비스' subName='간단 레시피' totalCount={recipeCount} />
      <RecipeSearchForm action={searchAction} onSearch={onSearch} />
      <Message>
        {
          <>
            <HiInformationCircle />
            <p><mark>검색</mark>과 <mark>분류</mark>는 따로 동작 합니다.</p>
          </>
        }
      </Message>

      <RecipeCategoryGrid onSearch={onSearchByCategory} categoryName={pickedCategory} />

      <RecipeList recipes={recipeInfo.recipes} totalCount={Number(recipeInfo?.totalCount) || 0} category={pickedCategory} searchValue={productName} />
    </section>
  );
}

