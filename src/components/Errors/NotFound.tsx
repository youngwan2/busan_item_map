import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";
import { useEffect,useState } from "react";

const NotFound = () => {
  useEffect(() => {}, []);

  const [count, setCount] = useState(0)
  const navigate = useNavigate();
  return (
    <article className={styles.container}>
      <h2>
        죄송합니다. 일시적인 문제로 요청하신 경로의 페이지 불러오기가 실패하였습니다. 접속한 경로를 확인하시고 재시도 및 돌아가기를 클릭해주세요.
      </h2>
      <br />
      <p>{count} 번 시도중...</p>
      <br />
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        돌아가기
      </button>
      <button
        onClick={() => {
          setCount(oldCount => ++oldCount)
          const path = window.location.pathname;
          console.log(path);
          navigate(`${path}`);
          if(count >=3) {
            alert(`${count}번 시도하였으나 요청에 실패하였습니다. 루트 페이지로 이동합니다.`)
            navigate(`/`);
          }
        }}
      >
        재시도
      </button>
    </article>
  );
};

export default NotFound;
