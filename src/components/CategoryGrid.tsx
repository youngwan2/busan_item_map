import styles from '@components/CategoryGrid.module.scss';

import CategoryGridCell from './CategoryGridCell';

/**ex classType 은 styles.haccp 와 같이 각 페이지에 적용할 클래스를 구분 할 떄 사용 */
interface PropsType {
  gridTitle: string;
  categoryName: string;
  categories: { name: string }[];
  classNames: { img: string; cell: string };
  onSetPrdkind: (name: string) => void;
}

export default function CategoryGrid({
  categoryName,
  categories,
  classNames,
  gridTitle,
  onSetPrdkind,
}: PropsType) {
  return (
    <section className={styles.category_container}>
      <h3 className={styles.category_title}>{gridTitle}</h3>
      <div className={`${styles.category_grid}`}>
        {categories.map((category) => (
          <CategoryGridCell
            key={category.name}
            classNames={classNames}
            categoryName={categoryName}
            name={category.name === '전체' ? '' : category.name}
            onSetPrdkind={onSetPrdkind}
          />
        ))}
      </div>
    </section>
  );
}
