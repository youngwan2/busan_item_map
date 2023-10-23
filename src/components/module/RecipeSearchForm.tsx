import { useEffect, useRef, useState } from "react";
import styles from "../page/recipe/Recipe.module.scss";

interface RecipeSearchFormType {
  setCheckedMenu: (p: string) => void;
  setUserInputValue: (p: string) => void;
  getRecipeDataFromApi: (p: string, t: string) => void;
  userInputValue: string;
  checkedMenu: string;
  categories: string[];
  setExtraRecipeDataCount: (count: number) => void;
}

function RecipeSearchForm({
  setCheckedMenu,
  setUserInputValue,
  getRecipeDataFromApi,
  userInputValue,
  checkedMenu,
  categories,
  setExtraRecipeDataCount,
}: RecipeSearchFormType) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // 레시피 검색 함수
  function search(value: string) {
    const MIN_COUNT = 8;
    getRecipeDataFromApi(value, checkedMenu);
    setExtraRecipeDataCount(MIN_COUNT);
  }

  return (
    <article className={styles.search_form}>
      <div className={styles.search_input_area}>
        <label htmlFor="recipe_search"></label>
        <input
          ref={inputRef}
          id="recipe_search"
          type="search"
          onKeyDown={(e) => {
            const value = e.currentTarget.value;
            setUserInputValue(value);
            if (e.key === "Enter") {
              search(userInputValue);
            }
          }}
        />
        <button
          onClick={(e) => {
            const list = e.currentTarget.parentElement?.children!;
            const input = list[1] as HTMLInputElement;
            const inputValue: string = input.value;
            search(inputValue);
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
