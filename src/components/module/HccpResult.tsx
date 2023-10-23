import { useEffect,useState } from "react";
import { ItemsType } from "../page/HccpSearch";
import styles from "../page/HccpSearch.module.scss";

interface Type {
  items: ItemsType[];
  setModal: (a: boolean) => void;
  setProductId: (a: string) => void;
  modal: boolean;
  extraCount: number;
}

function HccpResult({
  items,
  setModal,
  setProductId,
  modal,
  extraCount,
}: Type) {

  const totalItemCount = items.length

  const [messageSpanDisplay, setMessageSpanDisplay] = useState(true);

  return (
    <section className={styles.content_container}>
   <article className={styles.message_container} style={!messageSpanDisplay?{maxWidth:'30px', maxHeight:'40px'}:{maxWidth:'240px', maxHeight:'40px'}}>
          <button
            style={!messageSpanDisplay?{transform:'rotate(0)'}:{transform:'rotate(-180deg)'}}
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
            {totalItemCount}개 중 {extraCount} 포스트 조회..
          </span>
        </article>
      {Array.isArray(items) ? (
        items.slice(0, extraCount+8).map((item) => {
          return (
            // 조회된 각 아이템
            <figure
              key={item.item.prdlstReportNo}
              onClick={() => {
                setModal(true); // 모달 활성화
                setProductId(item.item.prdlstReportNo); // 선택한 아이템 id 상태 관리
              }}
            >
              <div id="item_box" role="listitem">
                <img src={`${item.item.imgurl1}`} alt="상품이미지"></img>
                <p>{item.item.prdlstNm}</p>
              </div>
            </figure>
          );
        })
      ) : (
        <div>{modal}</div>
      )}
    </section>
  );
}

export default HccpResult;
