import styles from './Overlay.module.scss';

export default function Overlay({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`${styles.overlay} ${isOpen ? styles.active : ''}`}></div>
  );
}
