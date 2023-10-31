import { useEffect, useState, useRef } from "react";
import { RecipeType } from "../../type/RecipeType";
import styles from "../page/recipe/Recipe.module.scss";
import { Link } from "react-router-dom";

interface ResultType {
  recipes?: RecipeType[];
  meg: string;
}

function RecipeSearchResult({ recipes, meg }: ResultType) {
  const [visibleRecipes, setVisibleRecipes] = useState<RecipeType[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const loadingRef = useRef<HTMLDivElement | null>(null);

  const [loading,setLoading] = useState('')

  useEffect(() => {
    if (recipes) {
      setVisibleRecipes(recipes.slice(0, 10));
    }
  }, [recipes]);

  useEffect(() => {
    const container = containerRef.current;
    const loading = loadingRef.current;

    // 스크롤 처리 함수
    const handleScroll = () => {
      if (container && loading) {
        if (container.getBoundingClientRect().bottom <= window.innerHeight + 100) {
          const currentLength = visibleRecipes.length;
          const nextRecipes = recipes?.slice(currentLength, currentLength + 10);
          if (nextRecipes && nextRecipes.length > 0) {
            setVisibleRecipes((prevRecipes) => [...prevRecipes, ...nextRecipes]);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [recipes, visibleRecipes]);

  return (
    <>
      <h3 className={styles.undefined_meg}>{meg}</h3>
      <article ref={containerRef} className={styles.search_result_container}>
        {visibleRecipes.map((recipe) => (
          <Link to={`/food-recipe/detail/${recipe.RCP_SEQ}`} key={recipe.RCP_SEQ}>
            <ul
              className={styles.recipe_item_con}
              style={{
                backgroundImage: `url(${recipe.ATT_FILE_NO_MAIN || process.env.PUBLIC_URL + "/not-image.png"})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
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
        <div ref={loadingRef}>{loading}</div>
      </article>
    </>
  );
}

export default RecipeSearchResult;