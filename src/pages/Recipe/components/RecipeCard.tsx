import styles from '../Recipe.module.scss'
import { Link } from "react-router-dom";

import { type RecipeType } from "@/types/Recipe.types";
import { HiMagnifyingGlassCircle } from 'react-icons/hi2';




interface PropsType {
  recipe: RecipeType
}
export default function RecipeCard({ recipe }: PropsType) {
  const { RCP_SEQ, RCP_NA_TIP, ATT_FILE_NO_MAIN, RCP_NM, RCP_PAT2 } = recipe


  return (
    <div key={RCP_NA_TIP} className={styles.recipe_card_container}>
      <img
        loading='lazy'
        src={ATT_FILE_NO_MAIN || '/not-image.png'}
        alt={RCP_NM + '이미지'}
        className={styles.recipe_card_img}
      >
      </img>
     
      <div className={styles.recipe_card_summary}>
        <span>{RCP_SEQ}</span>
        <h3 className={styles.recipe_card_title}>{RCP_NM}</h3>
        <p className={styles.recipe_card_category}>{RCP_PAT2}</p>
        <Link  className={styles.recipe_link} to={`/recipe/${RCP_SEQ}`}><HiMagnifyingGlassCircle/> <p>레시피 상세</p></Link>
      </div>
      
    </div>
  )
}