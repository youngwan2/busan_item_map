import styles from "./NutritionDb.module.scss";
import { useRef } from "react";

function InfiniteScrollButton({
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
      className={styles.scroll_btn}
      onClick={onAddPostRenderEvent}
    >
      더보기
    </button>
  );
}

export default InfiniteScrollButton;
