import styles from '../Recipe.module.scss';
import { Link } from 'react-router-dom';

import { type RecipeType } from '@/types/Recipe.types';

interface PropsType {
  recipe: RecipeType;
}
export default function RecipeCard({ recipe }: PropsType) {
  const { RCP_SEQ, RCP_NA_TIP, RCP_NM } = recipe;

  return (
    <div key={RCP_NA_TIP} className={styles.recipe_card_container}>
      <img
        title={RCP_NM}
        loading="lazy"
        src={
          recipe.MANUAL_IMG06 ||
          recipe.MANUAL_IMG05 ||
          recipe.MANUAL_IMG04 ||
          recipe.MANUAL_IMG03 ||
          '/not-image.png'
        }
        alt={RCP_NM + '이미지'}
        className={styles.recipe_card_img}
      ></img>

      <h3
        title={`${RCP_NM} 레시피 보러가기`}
        className={styles.recipe_card_title}
      >
        <Link className={styles.recipe_link} to={`/recipe/${RCP_SEQ}`}>
          {RCP_NM}
        </Link>
      </h3>
    </div>
  );
}
