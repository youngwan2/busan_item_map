import styles from './NotFound.module.css';

const NotFound = ({ message }: { message: string }) => {
  return (
    <section className={styles.container}>
      <h2>{message}</h2>
      <button
        onClick={() => {
          window.history.go(-1);
        }}
      >
        뒤로가기
      </button>
    </section>
  );
};

export default NotFound;
