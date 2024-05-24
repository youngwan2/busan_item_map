import styles from './HaccpModalLayout.module.css';

interface LayoutType {
  onToggleOpenModal:()=>void
  isOpen :boolean
}

const HaccpModalLayout = ({ onToggleOpenModal, isOpen }: LayoutType) => {
  return (
    <div
      style={isOpen ? { visibility: 'visible', opacity: 1 } : { visibility: 'hidden', opacity: 0 }}
      className={styles.layout}
      onClick={onToggleOpenModal}
    ></div>
  );
};

export default HaccpModalLayout;
