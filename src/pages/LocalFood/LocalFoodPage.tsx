import { useEffect, useState} from "react";
import LocalFoodContent from "./components/LocalFoodContent";
import LocalFoodSidebar from "./components/LocalFoodSidebar";
import { localFoodType } from "./types/localFood.types";
import styles from './LocalFood.module.scss'


const LocalFoodPage = () => {
  const [searchResult, setSearchResult] = useState<localFoodType[]>();
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    document.title = "향토음식조회 | FoodPicker";
  }, []);

  return (
    <>
    {/* 주제별 카테고리 */}
      <LocalFoodSidebar setSearchResult={setSearchResult} setDisplay={setDisplay} display={display}/>

      {/* 디테일 내용 영역 */}
      <LocalFoodContent
        display={display}
        setDisplay={setDisplay}
        searchResult={searchResult}
      />
    </>
  );
};

export default LocalFoodPage;
