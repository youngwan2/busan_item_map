import styles from "./NutritionDb.module.scss";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getNutritionDataFromDB } from "../../../store/slice/nutritionSearch";
import { useAppDispatch } from "../../../app/hooks";
import InfiniteScrollButton from "./InfiniteScrollButton";
import NutritionResult from "./NutritionList";

interface ResultType {
  getNutritions: any[];
  nextIndex: number;
}
const NutritionMessage = ({ getNutritions }: ResultType) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLBaseElement>(null);
  const [visibleNutritions, setVisibleNutritions] = useState<any[]>([]);
  const [hasNextPage, setHasNextPage] = useState(true);

  useEffect(() => {
    if (getNutritions) {
      const inititalData = getNutritions.slice(0, 10);
      setVisibleNutritions(inititalData);
    }
  }, [getNutritions]);

  function renderingHandler() {
    if (getNutritions && visibleNutritions.length > 0) {
      const length = visibleNutritions.length; // 현재 렌더링한 배열의 길이
      const nextPage = getNutritions.slice(length, length + 10); // 추가할 배열의 길이
      if (nextPage.length === 0) {
        setHasNextPage(false);
      }
      setVisibleNutritions((prev) => [...prev, ...nextPage]);
    }
  }
  return (
    <>
      <aside className={styles.result_msg}>
        <span
        >
          총: {getNutritions.length} <br /> 현재: {visibleNutritions.length}
        </span>
      </aside>
      <section className={styles.item_section} ref={containerRef}>
        {Array.isArray(getNutritions) && getNutritions[0] !== undefined ? (
          visibleNutritions.map((item, i) => {
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
                <NutritionResult item={item}></NutritionResult>
              </article>
            );
          })
        ) : (
          <div className={styles.message}>
            검색명이 포함된 모든 목록을 불러오므로 명확한 검색어를 입력
            바랍니다. 조회된 각 목록을 클릭하면, 세부 내용 페이지로 이동합니다.
            <br />
          </div>
        )}
      </section>
      <InfiniteScrollButton
        hasNextPage={hasNextPage}
        onAddPostRenderEvent={renderingHandler}
      />
    </>
  );
};

export default NutritionMessage;
