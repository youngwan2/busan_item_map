import { ClockLoader } from 'react-spinners'
import styles from './LoadingSpinner.module.scss'

export default function LoadingSpinner() {
return (
  <div className={styles.loader_container}>
    <ClockLoader/>
    <p>데이터를 불러오는 중입니다 <span className={styles.dot}>.</span><span className={styles.dot}>.</span><span className={styles.dot}>.</span></p>
 
</div>
)}