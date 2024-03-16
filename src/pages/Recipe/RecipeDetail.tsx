import styles from './RecipeDetail.module.scss';
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { RecipeType } from './types/Recipe.types';
import RecipeNutrition from './components/RecipeNutrition';
import NextRecipe from './components/RecipeButton';
import BackMove from '../../components/Common/BackMove';
import GuideMessage from '../../components/Common/GuideMessage';
import ReactSpinner from '../../components/UI/ReactSpinner';
import useHeaderTheme from '../../hooks/useHeaderTheme';
import RecipeContents from './components/RecipeContents';

function RecipeDetail() {
  const detaildivRef = useRef<HTMLBaseElement>(null);
  const params = useParams();
  const [recipe, setRecipe] = useState<RecipeType>();

  const state = useAppSelector((state) => {
    sessionStorage.setItem('recipe', JSON.stringify({ recipes: state.recipe.value }));
    return state.recipe;
  }).value.filter((recipe) => {
    return recipe.RCP_SEQ === params.id;
  });

  useHeaderTheme()

  useEffect(() => {
    document.title = '레시피 상세조회 | FoodPicker';
  }, []);

  useEffect(() => {
    setRecipe(state[0]);
  }, [params]);

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
      <h2 className={styles.page_title}>{recipe.RCP_NM}</h2>
      <RecipeContents recipe={recipe} />
      <RecipeNutrition recipe={recipe} />
      <NextRecipe param={params.id} />
    </section>
  );
}

export default RecipeDetail;
