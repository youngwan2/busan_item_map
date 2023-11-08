import styles from "./NutritionSidebar.module.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { getNutritionDataFromDB } from "../../../store/slice/nutritionSearch";

interface HeaderType {
  itemsKey: [
    {
      title: string;
      title2: string;
      id: number;
    }
  ];
  sideBarDisplayHandler: () => void;
}

interface TitleListType {
  itemsKey: [
    {
      title: string;
      title2: string;
      id: number;
    }
  ];
  getNutritions: any;
}

const NutritionSidebar = ({ itemsKey, getNutritions }: any) => {
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
      </button>
      <article className={styles.DbSideBar} ref={sidebarRef}>
        <SideBarHeader
          itemsKey={itemsKey}
          sideBarDisplayHandler={sideBarDisplayHandler}
        />
        <TitleList itemsKey={itemsKey} getNutritions={getNutritions} />
      </article>
    </>
  );
};

/* 사이드바 헤더 */
const SideBarHeader = ({ itemsKey, sideBarDisplayHandler }: HeaderType) => {
  return (
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
  );
};

/* 사이드바 아이템 목록 */
const TitleList = ({ itemsKey, getNutritions }: TitleListType) => {
  const dispatch = useAppDispatch();
  return (
    <ol className={styles.title_list}>
      {Array.isArray(itemsKey) ? (
        itemsKey.map((item, i) => {
          return (
            <li
              key={item.id}
              onClick={() => {
                dispatch(getNutritionDataFromDB(getNutritions[i]));
              }}
            >
              <Link to={`/nutrition/${item.id}`}>
                {item.title}({item.title2})
              </Link>
            </li>
          );
        })
      ) : (
        <div>
          검색 시 목록이 표시됩니다. <br /> 각 목록을 클릭하면 즉시 해당
          게시글의 상세 페이지로 이동합니다.
        </div>
      )}
    </ol>
  );
};

export default NutritionSidebar;
