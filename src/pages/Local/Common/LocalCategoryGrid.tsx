import { koreanProvinces as categories } from '@/data';
import styles from './LocalCategoryGrid.module.scss';

interface PropsType {
  categoryName: string;
  onSetPrdkind: (name: string) => void;
}
export default function LocalCategoryGrid({
  categoryName,
  onSetPrdkind,
}: PropsType) {
  return (
    <section className={styles.category_container}>
      <h3 className={styles.category_title}>지역</h3>
      <div className={`${styles.category_grid}`}>
        {categories.map((category) => (
          <button
            key={category.name}
            title={category.name}
            onClick={() => onSetPrdkind(category.name)}
            className={`${styles.category_grid_cell} ${category.name === categoryName ? styles.active : ''}`}
          >
            {category.name !== '' ? (
              <div className={styles.img_boundary}>
                <div
                  aria-label="추천품목 이미지"
                  className={`${styles.category_grid_cell_img}`}
                />
              </div>
            ) : null}

            <p aria-label="추천품목 이름">
              {category.name !== '' ? category.name : '전체'}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}
