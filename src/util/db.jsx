import axios from "axios";
import styles from "./db.module.css";
import { useEffect, useCallback, useState, useRef } from "react";
import DbSideMenu from "./dbSideMenu";
import ReactSpinner from "../components/UI/loading/ReactSpinner";

const Database = () => {
  const [getNutritions, setNutritions] = useState([]);
  const [itemKey, setItemKey] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [itemName, setItemName] = useState("");

  const itemRef = useRef(null);
  const inputRef = useRef(null);
  // 데이터베이스를 연결하고 초기 데이터를 셋팅
  const createDB = useCallback((data, itemName) => {
    const dbName = "nutritionDB";
    const request = indexedDB.open(dbName, 1);

    request.onerror = (error) => {
      console.error("데이터베이스 요청실패::", error);
    };

    // 데이터베이스 수정, 변경, 생성 등 요청 결과가 정상적으로 업데이트 되었다면 트리거
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      const objectStore = db.createObjectStore("nutritions", {
        keyPath: "id",
        autoIncrement: true,
      });

      // 인덱스 생성
      objectStore.createIndex("식품명", "식품명");
      // 데이터 추가 전 객체 저장소가 생성되었다면 oncomplete 이벤트가 트리거된다.
      objectStore.transaction.oncomplete = (event) => {
        const nutritionStore = db
          .transaction(["nutritions"], "readwrite")
          .objectStore("nutritions");

        const addData = data.forEach((item) => {
          nutritionStore.add(item);
        });

        addData?.addEventListener("success", (e) => {
          console.log("성공하면 인덱스 가져온다:", e.target.result);
        });
      };
    };

    /* 데이터베이스 연결이 성공했다면 onsuccess 가 트리거되면서 
    이후에 필요한 CURD 로직 실행이 가능하다. */
    request.onsuccess = (event) => {
      // 데이터 읽어오기
      const db = event.target.result;

      const nutritionStore = db
        .transaction(["nutritions"])
        .objectStore("nutritions");

      // 인덱스 기반 조회
      const index = nutritionStore.index("식품명");
      const itemsList = [];
      const itemsK = [];

      index.openCursor().onsuccess = (event) => {
        const cursor = event.target.result;
        if (itemName.length < 2) return;
        setIsLoading(true);
        if (cursor) {
          if (cursor.key.includes(itemName)) {
            const results = cursor.value;
            itemsList.push(results);
            itemsK.push({
              title: cursor.key,
              title2: results.식품기원명,
              id: results.id,
            });
          }
          cursor.continue();
        } else {
          setNutritions(itemsList);
          setItemKey(itemsK);
          setIsLoading(false);
        }
      };
    };
  }, []);

  useEffect(() => {
    axios.get(`/busan_item_map/Nutrition.json`).then((response) => {
      const data = response.data;
      createDB(data, itemName);
    });
  }, [createDB, itemName]);

  useEffect(() => {
    if (itemRef.current) {
      console.log(itemRef.current);
    }

    inputRef.current.focus();
  });

  return (
    <section className={styles.container}>
      <DbSideMenu itemsKey={itemKey} />
      {/* 아이템 검색창  */}
      <input
        style={{ padding: " 1px 9px", margin: "10px 0" }}
        ref={inputRef}
        type="text"
        placeholder="음식명을 입력해주세요!"
        onKeyUp={(e) => {
          if (e.code === "Enter") {
            setItemName(e.target.value);
            setTimeout(() => {
              e.target.value = "";
            }, 100);
          }
        }}
      />
      <button
        type="button"
        onClick={() => {
          setItemName(inputRef.current.value);
          setTimeout(() => {
            inputRef.current.value = "";
          }, 100);
        }}
      >
        검색
      </button>
      <h5 style={{ textAlign: "center", margin: "20px" }}>{itemName || ""}</h5>
      <span style={{ margin: "0.5rem 0", display: "inline-block" }}>
        총 검색 결과는 {getNutritions.length}개 입니다.
      </span>{" "}
      <br />
      {isLoading ? <ReactSpinner /> : ""}
      <br />
      {/* 아이템 검색 결과가 나오는 섹션 */}
      <section className={styles.item_section}>
        {Array.isArray(getNutritions) && getNutritions[0] !== undefined ? (
          getNutritions.map((item) => {
            return (
              <article key={item.id} className={styles.item_box} ref={itemRef}>
                <section id={`${item.id}`}>
                  <h4 className={styles.item_name}>{item.식품명}</h4>
                  <strong className={styles.sub_title}>일반정보</strong>
                  <>
                    <p>
                      <span>식품기원명</span>
                      {item.식품기원명 || "정보 없음"}
                    </p>
                    <p>
                      <span>출처명</span>
                      {item.출처명 || "정보 없음"}
                    </p>
                    <p>
                      <span>식품중량</span>
                      {item.식품중량 || "정보 없음"}
                    </p>
                    <p>
                      <span>데이터생성일자</span>
                      {item.데이터생성일자 || "정보 없음"}
                    </p>
                    <p>
                      <span>데이터기준일자</span>
                      {item.데이터기준일자 || "정보 없음"}
                    </p>
                    <p>
                      <span>영양성분함량기준량</span>
                      {item.영양성분함량기준량 || "정보 없음"}
                    </p>
                    <p>
                      <span>에너지(kcal)</span>
                      {item["에너지(kcal)"] || "정보 없음"}
                    </p>
                  </>
                </section>
                {/* 3대 영양소 */}
                <section>
                  <strong className={styles.sub_title}>3대 영양소</strong>
                  <>
                    <p>
                      <span>탄수화물(g)</span>
                      {item["탄수화물(g)"] || "정보 없음"}
                    </p>
                    <p>
                      <span>단백질(g)</span>
                      {item["단백질(g)"] || "정보 없음"}
                    </p>
                    <p>
                      <span>지방(g)</span>
                      {item["지방(g)"] || "정보 없음"}
                    </p>
                  </>
                </section>

                {/* 무기질 */}
                <section>
                  <strong className={styles.sub_title}>무기질</strong>
                  <>
                    <p>
                      <span>칼슘(mg)</span>
                      {item["칼슘(mg)"] || "정보 없음"}
                    </p>
                    <p>
                      <span>철(mg)</span>
                      {item["철(mg)"] || "정보 없음"}
                    </p>
                    <p>
                      <span>인(mg)</span>
                      {item["인(mg)"] || "정보 없음"}
                    </p>
                    <p>
                      <span>칼륨(mg)</span>
                      {item["칼륨(mg)"] || "정보 없음"}
                    </p>
                    <p>
                      <span>나트륨(mg)</span>
                      {item["나트륨(mg)"] || "정보 없음"}
                    </p>
                  </>
                </section>
                {/* 비타민 */}
                <section>
                  <strong className={styles.sub_title}>비타민</strong>
                  <>
                    <p>
                      <span>비타민A(μg RAE)</span>
                      {item["비타민 A(μg RAE)"] || "정보 없음"}
                    </p>
                  </>
                </section>
                {/* 기타 영양소 */}
                <section>
                  <strong className={styles.sub_title}>기타 영양소</strong>
                  <>
                    <p>
                      <span>당류(g)</span>
                      {item["당류(g)"] || "정보 없음"}
                    </p>
                    <p>
                      <span>식이섬유(g)</span>
                      {item["식이섬유(g)"] || "정보 없음"}
                    </p>
                  </>
                </section>
                {/* 그 외 성분 */}
                <section>
                  <strong className={styles.sub_title}>그 외 성분</strong>
                  <>
                    <p>
                      <span>레티놀(ug)</span>
                      {item["레티놀(μg)"] || "정보 없음"}
                    </p>
                    <p>
                      <span>베타카로틴(μg)</span>
                      {item["베타카로틴(μg)"] || "정보 없음"}
                    </p>
                    <p>
                      <span>티아민(mg)</span>
                      {item["티아민(mg)"] || "정보 없음"}
                    </p>
                    <p>
                      <span>리보플라빈(mg)</span>
                      {item["리보플라빈(mg)"] || "정보 없음"}
                    </p>
                    <p>
                      <span>콜레스테롤(mg)</span>
                      {item["콜레스테롤(mg)"] || "정보 없음"}
                    </p>
                    <p>
                      <span>포화지방산(g)</span>
                      {item["포화지방산(g)"] || "정보 없음"}
                    </p>
                    <p>
                      <span>트랜스지방산(g)</span>
                      {item["트랜스지방산(g)"] || "정보 없음"}
                    </p>
                  </>
                </section>
              </article>
            );
          })
        ) : (
          <div className={styles.message}>
            검색명이 포함된 모든 목록을 불러오므로 명확한 검색어를 입력
            바랍니다. 참고로, 조회된 각 목록을 클릭하면, 주요 영양소의
            일일권장섭취량을 시각적으로 확인할 수 있으니 이용 시 참고 바랍니다.
            <br />
            (알림- 데이터 시각화는 현재 준비중입니다.).
          </div>
        )}
      </section>
    </section>
  );
};
export default Database;
