import { useEffect, useState, useRef } from 'react';
import { RecipeType } from '../types/Recipe.types';
import styles from '../Recipe.module.scss';
import RecipeMessage from './RecipeMessage';
import RecipeCard from './RecipeCard';

interface ResultType {
  recipes?: RecipeType[];
  meg: string;
}

export default function RecipeList({ recipes, meg }: ResultType) {
  const [visibleRecipes, setVisibleRecipes] = useState<RecipeType[]>([]);
  const [currentLength, setCurrentLength] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const recipeCount = recipes ? recipes.length : 0;

  // 레시피 조회 초깃값 지정
  useEffect(() => {
    if (recipes) {
      setVisibleRecipes(recipes.slice(0, 10));
    }
  }, [recipes]);

  useEffect(() => {
    setCurrentLength(currentLength);
  }, [currentLength]);

  useEffect(() => {
    const container = containerRef.current;

    // 스크롤 처리 함수
    const handleScroll = () => {
      if (container) {
        if (container.getBoundingClientRect().bottom <= window.innerHeight + 100) {
          // 현재 조회 중인 레시피 
          const currentLength = Number(sessionStorage.getItem('currentRecipes'));
          setCurrentLength(currentLength);

          // 다음으로 보여줄 레시피 
          const nextRecipes = recipes?.slice(currentLength, currentLength + 10);
          const hasNextRecipe = nextRecipes && nextRecipes.length > 0
          if (hasNextRecipe) {
            setVisibleRecipes((prevRecipes) => [...prevRecipes, ...nextRecipes]);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    sessionStorage.setItem('currentRecipes', `${visibleRecipes.length}`);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [recipes, visibleRecipes, currentLength]);
  console.log(recipes)

  return (
    <>
      {recipeCount < 1 && <div className={styles.recipe_replace_back}></div>}
      <h3 className={styles.undefined_meg}>{meg}</h3>
      <article ref={containerRef} className={styles.search_result_container}>
        {visibleRecipes.map((recipe) => (
          <RecipeCard recipe={recipe} />
        ))}
        <br />
      </article>
      <RecipeMessage recipes={recipes} visibleRecipes={visibleRecipes} />
    </>
  );
}

