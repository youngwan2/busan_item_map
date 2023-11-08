import styles from "./HaccpModal.module.scss";
import { ItemsType } from "../types/Haccp.types";
import Layout from "./HaccpModalLayout";

interface ModalType {
  filterItems: ItemsType[];
  setModal: (modal: boolean) => void;
  modal: boolean;
}

function HaccpModal({ filterItems, setModal, modal }: ModalType) {
  return (
    <>
      <article
        className={styles.modal}
        style={
          modal
            ? { visibility: "visible", opacity: 1 }
            : { visibility: "hidden", opacity: 0,scale:'0.5 0.5',transformOrigin:'left top' }
        }
      >
        <h2 className={styles.modal_title}>상품상세</h2>
        <button
          onClick={() => {
            setModal(false);
          }}
        >
          X
        </button>
        <section>
          {Array.isArray(filterItems) ? (
            filterItems.map((item) => {
              return (
                <div className={styles.modal_content_con} key={item.item.prdlstReportNo}>
                  <figure className={styles.modal_figure}>
                    <img src={`${item.item.imgurl1}`} alt="상품이미지" />
                  </figure>
                  <div>
                    <p>
                      <strong>상품명</strong>
                      <br />
                      <span>{item.item.prdlstNm??'알수없음'}</span>
                    </p>
                    <p>
                      <strong>제조사</strong>
                      <br />
                      <span>{item.item.manufacture??'알수없음'}</span>
                    </p>
                    <p>
                      <strong>성분</strong>
                      <br />
                      <span>{item.item.rawmtrl??'알수없음'}</span>
                    </p>
                    <p>
                      <strong>알러지</strong>
                      <br />
                      <span>{item.item.allergy??'알수없음'}</span>
                    </p>
                    <p>
                      <strong>바코드</strong>
                      <br />
                      <span>{item.item.barcode??'알수없음'}</span>
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <div></div>
          )}
        </section>
      </article>
      <Layout setModal={setModal} modal={modal}/>
    </>
  );
}

export default HaccpModal;
