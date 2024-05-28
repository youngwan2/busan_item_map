import styles from './RecipeDetail.module.scss';

import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

import RecipeNutrition from './components/RecipeNutrition';
import NextRecipe from './components/RecipeButton';
import BackMove from '../../components/Common/BackMove';
import GuideMessage from '../../components/Common/GuideMessage';
import ReactSpinner from '../../components/UI/ReactSpinner';
import RecipeContents from './components/RecipeContents';

import { RecipeInfoType, RecipeType } from '@/types/Recipe.types';
import { StorageType, getStoreage } from '@/utils/storage';

function RecipeDetail() {
  const detaildivRef = useRef<HTMLBaseElement>(null);
  const params = useParams();
  const [recipe, setRecipe] = useState<RecipeType>();


  useEffect(() => {
    document.title = '레시피 상세조회 | FoodPicker';
  }, []);


  /** 사용자가 선택한 레시피 반환 */
  function extractRecipe(recipes: RecipeType[], recipe_id: string) {
    return recipes.filter(recipe => recipe.RCP_SEQ === recipe_id)[0]
  }

  /** 레시피 업데이트 */
  function updateRecipeData(recipe_id: string = '0') {
    const recipeInfo: RecipeInfoType = getStoreage(StorageType.SESSION, 'recipes')
    const recipe = extractRecipe(recipeInfo.recipes, recipe_id)
    setRecipe(recipe)

  }
  useEffect(() => {
    updateRecipeData(params.id)
  }, [params.id])


  useEffect(() => {
    if (detaildivRef.current) {
      detaildivRef.current.scrollIntoView({ block: 'start' });
    }
  }, []);

  if (!recipe) return <ReactSpinner />

  return (
    <section className={styles.recipe_detail} ref={detaildivRef}>
      <BackMove />
      <GuideMessage path='/recipe' mainName='조회서비스' subName='음식레시피' finalPathName={recipe.RCP_NM} />

      <RecipeContents recipe={recipe} />
      <RecipeNutrition recipe={recipe} />
      <NextRecipe param={params.id} />
    </section>
  );
}

export default RecipeDetail;
