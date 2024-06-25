import styles from '../RecipeCategoryGrid.module.scss';

import RecipeCategoryCell from './RecipeCategoryCell';

import { recipeCategories as categories } from '@/data';

interface PropsType {
  categoryName: string;
  onSearch: (name: string) => void;
}

export default function RecipeCategoryGrid({
  categoryName,
  onSearch,
}: PropsType) {
  return (
    <section className={styles.recipe_category_container}>
      <h3 className={styles.recipe_category_title}>분류</h3>
      <div className={`${styles.recipe_category_grid}`}>
        {categories.map((category) => (
          <RecipeCategoryCell
            category={category}
            pickCategoryName={categoryName}
            onSearch={() => onSearch(category.name)}
          />
        ))}
      </div>
    </section>
  );
}
