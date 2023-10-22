import axios, { AxiosResponse } from "axios";
import styles from "./Recipe.module.scss";
import { useEffect, useState, useRef } from "react";
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
  const [extraRecipeDataCount, setExtraRecipeDataCount] = useState(8);
  const [endRecipeDataCheck, setEndRecipeDataCheck] = useState(0);
  const [messageSpanDisplay, setMessageSpanDisplay] = useState(true);

  const sectionRef = useRef<HTMLBaseElement>(null);
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => {
    return state.recipe;
  });

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

  // 스크롤높이 추적 함수
  function windowScrollTraces() {
    if (
      sectionRef.current?.offsetHeight! <=
      window.scrollY + window.innerHeight - 50
    ) {
      setExtraRecipeDataCount((old) => (old += 8));
    }
  }

  useEffect(() => {
    if (sectionRef.current) {
      window.addEventListener("scroll", windowScrollTraces);

      return () => {
        window.removeEventListener("scroll", windowScrollTraces);
      };
    }
  }, []);

  return (
    <>
      <Header isStyle={true} />
      <section className={styles.Recipe} ref={sectionRef}>
        <h2 className={styles.page_title}>음식 레시피</h2>
        <RecipeSearchForm
          setExtraRecipeDataCount={setExtraRecipeDataCount}
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

        <article className={styles.message_container} style={!messageSpanDisplay?{maxWidth:'30px', maxHeight:'40px'}:{maxWidth:'240px', maxHeight:'40px'}}>
          <button
            style={!messageSpanDisplay?{transform:'rotate(0)'}:{transform:'rotate(-180deg)'}}
            onClick={() => {
              setMessageSpanDisplay((old) => (old = !old));
            }}
          >
            {"←"}
          </button>
          <span
            className={styles.message}
            style={
              !messageSpanDisplay
                ? {
                    visibility: "hidden",
                    opacity: 0,
                    transform: "translateX(5px)",
                  }
                : {
                    visibility: "visible",
                    opacity: 1,
                    transform: "translateX(0)",
                  }
            }
          >
            {state.value.length}개 중 {endRecipeDataCheck} 포스트 조회..
          </span>
        </article>

        <RecipeSearchResult
          recipes={recipes}
          meg={undefinedMessage}
          extraRecipeDataCount={extraRecipeDataCount}
          setEndRecipeDataCheck={setEndRecipeDataCheck}
        ></RecipeSearchResult>
      </section>
      <GPT />
      <NavSearch />
      <Movement />
    </>
  );
}

export default Recipe;
