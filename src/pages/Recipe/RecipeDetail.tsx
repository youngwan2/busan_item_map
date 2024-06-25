import styles from './RecipeDetail.module.scss';

import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

import RecipeNutrition from './components/RecipeNutrition';
import RecipeDetailNavigation from './components/RecipeDetailNavigation';
import BackMove from '@/components/BackMove';
import GuideMessage from '@/components/GuideMessage';
import RecipeContents from './components/RecipeContents';

import { RecipeInfoType, RecipeType } from '@/types/Recipe.types';
import { StorageType, getStoreage } from '@/utils/storage';
import LoadingSpinner from '@/components/Spinner/LoadingSpinner';

function RecipeDetail() {
  const detaildivRef = useRef<HTMLBaseElement>(null);
  const params = useParams();
  const [recipe, setRecipe] = useState<RecipeType>();
  const [recipes, setRecipes] = useState<RecipeType[]>([]);

  useEffect(() => {
    document.title = '레시피 상세조회 | FoodPicker';
  }, []);

  /** 사용자가 선택한 레시피 반환 */
  function extractRecipe(recipes: RecipeType[], recipe_id: string) {
    return recipes.filter((recipe) => recipe.RCP_SEQ === recipe_id)[0];
  }

  /** 레시피 업데이트 */
  function updateRecipeData(recipe_id: string = '0') {
    const recipeInfo: RecipeInfoType = getStoreage(
      StorageType.SESSION,
      'recipes',
    );
    const recipe = extractRecipe(recipeInfo.recipes, recipe_id);
    setRecipe(recipe);
    setRecipes(recipeInfo.recipes);
  }
  useEffect(() => {
    updateRecipeData(params.id);
  }, [params.id]);

  useEffect(() => {
    if (detaildivRef.current) {
      detaildivRef.current.scrollIntoView({ block: 'start' });
    }
  }, []);

  if (!recipe) return <LoadingSpinner />;

  return (
    <section className={styles.recipe_detail_container} ref={detaildivRef}>
      <GuideMessage
        path="/recipe"
        subPath={`/recipe`}
        mainName="조회서비스"
        subName="음식레시피"
        finalPathName={recipe.RCP_NM}
      />
      <h2 className={styles.recipe_detail_title}>레시피 디테일</h2>
      <BackMove />

      <div className={styles.recipe_detail_content_container}>
        <RecipeContents recipe={recipe} />
        <RecipeNutrition recipe={recipe} />
      </div>
      <RecipeDetailNavigation param={params.id} recipes={recipes} />
    </section>
  );
}

export default RecipeDetail;
