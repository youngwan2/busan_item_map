import styles from '../LocalFood.module.scss'
import {FiSidebar} from 'react-icons/fi'
import SideBarLayout from './SideBarLayout';
interface PropsType {
    setDisplay: (p: boolean) => void;
    display : boolean
}
const LocalFoodMenuIcon = ({setDisplay, display}:PropsType) =>  {

  if(!display) {
    return (
      <button
      onClick={() => {
        setDisplay(true);
      }}
      className={styles.slide_btn_outer}
      style={!display ? { display: "block" } : { display: "none" }}
    >
      <FiSidebar/>
    </button>
    )
  } else {
    return <SideBarLayout setDisplay={setDisplay}/>
  }
    

}

export default LocalFoodMenuIcon;