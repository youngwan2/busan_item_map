import axios from "axios";
import styles from "./db.module.css";
import { useEffect, useCallback, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { getNutritionDataFromDB } from "../app/slice/nutritionSearch";
import DbSideMenu from "./dbSideMenu";
import SearchResult from "../components/module/SearchResult";
import ReactSpinner from "../components/UI/loading/ReactSpinner";

const Database = () => {
  const [getNutritions, setNutritions] = useState([]); //조회된 영양 정보 저장
  const [nextIndex, setNextIndex] = useState(0); //
  const [itemKey, setItemKey] = useState([]); // 선택한 item의 키를 저장
  const [isLoading, setIsLoading] = useState(false); // 영양정보 렌더링 로딩 상태
  const [itemName, setItemName] = useState("");

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const addBtnRef = useRef(null);

  // 데이터베이스를 연결하고 초기 데이터를 셋팅
  const createDB = useCallback((data, itemName) => {
    const dbName = "nutritionDB"; // 데이터베이스 이름
    const request = indexedDB.open(dbName, 1); // 데이터베이스를 1버전으로 오픈

    // 데이터베이스 연결 요청 실패 시 에러를 띄운다.
    request.onerror = (error) => {
      console.error("데이터베이스 요청실패::", error);
    };

    // 데이터베이스 수정, 변경, 생성 등 요청 결과가 정상적으로 업데이트 되었다면 트리거
    request.onupgradeneeded = (e) => {
      const db = e.target.result; // 데이버베이스를 참조하는 인스턴스가 담긴다.
      // 관계형으로 따지면 테이블을 생성하는 부분
      const objectStore = db.createObjectStore("nutritions", {
        keyPath: "id", //-- 기본키를 id 로 지정
        autoIncrement: true, // -- 데이터 추가시 기본키를 자동 증가 시킴
      });

      // 인덱스 생성(식품명 입력하면 해당 식품명을 인덱스로 하여 빠르게 데이터를 조회)
      objectStore.createIndex("식품명", "식품명");
      // 데이터 추가 전 객체 저장소가 생성되었다면 oncomplete 이벤트가 트리거된다.
      // 즉, 객체 저장소에 대한 트랜잭션(연산) 성공 시 실행된다.
      objectStore.transaction.oncomplete = (event) => {
        // 해당 객체저장소에 대한 읽기 쓰기에 관한 트랜잭션을 허용
        const nutritionStore = db
          .transaction(["nutritions"], "readwrite")
          .objectStore("nutritions");

        // 데이터를 객체 저장소에 추가한다.
        const addData = data.forEach((item) => {
          nutritionStore.add(item);
        });

        // 데이터 추가 연산이 성공했다면 실행
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
        // 입력받은 아이템 이름의 길이가 2 보다 밑이라면 탈출
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

  // 영양 정보 json 데이터를 받아온 후 데이터베이스 생성 함수의 인자로 전달한다.
  useEffect(() => {
    axios.get(`/Nutrition.json`).then((response) => {
      const data = response.data;
      createDB(data, itemName);
      setNextIndex(0);
      if (addBtnRef.current) {
        addBtnRef.current.style.visibility = "visible";
      }
    });
  }, [createDB, itemName]);

  // 컴포넌트가 마운트된 뒤에 input 에 포커스를 맞춘다.
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <section className={styles.container}>
      <DbSideMenu itemsKey={itemKey} />
      {/* 아이템 검색창  */}
      <input
        className={styles.search_input}
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
        className={styles.search_btn}
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
      <span className={styles.result_msg}>
        {getNutritions.slice(0, nextIndex + 4).length}/{getNutritions.length}
        (개)
      </span>{" "}
      <br />
      {isLoading ? <ReactSpinner /> : ""}
      <br />
      {/* 아이템 검색 결과가 나오는 섹션 */}
      <section className={styles.item_section} ref={containerRef}>
        {Array.isArray(getNutritions) && getNutritions[0] !== undefined ? (
          getNutritions.slice(0, nextIndex + 4).map((item, i) => {
            return (
              <article
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
            검색명이 포함된 모든 목록을 불러오므로 명확한 검색어를 입력
            바랍니다. 조회된 각 목록을 클릭하면, 세부 내용 페이지로 이동합니다.
            <br />
          </div>
        )}
      </section>
      <button
        disabled={getNutritions.length === 0}
        className={styles.add_btn}
        ref={addBtnRef}
        onClick={(e) => {
          const copy = getNutritions.slice(nextIndex, nextIndex + 4);

          if (copy.length === 0) {
            e.target.style.visibility = "hidden";
            alert("불러올 데이터가 존재하지 않습니다.");
          }

          setNextIndex((prev) => (prev += 4));
        }}
      >
        더보기
      </button>
    </section>
  );
};
export default Database;