import styles from "./Header.module.css";
import { Link,useNavigate } from "react-router-dom";

interface HeaderType{
    isStyle:boolean
}
function Header({isStyle}:HeaderType) {

    const navigate = useNavigate()
  return (
    <header className={styles.header} style={isStyle?{backgroundColor: 'rgba(61, 61, 255, 0.894)'}:{backgroundColor:' rgba(0, 0, 0, 0.528)'}}>
      <div className={styles.header_flex}>
        <h1 className={styles.home_log} onClick={()=>{
            navigate('/busan_item_map')
        }}>FoodPick</h1>
        <nav className={styles.menu}>
          <ul>
            <li>식품영양정보조회</li>
            <li>
              <Link to={"/busan_item_map/item"}>부산생필품정보</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
