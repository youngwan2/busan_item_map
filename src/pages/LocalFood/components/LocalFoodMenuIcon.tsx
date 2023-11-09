import styles from '../LocalFood.module.scss'

interface PropsType {
    setDisplay: (p: boolean) => void;
    display : boolean
}
const LocalFoodMenuIcon = ({setDisplay, display}:PropsType) =>  {
    return (
        <button
        onClick={() => {
          setDisplay(true);
        }}
        className={styles.slide_btn_outer}
        style={!display ? { display: "block" } : { display: "none" }}
      >
        메뉴
      </button>
    );
}

export default LocalFoodMenuIcon;