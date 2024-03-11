import styles from "./NotFound.module.css";

const NotFound = ({message}:{message:string}) => {
  return (
    <article className={styles.container}>
      <h2>
        {message}
      </h2>
      <button
        onClick={()=>{
          console.log(11)
          window.history.go(-1)
        }}
      >
        뒤로가기
      </button>
    </article>
  );
};

export default NotFound;
