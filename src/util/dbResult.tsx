import styles from "./db.module.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import SearchResult from "../components/module/SearchResult";
import { getNutritionDataFromDB } from "../app/slice/nutritionSearch";
import { useAppDispatch } from "../app/hooks";


interface ResultType {
    getNutritions:any[]
    nextIndex:number
}
function DbResult({ getNutritions, nextIndex }:ResultType) {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLBaseElement>(null);
  return (
    <section className={styles.item_section} ref={containerRef}>
      {Array.isArray(getNutritions) && getNutritions[0] !== undefined ? (
        getNutritions.slice(0, nextIndex + 4).map((item, i) => {
          return (
            <article
              id={item.id}
              key={item.id}
              className={styles.item_box}
              onClick={() => {
                navigate(`/nutrition/${item.id}`);
                dispatch(getNutritionDataFromDB(getNutritions[i]));
              }}
            >
              <SearchResult item={item}></SearchResult>
            </article>
          );
        })
      ) : (
        <div className={styles.message}>
          검색명이 포함된 모든 목록을 불러오므로 명확한 검색어를 입력 바랍니다.
          조회된 각 목록을 클릭하면, 세부 내용 페이지로 이동합니다.
          <br />
        </div>
      )}
    </section>
  );
}

export default DbResult;
