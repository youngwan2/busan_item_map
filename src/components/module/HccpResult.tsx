import { ItemsType } from "../page/HccpSearch";
import styles from "../page/HccpSearch.module.css";

interface Type {
  items: ItemsType[];
  setModal: (a: boolean) => void;
  setProductId: (a: string) => void;
  modal: boolean;
}

function HccpResult({ items, setModal, setProductId, modal }: Type) {
  return (
    <section className={styles.content_container}>
      {Array.isArray(items) ? (
        items.map((item) => {
          return (
            // 조회된 각 아이템
            <figure key={item.item.prdlstReportNo}>
              <div
                id="item_box"
                role="listitem"
                onClick={() => {
                  setModal(true); // 모달 활성화
                  setProductId(item.item.prdlstReportNo); // 선택한 아이템 id 상태 관리
                }}
              >
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
