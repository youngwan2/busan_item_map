import styles from '../Haccp.module.scss';

import Layout from './HaccpModalLayout';
import HaccpContents from './HaccpContents';
import { HaccpProductPropertyType } from '../../../types/Haccp.types';

interface ModalType {
  product?: HaccpProductPropertyType
  onToggleOpenModal: () => void
  isOpen: boolean;
}

function HaccpModal({ product,isOpen, onToggleOpenModal }: ModalType) {

  if (!product) return <></>
  return (
    <>
      <article
        className={styles.modal}
        style={
          isOpen
            ? { visibility: 'visible', opacity: 1 }
            : { visibility: 'hidden', opacity: 0, scale: '0.5 0.5', transformOrigin: 'left top' }
        }
      >
        <h2 className={styles.modal_title}>상품상세</h2>
        <button
          onClick={onToggleOpenModal}
        >
          X
        </button>
        <HaccpContents product={product} />
      </article>
      <Layout onToggleOpenModal={onToggleOpenModal} isOpen={isOpen} />
    </>
  );
}

export default HaccpModal;
