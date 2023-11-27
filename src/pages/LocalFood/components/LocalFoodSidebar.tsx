import { useEffect, useState, MouseEvent, KeyboardEvent } from "react";
import {localfoods} from "../../../data/localfoods";
import styles from "../LocalFood.module.scss";
import { localFoodType } from "../types/localFood.types";
import SidebarNav from "./SidebarNav";
import SidebarSearchBtn from "./SidebarSearchBtn";
import SidebarUserInput from "./SidebarUserInput";

interface PropsType {
  setSearchResult: (p: localFoodType[]) => void;
  display: boolean;
  setDisplay: (p: boolean) => void;
}

function LocalFoodSidebar({ setSearchResult, display, setDisplay }: PropsType) {
  const [title, setTitle] = useState<string[]>();
  const [searchTargetTitle, setSearchTargetTitle] = useState("");

  // 카테고리 중 목록 선택시 데이터 조회하는 함수
  const searchFilter = (e: MouseEvent<HTMLLIElement>) => {
    const choiceTitle = e.currentTarget.textContent!;

    // 제목 리스트에서 유저가 선택한 항목이 포함되어 있는 경우만 필터링
    const choiceFood = localfoods.filter(
      (food: { data_title_nm: string | string[] }) => {
        return food.data_title_nm.includes(choiceTitle);
      }
    );
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
    const categories: string[] = [];
    localfoods?.forEach((data: { data_title_nm: string }) => {
      categories.push(data.data_title_nm);
    });
    setTitle(categories);
  };

  // 카테고리 검색 함수
  const categorySearch = () => {
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

  useEffect(() => {
    setSearchResult(localfoods);
  }, [setSearchResult]);

  useEffect(() => {
    categoryFilter();
  }, []);

  return (
    <aside
      className={styles.category_con}
      style={
        display
          ? { visibility: "visible", opacity: 1 }
          : { visibility: "hidden", opacity: 0, transform: "translate(-50px)" }
      }
    >
      <SidebarUserInput titleFilter={titleFilter} />
      <SidebarSearchBtn categorySearch={categorySearch} />
      <SidebarNav
        setDisplay={setDisplay}
        title={title}
        searchFilter={searchFilter}
      />
    </aside>
  );
}

export default LocalFoodSidebar;
