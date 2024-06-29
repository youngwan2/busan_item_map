import styles from '@components/CategoryGrid.module.scss';

interface PropsType {
  classNames: { img: string; cell: string };
  name: string;
  categoryName: string;
  onSetPrdkind: (name: string) => void;
}

export default function CategoryGridCell({
  classNames,
  name,
  onSetPrdkind,
  categoryName,
}: PropsType) {
  const searchName = name === '전체' ? '' : name;
  console.log(categoryName, searchName, name);
  return (
    <button
      key={name}
      title={name}
      onClick={() => onSetPrdkind(searchName)}
      className={`${styles[classNames.cell]} ${styles.category_grid_cell} ${name === categoryName ? styles.active : ''}`}
    >
      <div className={` ${styles.img_boundary}`}>
        <div
          aria-label="분류 이미지"
          className={`${styles[classNames.img]} ${styles.category_grid_cell_img}`}
        />
      </div>
      <p aria-label="분류이름">{name}</p>
    </button>
  );
}
