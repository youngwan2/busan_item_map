import { useState } from "react";
import styles from '../../page/HccpSearch.module.scss'

interface Type {
    currentPage:number
    totalPage:number
}

function HccpMeg({currentPage,totalPage}:Type) {

    const [messageSpanDisplay, setMessageSpanDisplay] = useState(true);
    return (
        <aside
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
          {totalPage}개 중 {currentPage} 포스트 조회..
        </span>
      </aside>
    );
}

export default HccpMeg;