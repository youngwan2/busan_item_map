import styles from '../Recipe.module.scss';

import { useEffect, useState, useRef } from 'react';
import useIntersection from '@/hooks/useIntersection';

import RecipeMessage from './RecipeMessage';
import RecipeCard from './RecipeCard';
import ObserverSpinner from '@/components/Common/Spinner/ObserverSpinner';

import type { RecipeType } from '@/types/Recipe.types';

import { toast } from 'react-toastify';


interface ResultType {
  recipes: RecipeType[];
  totalCount: number
  category: string
  searchValue: string
}
// const SPLIT_ITEM_COUNT = 10
export default function RecipeList({ recipes = [], totalCount, searchValue, category }: ResultType) {
  const [visibleRecipes, setVisibleRecipes] = useState<RecipeType[]>([]);

  const observerRef = useRef<HTMLSpanElement>(null)

  const { isEnd } = useIntersection(observerRef)

  const hasMoreRecipe = (totalCount>0 && totalCount === visibleRecipes.length)

  // 스크롤 처리 함수
  const handleScroll = (currentLength: number) => {
    if (isEnd && hasMoreRecipe) return toast.info('모든 데이터를 조회하였습니다.')

    if (isEnd && (totalCount > visibleRecipes.length)) {

      // 다음으로 보여줄 레시피가 있는가? 
      // console.log("정상처리 관찰용:",currentLength, currentLength+10)
      const nextRecipes = recipes?.slice(currentLength, currentLength + 10);
      const hasNextRecipe = nextRecipes && nextRecipes.length > 0

      // 있다면 기존 레시피에서 추가된 10개의 레시피를 추가하고, 총 갯수 캐시 갱신
      if (hasNextRecipe) {
        setVisibleRecipes((prevRecipes) => [...prevRecipes, ...nextRecipes]);

      }
    }
  };


  useEffect(() => {
    const currentLength = Number(sessionStorage.getItem('currentRecipes'));
    handleScroll(currentLength)

  }, [isEnd]);

  // 초기화
  useEffect(() => {
    setVisibleRecipes([])
    sessionStorage.setItem('currentRecipes', `0`)

  }, [searchValue, category])

  useEffect(() => {
    sessionStorage.setItem('currentRecipes', `${visibleRecipes.length}`);
  }, [visibleRecipes.length, isEnd])

  return (
    <>
      <div className={styles.recipe_list_container}>
        <h2 className={styles.recipe_list_title}>레시피 목록</h2>

        {visibleRecipes.map((recipe) => (
          <RecipeCard key={recipe.RCP_SEQ} recipe={recipe} />
        ))}
      </div>
      <RecipeMessage recipes={recipes} visibleRecipes={visibleRecipes} />
      <ObserverSpinner ref={observerRef}>  </ObserverSpinner>
    </>
  );
}

