import styles from "./dbSideMenu.module.css";
import { useRef } from "react";
import Movement from "../components/UI/movement/Movement";
import { Link } from "react-router-dom";

const DbSideMenu = ({ itemsKey }: any) => {
  const sidebarRef = useRef<HTMLAreaElement>(null);
  const sidebarOverlayRef = useRef<HTMLDivElement>(null);

  function sideBarDisplayHandler() {
    if (sidebarRef.current && sidebarOverlayRef.current) {
      sidebarRef.current.style.cssText = `
         visibility:hidden;
         opacity:0;
         transform:translate(-50px)
     `;

      sidebarOverlayRef.current.style.cssText = `
     visibility:hidden;
     opacity:0;
     transform:translate(-50px)
 `;
    }
  }

  return (
    <>
      <div
        onClick={sideBarDisplayHandler}
        className={styles.side_bar_overlay}
        ref={sidebarOverlayRef}
      ></div>
      <button
        className={styles.list_load_btn}
        onClick={() => {
          if (sidebarRef.current && sidebarOverlayRef.current) {
            sidebarRef.current.style.cssText = `
                 visibility:visible;
                 opacity:1;
                 transform:translate(0)
             `;

            sidebarOverlayRef.current.style.cssText = `
             visibility:visible;
             opacity:1;
             transform:translate(0)
         `;
          }
        }}
      >
        메뉴
      </button>{" "}
      <article className={styles.DbSideBar} ref={sidebarRef}>
        <div className={styles.sideBar_header}>
          <h2 className={styles.sideBar_title}>음식목록({itemsKey.length})</h2>
          <span
            style={{
              position: "fixed",
              top: "1rem",
              right: "0.5rem",
              border: "1px solid",
              borderRadius: "5px",
              padding: "5px",
              cursor: "pointer",
              background: "black",
              color: "white",
            }}
            onClick={sideBarDisplayHandler}
          >
            닫기
          </span>
        </div>
        <ol className={styles.title_list}>
          {Array.isArray(itemsKey) ? (
            itemsKey.map((tit) => {
              return (
                <li key={tit.id}>
                  <Link to={`/nutrition/${tit.id}`}>
                    {tit.title}({tit.title2})
                  </Link>
                </li>
              );
            })
          ) : (
            <div>
              {" "}
              검색 시 목록이 표시됩니다. <br /> 각 목록을 클릭하면 즉시 해당
              게시글의 상세 페이지로 이동합니다.
            </div>
          )}
        </ol>
      </article>
      <Movement />
    </>
  );
};

export default DbSideMenu;
