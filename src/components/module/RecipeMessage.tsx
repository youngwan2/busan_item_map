import styles from "../page/recipe/Recipe.module.scss";

interface Type {
  messageSpanDisplay: boolean;
  setMessageSpanDisplay: (bool: boolean) => void;
  state: any;
  endRecipeDataCheck: number;
}

function RecipeMessage({
  messageSpanDisplay,
  setMessageSpanDisplay,
  state,
  endRecipeDataCheck,
}: Type) {
  return (
    <article
      className={styles.message_container}
      style={
        !messageSpanDisplay
          ? { maxWidth: "30px", maxHeight: "40px" }
          : { maxWidth: "240px", maxHeight: "40px" }
      }
    >
      <button
        style={
          !messageSpanDisplay
            ? { transform: "rotate(0)" }
            : { transform: "rotate(-180deg)" }
        }
        onClick={() => {
          setMessageSpanDisplay(!messageSpanDisplay);
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
  );
}

export default RecipeMessage;
