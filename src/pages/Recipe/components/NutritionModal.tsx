import styles from '@pages/Recipe/RecipeDetail.module.scss';

import { RecipeType } from '@/types/Recipe.types';

interface PropsType {
  recipe: RecipeType;
  modalState: boolean;
}
export default function NutritionModal({ recipe, modalState }: PropsType) {
  if (!recipe) return <></>;
  const { INFO_CAR, INFO_ENG, INFO_FAT, INFO_PRO, INFO_NA, INFO_WGT } = recipe;

  return (
    <div
      aria-label="영양성분표"
      aria-hidden={`${!modalState}`}
      className={`${styles.modal_con} ${modalState ? styles.active : ''}`}
    >
      <h3 className={styles.model_title}>영양성분표</h3>
      <hr />
      <ul>
        <li>
          <strong>중량(g)</strong>
          {INFO_WGT || '정보 없음'}
        </li>
        <li>
          <strong>열량(kcal)</strong>
          {INFO_ENG || '정보 없음'}
        </li>
        <li>
          <strong>탄수화물(g)</strong>
          {INFO_CAR || '정보 없음'}
        </li>
        <li>
          <strong>단백질(g)</strong>
          {INFO_PRO || '정보 없음'}
        </li>
        <li>
          <strong>지방(g)</strong>
          {INFO_FAT || '정보 없음'}
        </li>
        <li>
          <strong>나트륨(mg)</strong>
          {INFO_NA || '정보 없음'}
        </li>
      </ul>
    </div>
  );
}
