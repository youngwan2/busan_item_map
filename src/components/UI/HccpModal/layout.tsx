import styles from "./layout.module.css";

interface LayoutType {
  setModal: (modal: boolean) => void;
  modal: boolean;
}

function Layout({ setModal,modal }: LayoutType) {
  return (
    <div
      style={
        modal
          ? { visibility: "visible", opacity: 1 }
          : { visibility: "hidden", opacity: 0,scale:'0.5 0.5' }
      }
      className={styles.layout}
      onClick={() => {
        setModal(false);
      }}
    ></div>
  );
}

export default Layout;
