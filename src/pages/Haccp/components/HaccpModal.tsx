import styles from '../Haccp.module.scss';
import { FilterItemType } from '../types/Haccp.types';
import Layout from './HaccpModalLayout';
import HaccpContents from './HaccpContents';

interface ModalType {
  filterItem?: FilterItemType;
  setModal: (modal: boolean) => void;
  modal: boolean;
}

function HaccpModal({ filterItem, setModal, modal }: ModalType) {

  if (!filterItem) return <></>
  return (
    <>
      <article
        className={styles.modal}
        style={
          modal
            ? { visibility: 'visible', opacity: 1 }
            : { visibility: 'hidden', opacity: 0, scale: '0.5 0.5', transformOrigin: 'left top' }
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
        <HaccpContents filterItem={filterItem} />
      </article>
      <Layout setModal={setModal} modal={modal} />
    </>
  );
}

export default HaccpModal;
