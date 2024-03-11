import { useEffect, useState, useRef } from 'react';
import { RecipeType } from '../types/Recipe.types';
import styles from '../Recipe.module.scss';
import { Link } from 'react-router-dom';
import RecipeMessage from './RecipeMessage';

interface ResultType {
  recipes?: RecipeType[];
  meg: string;
}

function RecipeSearchResult({ recipes, meg }: ResultType) {
  const [visibleRecipes, setVisibleRecipes] = useState<RecipeType[]>([]);
  const [currentLength, setCurrentLength] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

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
          // 현재 조회 중인 레시피 총 갯수
          const currentLength = Number(sessionStorage.getItem('currentRecipes'));
          setCurrentLength(currentLength);

          // 다음으로 보여줄 레시피 길이를 설정
          const nextRecipes = recipes?.slice(currentLength, currentLength + 10);
          if (nextRecipes && nextRecipes.length > 0) {
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

  return (
    <>
      <h3 className={styles.undefined_meg}>{meg}</h3>
      <article ref={containerRef} className={styles.search_result_container}>
        {visibleRecipes.map((recipe) => (
          <Link to={`/recipe/${recipe.RCP_SEQ}`} key={recipe.RCP_SEQ}>
            <ul
              className={styles.recipe_main_item_con}
              style={{
                backgroundImage: `url(${recipe.ATT_FILE_NO_MAIN || '/not-image.png'})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            >
              <li className={styles.recipe_main_item}>
                <h3>{recipe.RCP_SEQ}</h3>
                <h3 className={styles.recipe_main_title}>{recipe.RCP_NM}</h3>
                <p className={styles.recipe_main_category}>{recipe.RCP_PAT2}</p>
              </li>
            </ul>
          </Link>
        ))}
        <br />
      </article>
      <aside>
        <RecipeMessage recipes={recipes} visibleRecipes={visibleRecipes} />
      </aside>
    </>
  );
}

export default RecipeSearchResult;
