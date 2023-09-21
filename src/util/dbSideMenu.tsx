import styles from "./dbSideMenu.module.css";
import {  useRef } from "react";
import Movement from "../components/UI/movement/Movement";
const DbSideMenu = ({ itemsKey }: any) => {
  const sidebarRef = useRef<HTMLAreaElement>(null);
  console.log(itemsKey);

  return (
    <>
      <button
        className={styles.list_load_btn}
        onClick={() => {
          if (sidebarRef.current)
            sidebarRef.current.style.cssText = `
                 visibility:visible;
                 opacity:1;
                 transform:translate(0)
             `;
        }}
      >
        바로가기
      </button>{" "}
      <article className={styles.DbSideBar} ref={sidebarRef}>
        <div className={styles.sideBar_header}>
          <h2>음식목록({itemsKey.length})</h2>
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
            onClick={() => {
              if (sidebarRef.current)
                sidebarRef.current.style.cssText = `
                visibility:hidden;
                opacity:0;
                transform:translate(-50px)
            `;
            }}
          >
            닫기
          </span>
        </div>
        <ol className={styles.title_list}>
          {Array.isArray(itemsKey) ? (
            itemsKey.map((tit) => {
              return (
                <li>
                  <a href={`#${tit.id}`}>
                    {tit.title}({tit.title2})
                  </a>
                </li>
              );
            })
          ) : (
            <div>임시</div>
          )}
        </ol>
      </article>
      <Movement/>
    </>
  );
};

export default DbSideMenu;
