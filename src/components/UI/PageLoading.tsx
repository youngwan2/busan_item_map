import styles from './PageLoading.module.css';

function PageLoading() {
  return (
    <img
      className={styles.img}
      src={'/loading.gif'}
      width={500}
      height={500}
      alt="페이지 로딩 이미지"
    />
  );
}

export default PageLoading;
