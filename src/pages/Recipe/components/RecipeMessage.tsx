import styles from '../Recipe.module.scss';

import { useState } from 'react';

import { RecipeType } from '@/types/Recipe.types';

interface PropsType {
  recipes?: RecipeType[];
  visibleRecipes?: RecipeType[];
}

function RecipeMessage({ recipes, visibleRecipes }: PropsType) {
  const [messageSpanDisplay, setMessageSpanDisplay] = useState(true);

  return (
    <article
      className={styles.message_container}
      style={
        !messageSpanDisplay
          ? { maxWidth: '30px', maxHeight: '40px' }
          : { maxWidth: '240px', maxHeight: '40px' }
      }
    >
      <button
        style={
          !messageSpanDisplay
            ? { transform: 'rotate(0)' }
            : { transform: 'rotate(-180deg)' }
        }
        onClick={() => {
          setMessageSpanDisplay(!messageSpanDisplay);
        }}
      >
        {'←'}
      </button>
      <span
        className={styles.message}
        style={
          !messageSpanDisplay
            ? {
                visibility: 'hidden',
                opacity: 0,
                transform: 'translateX(5px)',
              }
            : {
                visibility: 'visible',
                opacity: 1,
                transform: 'translateX(0)',
              }
        }
      >
        {recipes?.length}개 중 {visibleRecipes?.length}개 레시피 조회중..
      </span>
    </article>
  );
}

export default RecipeMessage;
