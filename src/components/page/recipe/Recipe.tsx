import axios, { AxiosResponse } from "axios";
import styles from "./Recipe.module.css";
import { useEffect, useState } from "react";
import { RecipeType } from "../../../type/RecipeType";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setRecipe } from "../../../app/slice/recipeSearch";
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
  const [categories] = useState(["", "후식", "국", "반찬", "밥","일품","기타"]);
  const [checkedMenu, setCheckedMenu] = useState("");
  const [totalRecipeCount, setTotalRecipe] = useState(0);
  const [undefinedMessage, setUndefinedMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState<RecipeType[]>();

  const dispatch = useAppDispatch();
  const state = useAppSelector((state)=>{return state.recipe})

  useEffect(()=>{
    setRecipes(state.value)
    console.log(state.value)
  },[])


  /* axios.then */
  function axiosThen(response: AxiosResponse) {
    const data = response.data;
    const count = data.COOKRCP01.total_count;
    const result = data.COOKRCP01.row;
    if (result) {
      setRecipes(result);
      setTotalRecipe(count);
      setUndefinedMessage("");
      dispatch(setRecipe(result));
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

    if (searchFoodName.length === 0 && foodType.length >=0) {
      setLoading(false);
      setUndefinedMessage(
        "검색어를 입력해주세요."
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
          `http://openapi.foodsafetykorea.go.kr/api/${API_KEY}/COOKRCP01/json/1/20/RCP_NM=${searchFoodName}&RCP_PAT2=${foodType}`
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


