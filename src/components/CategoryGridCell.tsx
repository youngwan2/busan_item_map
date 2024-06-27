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
  return (
    <button
      key={name}
      title={name}
      onClick={() => onSetPrdkind(name)}
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
