import axios, { AxiosResponse } from "axios";
import styles from "./Recipe.module.css";
import { useState } from "react";
import { RecipeType } from "../../../type/RecipeType";
import Header from "../../UI/Header";
import RecipeSearchForm from "../../module/RecipeSearchForm";
import RecipeSearchResult from "../../module/RecipeSearchResult";
import ReactSpinner from "../../UI/loading/ReactSpinner";
import GPT from "../../../util/kakao/gpt";
import NavSearch from "../../UI/NavSearch";
import Movement from "../../UI/movement/Movement";

const API_KEY = process.env.REACT_APP_FOOD_KEY;

function Recipe() {
  const [userInputValue, setUserInputValue] = useState("");
  const [categories] = useState(["", "후식", "국", "반찬", "밥"]);
  const [checkedMenu, setCheckedMenu] = useState("");
  const [totalRecipe, setTotalRecipe] = useState(0);
  const [undefinedMessage, setUndefinedMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState<RecipeType[]>();

  function axiosThen(response: AxiosResponse) {
    const data = response.data;
    const count = data.COOKRCP01.total_count;
    const result = data.COOKRCP01.row;
    if (result) {
      setRecipes(result);
      setTotalRecipe(count);
      setUndefinedMessage("");
    } else {
      setUndefinedMessage(data.COOKRCP01.RESULT.MSG);
    }
    setLoading(false);
  }

  const getRecipeDataFromApi = (
    searchFoodName: string = "",
    foodType: string = ""
  ) => {
    setLoading(true);

    if (searchFoodName.length === 0 && foodType.length === 0) {
      setLoading(false);
      setUndefinedMessage(
        "검색어를 입력해주세요(카테고리의 기본설정은 '전체' 입니다.)."
      );
      return;
    }
    // 음식 카테고리 전체 이면서 검색어가 존재하는 경우
    if (foodType.length === 0 && searchFoodName.length >= 1) {
      console.log("카테고리 비선택 및 검색어가 존재");
      return axios
        .get(
          `http://openapi.foodsafetykorea.go.kr/api/${API_KEY}/COOKRCP01/json/1/20/RCP_NM=${searchFoodName}`
        )
        .then((response) => {
          axiosThen(response);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
    // 카테고리가 후식/국/반찬/밥 이면서 검색어가 존재하는 경우
    if (searchFoodName.length >= 1 && foodType.length > 0) {
      console.log("카테고리 선택 및 검색어 존재");
      return axios
        .get(
          `http://openapi.foodsafetykorea.go.kr/api/${API_KEY}/COOKRCP01/json/1/20/RCP_PAT2=${foodType}`
        )
        .then((response) => {
          axiosThen(response);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  };

  return (
    <>
      <Header isStyle={true} />
      <section className={styles.Recipe}>
        <h2 className={styles.page_title}>음식 레시피</h2>
        <RecipeSearchForm
          setCheckedMenu={setCheckedMenu}
          setUserInputValue={setUserInputValue}
          getRecipeDataFromApi={getRecipeDataFromApi}
          userInputValue={userInputValue}
          checkedMenu={checkedMenu}
          categories={categories}
        />
        <span style={{ textAlign: "center" }}>
          {loading && <ReactSpinner />}
        </span>

        <RecipeSearchResult
          recipes={recipes}
          meg={undefinedMessage}
        ></RecipeSearchResult>
      </section>
      <GPT />
      <NavSearch />
      <Movement />
    </>
  );
}

export default Recipe;

/**
 * 번호	항목	설명
1	RCP_SEQ	일련번호
2	RCP_NM	메뉴명
3	RCP_WAY2	조리방법
4	RCP_PAT2	요리종류 ex) 후식, 밥, 반찬 국
5	INFO_WGT	중량(1인분)
6	INFO_ENG	열량
7	INFO_CAR	탄수화물
8	INFO_PRO	단백질
9	INFO_FAT	지방
10	INFO_NA	나트륨
11	HASH_TAG	해쉬태그
12	ATT_FILE_NO_MAIN	이미지경로(소)
13	ATT_FILE_NO_MK	이미지경로(대)
14	RCP_PARTS_DTLS	재료정보
15	MANUAL01	만드는법_01
16	MANUAL_IMG01	만드는법_이미지_01
55	RCP_NA_TIP	저감 조리법 TIP

 * 
 * 
 */
