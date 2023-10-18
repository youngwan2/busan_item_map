import { RecipeType } from "../../type/RecipeType";
import styles from "../page/recipe/Recipe.module.css";
import { useNavigate, Link } from "react-router-dom";
interface ResultType {
  recipes?: RecipeType[];
  meg: string;
}

function RecipeSearchResult({ recipes, meg }: ResultType) {
  const navigate = useNavigate();
  return (
    <>
      <h3 className={styles.undefined_meg}>{meg}</h3>
      <article className={styles.search_result_container}>
        {recipes?.map((recipe) => {
          return (
            <Link to={`/food-recipe/detail/${recipe.RCP_SEQ}`} key={recipe.RCP_SEQ}>
              <ul
                className={styles.recipe_item_con}
                style={{
                  backgroundImage: `url(${recipe.ATT_FILE_NO_MAIN})`,
                  backgroundPosition: "center",
                }}
              >
                <li className={styles.recipe_main_item}>
                  <h3>{recipe.RCP_SEQ}</h3>
                  <h3 className={styles.recipe_main_title}>{recipe.RCP_NM}</h3>
                  <p className={styles.recipe_main_category}>
                    {recipe.RCP_PAT2}
                  </p>
                  <p className={styles.recipe_main_weight}>{recipe.INFO_WGT}</p>
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
