import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './ReactSpinner.module.css';

function ReactSpinner() {
  return (
    <div className={styles.spinner} aria-label="로딩 스피너">
      "로딩중입니다.."
    </div>
  );
}

export default ReactSpinner;
