import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './ReactSpinner.module.css';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function ReactSpinner() {
  return (
    <div className={styles.spinner} aria-label="로딩 스피너">
      <Button variant="primary" disabled>
        <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
        Loading...
      </Button>
    </div>
  );
}

export default ReactSpinner;
