import styles from './PageError.module.scss'

interface PropsType {
  error?:string
  children: React.ReactNode
}
export default function PageError({ error,children }: PropsType) {

  function handleRepairPage(){
    window.location.reload()
  }

  function handleRedirectToHome(){
    window.location.replace('/')
  }
  return (
    <section className={styles.error_page_container} >
      <div className={styles.error_content_boundary}>
      <h2>앗! 예상치 못한 문제가 발생했어요!!</h2>
      <h3>{error}</h3>
      <p>{children}</p>

      <button onClick={handleRepairPage} className={styles.error_page_btn}>새로고침</button>
      <button onClick={handleRedirectToHome} className={styles.error_page_btn}>홈으로</button>
      </div>
    </section>
  )
}
