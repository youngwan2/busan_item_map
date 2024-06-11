import styles from '@pages/Recipe/RecipeDetail.module.scss';

import { useState } from 'react';

import NutritionModal from './NutritionModal';

import { RecipeType } from '@/types/Recipe.types';

import { HiCalculator, HiXMark } from "react-icons/hi2";
import Button from '@/components/Common/Button';



function RecipeNutrition({ recipe }: { recipe: RecipeType }) {
  const [modalState, setModalState] = useState(false);
  return (
    <>
      <Button
        stylesClassName={styles.modal_btn}
        title={modalState? '닫기 버튼' :'영양성분 조회 버튼'}
        onClick={() => setModalState(old => !old)} >
        {modalState ? <HiXMark/> : <HiCalculator />}
      </Button>
      <NutritionModal recipe={recipe} modalState={modalState} />
    </>
  );
}
export default RecipeNutrition;
