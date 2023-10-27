import { useEffect, useState } from "react";
import { RecipeType } from "../../type/RecipeType";
import styles from "../page/recipe/Recipe.module.scss";
import { Link } from "react-router-dom";
interface ResultType {
  recipes?: RecipeType[];
  meg: string;
  extraRecipeDataCount: number;
  setEndRecipeDataCheck: (count: number) => void;
}

function RecipeSearchResult({
  recipes,
  meg,
  extraRecipeDataCount,
  setEndRecipeDataCheck,
}: ResultType) {
  useEffect(() => {
    const count = recipes?.slice(0, extraRecipeDataCount).length as number||0;
    setEndRecipeDataCheck(count)
  }, [extraRecipeDataCount]);
  return (
    <>
      <h3 className={styles.undefined_meg}>{meg}</h3>
      <article className={styles.search_result_container}>
        {recipes?.slice(0, extraRecipeDataCount).map((recipe) => {
          return (
            <Link
              to={`/food-recipe/detail/${recipe.RCP_SEQ}`}
              key={recipe.RCP_SEQ}
            >
              <ul
                className={styles.recipe_item_con}
                style={{
                  backgroundImage: `url(${recipe.ATT_FILE_NO_MAIN||process.env.PUBLIC_URL+'/not-image.png'})`,
                  backgroundPosition: "center",
                  backgroundSize:"cover"
                }}
              >
                <li className={styles.recipe_main_item}>
                  <h3>{recipe.RCP_SEQ}</h3>
                  <h3 className={styles.recipe_main_title}>{recipe.RCP_NM}</h3>
                  <p className={styles.recipe_main_category}>
                    {recipe.RCP_PAT2}
                  </p>
                </li>
              </ul>
            </Link>
          );
        })}
      </article>
    </>
  );
}

export default RecipeSearchResult;
