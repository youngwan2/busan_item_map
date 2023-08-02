import styles from "./modal.module.css";
import { ItemsType } from "../../page/HccpSearch";
import Layout from "./layout";

interface ModalType {
  filterItems: ItemsType[];
  setModal: (modal: boolean) => void;
  modal: boolean;
}

function Modal({ filterItems, setModal, modal }: ModalType) {
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
        <h2>상품상세</h2>
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
                <div className={styles.modal_content_con}>
                  <figure className={styles.modal_figure}>
                    <img src={`${item.item.imgurl1}`} alt="상품이미지" />
                  </figure>
                  <div>
                    <p>
                      <strong>상품명</strong>
                      <br />
                      <div>{item.item.prdlstNm??'알수없음'}</div>
                    </p>
                    <p>
                      <strong>제조사</strong>
                      <br />
                      <div>{item.item.manufacture??'알수없음'}</div>
                    </p>
                    <p>
                      <strong>성분</strong>
                      <br />
                      <div>{item.item.rawmtrl??'알수없음'}</div>
                    </p>
                    <p>
                      <strong>알러지</strong>
                      <br />
                      <div>{item.item.allergy??'알수없음'}</div>
                    </p>
                    <p>
                      <strong>바코드</strong>
                      <br />
                      <div>{item.item.barcode??'알수없음'}</div>
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

export default Modal;
