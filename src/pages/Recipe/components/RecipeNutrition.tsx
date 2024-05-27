import { RecipeType } from '@/types/Recipe.types';
import NutritionModal from './NutritionModal';
import styles from './RecipeNutrition.module.scss';
import { useState } from 'react';

function RecipeNutrition({ recipe }: { recipe: RecipeType }) {
  const [modalState, setModalState] = useState(false);
  return (
    <>
      <button
        className={styles.modal_btn}
        onClick={() => {
          setModalState(!modalState);
        }}
      >
        {modalState ? '닫기' : '영양성분표'}
      </button>
      <NutritionModal recipe={recipe} modalState={modalState}/>
     
    </>
  );
}
export default RecipeNutrition;
