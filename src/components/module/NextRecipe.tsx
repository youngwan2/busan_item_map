import styles from "../page/recipe/RecipeDetail.module.css";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { useEffect, useRef } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

interface Type {
  param?: string;
}
function NextRecipe({ param }: Type) {
  const state = useAppSelector((state) => {
    return state.recipe.value;
  });
  const currentIndex = state.findIndex((recipe) => {
    return recipe.RCP_SEQ === param;
  });
  const lastIndex = state.length - 1;
  const prevRecipe = state[currentIndex - 1];
  const nextRecipe = state[currentIndex + 1];

  const articleRef = useRef<HTMLAreaElement>(null);

  function intersectionOI() {
    const options = {
      threshold: 1,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          articleRef.current &&
            (articleRef.current.style.cssText = `
                opacity:1;
                visibility: visible;
                bottom:0.5rem;
                transform:translate(0,0);
             `);
             articleRef.current && observer.unobserve(articleRef.current);
        } 
      });
    }, options);

    if (articleRef.current) {
      observer.observe(articleRef.current);
    }
  }

  useEffect(() => {
    intersectionOI();
  }, []);

  return (
    <article className={styles.pagination_article} ref={articleRef}>
      <button
        style={
          currentIndex <= 0
            ? { visibility: "hidden" }
            : { visibility: "visible" }
        }
      >
        <Link to={`/food-recipe/detail/${prevRecipe?.RCP_SEQ}`}>
          <h4 style={{ background: `url(${prevRecipe?.ATT_FILE_NO_MAIN})` }}>
            {prevRecipe?.RCP_NM}
          </h4>
          <span className={styles.btn_icons_left}>
            <FaArrowAltCircleLeft />
          </span>
        </Link>
      </button>
      <button
        style={
          currentIndex === lastIndex
            ? { visibility: "hidden" }
            : { visibility: "visible" }
        }
      >
        <Link to={`/food-recipe/detail/${nextRecipe?.RCP_SEQ}`}>
          <h4 style={{ background: `url(${nextRecipe?.ATT_FILE_NO_MAIN})` }}>
            {nextRecipe?.RCP_NM}
          </h4>
          <span className={styles.btn_icons_right}>
            <FaArrowAltCircleRight />
          </span>
        </Link>
      </button>
    </article>
  );
}

export default NextRecipe;
