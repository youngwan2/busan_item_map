import styles from '@pages/Haccp/HaccpCategoryGrid.module.scss';
import { haccpProductCategories as categories } from '@/data';
import type { HaccpProductCategoryType } from '@/types/Haccp.types';

interface PropsType {
  categoryName: string;
  onSetPrdkind: (name: string) => void;
}

export default function HaccpCategoryGrid({
  categoryName,
  onSetPrdkind,
}: PropsType) {
  return (
    <section className={styles.haccp_category_container}>
      <h3 className={styles.haccp_category_title}>추천 품목</h3>
      <div className={`${styles.haccp_category_grid}`}>
        {categories.map((category: HaccpProductCategoryType) => (
          <button
            key={category.name}
            title={category.name}
            onClick={() => onSetPrdkind(category.name)}
            className={`${styles.haccp_category_grid_cell} ${category.name === categoryName ? styles.active : ''}`}
          >
            <div className={styles.img_boundary}>
              <div
                aria-label="추천품목 이미지"
                className={`${styles.haccp_category_grid_cell_img}`}
              />
            </div>
            <p aria-label="추천품목 이름">{category.name}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
