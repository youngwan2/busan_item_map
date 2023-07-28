import styles from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'

interface HeaderType {
  isStyle: boolean;
}
function Header({ isStyle }: HeaderType) {
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY)
    })
  })
  return (
    <div className="header_scroll" style={scroll > 50 ? { visibility: 'hidden', transform: `translateY(-100px)` } : { visibility: 'visible', transform: `translateY(-8px)` }} >
      <header
        className={styles.header}
        style={
          isStyle
            ? { backgroundColor: "rgba(61, 61, 255, 0.794)" }
            : { backgroundColor: " rgba(0, 0, 0, 0.528)" }
        }
      >
        <div className={styles.header_flex}>
          <h1
            className={styles.home_log}
            onClick={() => {
              navigate("/busan_item_map");
            }}
          >
            FoodPick
          </h1>
          <nav className={styles.menu}>
            <ul>
              <li>
                <Link to={"/busan_item_map/search"}>식품영양정보조회</Link>
              </li>
              <li>
                <Link to={"/busan_item_map/item"}>부산생필품정보</Link>
              </li>
            </ul>
          </nav>
          {/* 가로 624 px 이하 부터 적용 */}
          <button className={styles.menu_icon}>메뉴</button>
        </div>
      </header>
    </div>
  );
}

export default Header;
