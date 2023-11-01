// import { localFoods } from "./localfood(202212)";
import { useEffect, useState} from "react";
import NavSearch from "../UI/NavSearch";
import GPT from "../../util/kakao/gpt";
import Movement from "../UI/movement/Movement";
import LocalFoodContent from "../module/localfood/LocalFoodContent";
import LocalAsideMenu from "../module/localfood/LocalAsideMenu";

export type localFoodType = {
  addr: string;
  cntnts_url: string;
  core_kwrd_cn: string;
  ctprvn_nm: string;
  data_manage_no: string;
  data_title_nm: string;
  main_thumb_url: string;
  era_nm: string;
  opn_de: string;
  regist_de: string;
  sbjt_nm: string;
  signgu_nm: string;
  sumry_cn: string;
  relate_rstrnt_nm: string;
  rstrnt_addr: string;
  rstrnt_tel_no: string;
};

const LocalFood = () => {
  const [searchResult, setSearchResult] = useState<localFoodType[]>();
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    document.title = "향토음식조회 | FoodPicker";
  }, []);

  return (
    <>
      {/* 주제별 카테고리 */}
      <LocalAsideMenu setSearchResult={setSearchResult} setDisplay={setDisplay} display={display}/>

      {/* 디테일 내용 영역 */}
      <LocalFoodContent
        display={display}
        setDisplay={setDisplay}
        searchResult={searchResult}
      />

      <NavSearch />
      <GPT />
      <Movement />
    </>
  );
};

export default LocalFood;
