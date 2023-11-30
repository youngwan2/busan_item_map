import styles from '../LocalFood.module.scss'
import {FiSidebar} from 'react-icons/fi'
import SideBarOverlay from './SideBarOverlay';
interface PropsType {
    setDisplay: (p: boolean) => void;
    display : boolean
}
const LocalFoodMenuIcon = ({setDisplay, display}:PropsType) =>  {

  // 사이드 바가 안 보일 때 메뉴 아이콘이 보임
  if(!display) {
    return (
      <button
      aria-label='향토음식 페이지 메뉴 버튼'
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
    // 사이드 바가 보일 때 메뉴 아이콘은 사라지고, 사이드바와 함께 오버레이 영역이 활성화
    return <SideBarOverlay setDisplay={setDisplay}/>
  }
}

export default LocalFoodMenuIcon;