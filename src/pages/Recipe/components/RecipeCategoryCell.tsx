import { MouseEventHandler } from 'react';
import styles from '../RecipeCategoryGrid.module.scss';

interface PropsType {
  category: { id: number; name: string };
  pickCategoryName: string;
  onSearch: MouseEventHandler<HTMLButtonElement>;
}

export default function RecipeCategoryCell({
  category,
  pickCategoryName,
  onSearch,
}: PropsType) {
  return (
    <button
      key={category.id}
      title={category.name}
      onClick={onSearch}
      className={`
${styles.recipe_category_grid_cell} 
${category.name.length > 1 && category.name === pickCategoryName ? styles.active : ''}`}
    >
      <div className={styles.img_boundary}>
        <div
          aria-label="추천품목 이미지"
          className={`${category.name !== '' ? styles.recipe_category_grid_cell_img : ''}`}
        />
      </div>
      <p aria-label="추천품목 이름">{category.name}</p>
    </button>
  );
}
