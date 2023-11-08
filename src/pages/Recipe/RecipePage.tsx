import axios, { AxiosResponse } from "axios";
import styles from "./Recipe.module.scss";
import { useEffect, useState, useRef } from "react";
import { RecipeType } from "./types/Recipe.types";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setRecipe } from "../../store/slice/recipeSearch";
import RecipeSearchForm from "./components/RecipeSearchForm";
import RecipeSearchResult from "./components/RecipeSearchResult";
import ReactSpinner from "../../components/UI/ReactSpinner";

const API_KEY = process.env.REACT_APP_FOOD_KEY;

function RecipePage() {
  const [userInputValue, setUserInputValue] = useState("");
  const [categories] = useState([
    "",
    "후식",
    "국",
    "반찬",
    "밥",
    "일품",
    "기타",
  ]);
  const [checkedMenu, setCheckedMenu] = useState("");
  const [undefinedMessage, setUndefinedMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState<RecipeType[]>();

  const sectionRef = useRef<HTMLBaseElement>(null);
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => {
    return state.recipe;
  });

  useEffect(() => {
    document.title = "레시피 정보조회 | FoodPicker";
  }, []);

  useEffect(() => {
    setRecipes(state.value);
  }, []);

  /* axios.then */
  function axiosThen(response: AxiosResponse) {
    const data = response.data;
    const result = data.COOKRCP01.row;
    if (result) {
      setRecipes(result);
      setUndefinedMessage("");
      dispatch(setRecipe(result));
    } else {
      setUndefinedMessage(data.COOKRCP01.RESULT.MSG);
    }
    setLoading(false);
  }
  // 레시피 데이터 API 요청
  const getRecipeDataFromApi = (
    searchFoodName: string = "",
    foodType: string = ""
  ) => {
    setLoading(true);

    if (searchFoodName.length === 0 && foodType.length >= 0) {
      setLoading(false);
      setUndefinedMessage("검색어를 입력해주세요.");
      return;
    }
    // 음식 카테고리 전체 이면서 검색어가 존재하는 경우
    if (foodType.length === 0 && searchFoodName.length >= 1) {
      console.log("카테고리 비선택 및 검색어가 존재");
      return axios
        .get(
          `https://openapi.foodsafetykorea.go.kr/api/${API_KEY}/COOKRCP01/json/1/200/RCP_NM=${searchFoodName}`
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
          `https://openapi.foodsafetykorea.go.kr/api/${API_KEY}/COOKRCP01/json/1/200/RCP_NM=${searchFoodName}&RCP_PAT2=${foodType}`
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
      <section className={styles.Recipe} ref={sectionRef}>
        <h2 className={styles.page_title}>음식 레시피</h2>
        <RecipeSearchForm
          setCheckedMenu={setCheckedMenu}
          setUserInputValue={setUserInputValue}
          getRecipeDataFromApi={getRecipeDataFromApi}
          userInputValue={userInputValue}
          checkedMenu={checkedMenu}
          categories={categories}
        />
        <div
          className={styles.loading_spinner}
          style={loading ? { display: "inline-block" } : { display: "none" }}
        >
          {loading && <ReactSpinner />}
        </div>
        <RecipeSearchResult
          recipes={recipes}
          meg={undefinedMessage}
        ></RecipeSearchResult>
      </section>
  );
}

export default RecipePage;
