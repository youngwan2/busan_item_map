import styles from '../LocalFood.module.scss';

const SidebarSearchBtn = ({ categorySearch }: { categorySearch: () => void }) => {
  return (
    <button className={styles.search_btn} onClick={categorySearch}>
      <img src={`/icon/search.svg`} alt="searchIcon" width={30} height={35} />
    </button>
  );
};

export default SidebarSearchBtn;
