import styles from "./HaccpModalLayout.module.css";

interface LayoutType {
  setModal: (modal: boolean) => void;
  modal: boolean;
}

const HaccpModalLayout = ({ setModal,modal }: LayoutType) => {
  return (
    <div
      style={
        modal
          ? { visibility: "visible", opacity: 1 }
          : { visibility: "hidden", opacity: 0 }
      }
      className={styles.layout}
      onClick={() => {
        setModal(false);
      }}
    ></div>
  );
}

export default HaccpModalLayout;
