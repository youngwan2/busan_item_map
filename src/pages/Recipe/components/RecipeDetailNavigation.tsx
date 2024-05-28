import styles from '../RecipeDetail.module.scss';

import { useRef } from 'react';
import useIntersection from '@/hooks/useIntersection';

import Button from '@/components/Common/Button';

import { Link } from 'react-router-dom';

import { RecipeType } from '@/types/Recipe.types';
import LoadingSpinner from '@/components/Common/Spinner/LoadingSpinner';


interface PropsType {
  param?: string;
  recipes: RecipeType[]
}
export default function RecipeDetailNavigation({ param, recipes = [] }: PropsType) {

  const buttonContainerRef = useRef<HTMLDivElement>(null);
  const { isEnd } = useIntersection(buttonContainerRef)


  // 현재 레시피의 인덱스 반환
  const currentIndex = recipes.findIndex((recipe) => {
    return recipe.RCP_SEQ === param;
  });

  // 레시피 목록의 마지막 인덱스 반환
  const lastIndex = recipes.length - 1;

  // 현재 레시피의 이전/다음 레시피
  const prevRecipe = recipes[currentIndex - 1]||[];
  const nextRecipe = recipes[currentIndex + 1]||[];

  const hasPrevRecipe = currentIndex >= 1
  const hasNextRecipe = currentIndex !== lastIndex

  if(!prevRecipe || !nextRecipe) return <LoadingSpinner/>
  return (
    <div >
      <h2 className={styles.recipe_navigation_title}>다른 레시피</h2>
      <div className={`${isEnd ? styles.active : ''} ${styles.recipe_navigation_container}`} ref={buttonContainerRef} >
        <Button
          disabled={!hasPrevRecipe}
          title={prevRecipe?.RCP_NM||''}
          stylesClassName={`${!hasPrevRecipe ? '' : styles.active} ${styles.recipe_detail_prev_btn}`}
        >
          { hasPrevRecipe
            ?
            <Link className={styles.link} to={`/recipe/${prevRecipe?.RCP_SEQ}`}>
              <h4 className={styles.link_title}>{prevRecipe.RCP_NM}</h4>
              <img width={260} height={200} loading='lazy' src={`${prevRecipe.ATT_FILE_NO_MAIN}`} alt={prevRecipe.RCP_NM} />
            </Link>
            : null}
        </Button>

        <Button
          disabled={!hasNextRecipe}
          title={nextRecipe.RCP_NM}
          stylesClassName={`${!hasNextRecipe ? '' : styles.active} ${styles.recipe_detail_next_btn}`}
        >
          {hasNextRecipe
            ?
            <Link className={styles.link} to={`/recipe/${nextRecipe?.RCP_SEQ}`}>
              <h4 className={styles.link_title}>{nextRecipe.RCP_NM}</h4>
              <img width={260} height={200} loading='lazy' src={`${nextRecipe.ATT_FILE_NO_MAIN}`} alt={nextRecipe.RCP_NM + '이미지'} />

            </Link>
            : null}
        </Button>
      </div>
    </div>
  );
}

