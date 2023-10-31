import styles from "./db.module.css";
import { useRef } from "react";

function DbAddButton({
  onAddPostRenderEvent,
  hasNextPage,
}: {
  onAddPostRenderEvent: () => void;
  hasNextPage: boolean;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <button
      style={!hasNextPage ? { display: "none" } : { display: "inline-block" }}
      ref={buttonRef}
      className={styles.add_btn}
      onClick={onAddPostRenderEvent}
    >
      더보기
    </button>
  );
}

export default DbAddButton;
