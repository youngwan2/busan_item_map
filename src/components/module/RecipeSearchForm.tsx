import { useEffect, useRef } from "react";
import styles from "../page/recipe/Recipe.module.css";

interface RecipeSearchFormType {
  setCheckedMenu: (p: string) => void;
  setUserInputValue: (p: string) => void;
  getRecipeDataFromApi: (p: string, t: string) => void;
  userInputValue: string;
  checkedMenu: string;
  categories: string[];
}

function RecipeSearchForm({
  setCheckedMenu,
  setUserInputValue,
  getRecipeDataFromApi,
  userInputValue,
  checkedMenu,
  categories,
}: RecipeSearchFormType) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <article className={styles.search_form}>
      <div className={styles.search_input_area}>
        <label htmlFor="recipe_search"></label>
        <input
          id="recipe_search"
          type="search"
          onKeyUp={(e) => {
            setUserInputValue(e.currentTarget.value);
            // if (e.code === "Enter") {
            //  return getRecipeDataFromApi(userInputValue,checkedMenu);
            // }
          }}
        />
        <button
          onClick={() => {
            // onClick("호출")
            getRecipeDataFromApi(userInputValue, checkedMenu);
          }}
        >
          검색
        </button>
      </div>
      <div className={styles.search_sortby_area}>
        {categories.map((category) => {
          return (
            <p className={styles.checkbox_item} key={category}>
              <input
                ref={inputRef}
                name="category"
                onClick={(e) => {
                  setCheckedMenu(e.currentTarget.value);
                }}
                type="radio"
                value={`${category}`}
              ></input>
              {category === "" ? "전체" : category}
            </p>
          );
        })}
      </div>
    </article>
  );
}

export default RecipeSearchForm;
