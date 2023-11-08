import styles from "../Nutrition.module.css";
import { useRef } from "react";

function NutritionButton({
  onAddPostRenderEvent,
  hasNextPage,
}: {
  onAddPostRenderEvent: () => void;
  hasNextPage: boolean;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <button
      style={!hasNextPage ? { visibility: "hidden" } : { visibility: "visible" }}
      ref={buttonRef}
      className={styles.add_btn}
      onClick={onAddPostRenderEvent}
    >
      더보기
    </button>
  );
}

export default NutritionButton;
