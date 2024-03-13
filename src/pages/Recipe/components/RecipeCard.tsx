import { Link } from "react-router-dom";
import styles from '../Recipe.module.scss'
import { RecipeType } from "../types/Recipe.types";

interface PropsType {
    recipe: RecipeType
}
export default function RecipeCard({recipe}:PropsType){
    const {RCP_SEQ, RCP_NA_TIP, ATT_FILE_NO_MAIN, RCP_NM, RCP_PAT2} = recipe
    return (
        <Link to={`/recipe/${RCP_SEQ}`} key={RCP_NA_TIP}>
        <ul
          className={styles.recipe_main_item_con}
          style={{
            backgroundImage: `url(${ATT_FILE_NO_MAIN || '/not-image.png'})`,
            backgroundPosition: 'ceter',
            backgroundSize: 'cover',
          }}
        >
          <li className={styles.recipe_main_item}>
            <h3>{RCP_SEQ}</h3>
            <h3 className={styles.recipe_main_title}>{RCP_NM}</h3>
            <p className={styles.recipe_main_category}>{RCP_PAT2}</p>
          </li>
        </ul>
      </Link>
    )
}