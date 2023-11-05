import { useRef, useEffect,useState, MouseEvent, KeyboardEvent } from "react";
import localFoods  from "./localfood.js";
import styles from "../../page/LocalFood.module.css";
import { localFoodType } from "../../page/LocalFood";

interface PropsType {
  setSearchResult: (p: localFoodType[]) => void;
  display: boolean;
  setDisplay: (p: boolean) => void;
}

function LocalAsideMenu({ setSearchResult,display,setDisplay }: PropsType) {
  const categoryRef = useRef<HTMLOListElement>(null);
  const topBtn = useRef<HTMLLIElement>(null);
  const bottomBtn = useRef<HTMLLIElement>(null);

  const [title, setTitle] = useState<string[]>();
  const [searchTargetTitle, setSearchTargetTitle] = useState("");
  // 카테고리 상단 이동
  const categoryTopShifter = () => {
    topBtn.current?.addEventListener("click", () => {
      categoryRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  // 카테고리 하단 이동
  const catgoryBottomShiter = () => {
    bottomBtn.current?.addEventListener("click", () => {
      categoryRef.current?.scrollTo({ top: 100000, behavior: "smooth" });
    });
  };

  // 카테고리 중 목록 선택시 데이터 조회하는 함수
  const searchFilter = (e: MouseEvent<HTMLLIElement>) => {
    const choiceTitle = e.currentTarget.textContent!;

    // 제목 리스트에서 유저가 선택한 항목이 포함되어 있는 경우만 필터링
    const choiceFood = localFoods.filter((food: { data_title_nm: string | string[]; }) => {
      return food.data_title_nm.includes(choiceTitle);
    });
    setSearchResult(choiceFood);
  };

  // 주제별 필터 검색 함수
  const titleFilter = (e: KeyboardEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setSearchTargetTitle(value); // 검색 버튼 클릭 시 조회에 활용 예정

    if (e.key === "Enter") {
      setTitle(categorySearchFilter(value));
    }
    if (value.length < 1) {
      categoryFilter();
    }
  };

  // 전체 목록에서 중복을 제외한 카테고리 목록을 필터링하는 함수
  const categoryFilter = () => {
    const filterList: string[] = [];
    localFoods?.forEach((data: { data_title_nm: string; }) => {
      filterList.push(data.data_title_nm);
    });
    const filterTitle = [...new Set(filterList)];
    setTitle(filterTitle);
  };

  // 카테고리 검색 함수
  const categorySearch = (e: MouseEvent<HTMLButtonElement>) => {
    const searchList = categorySearchFilter(searchTargetTitle);
    setTitle(searchList);
  };

  // 카테고리 검색어와 일치하는 문자열 배열만 반환하는 함수(필터링함수)
  function categorySearchFilter(value: string) {
    const filterTitle = title?.filter((title) => {
      return title.includes(value);
    });

    return filterTitle;
  }

  useEffect(()=>{
    setSearchResult(localFoods)
  },[])

  useEffect(() => {
    categoryFilter();
  }, []);

  return (
    <aside
      className={styles.category_con}
      style={display ? { display: "block" } : { display: "none" }}
    >
      <input
        onKeyUp={titleFilter}
        className={styles.category_search_input}
        type="text"
        placeholder="키워드를 입력하세요!"
      />
      <button className={styles.search_btn} onClick={categorySearch}>
        <img
          src={process.env.PUBLIC_URL + `/icon/search.svg`}
          alt="searchIcon"
          width={30}
          height={35}
        />
      </button>
      <ol className={styles.category} ref={categoryRef}>
        <button
          onClick={() => {
            setDisplay(false);
          }}
          className={styles.slide_btn_inner}
        >
          <img
            src={process.env.PUBLIC_URL + "/icon/close.svg"}
            width={30}
            height={30}
            alt=""
          />
        </button>
        {title?.map((title, i) => {
          return (
            <li key={i} onClick={searchFilter}>
              {title}
            </li>
          );
        })}
      </ol>
      <ul className={styles.category_shift_btn_con}>
        <li onClick={categoryTopShifter} ref={topBtn}>
          ▲
        </li>
        <li onClick={catgoryBottomShiter} ref={bottomBtn}>
          ▼
        </li>
      </ul>
    </aside>
  );
}

export default LocalAsideMenu;
