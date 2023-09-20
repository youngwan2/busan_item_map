import styles from "./dbSideMenu.module.css";
import { useEffect, useRef, useState } from "react";

const DbSideMenu = ({ itemsKey }: any) => {
  const sidebarRef = useRef<HTMLAreaElement>(null);

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
        목록 보기
      </button>{" "}
      <article className={styles.DbSideBar} ref={sidebarRef}>
        <div className={styles.sideBar_header}>
          <h2>음식목록</h2>
          <span
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
                  {tit.title}({tit.title2})
                </li>
              );
            })
          ) : (
            <div>임시</div>
          )}
        </ol>
      </article>
    </>
  );
};

export default DbSideMenu;
