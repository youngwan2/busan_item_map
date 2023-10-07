import styles from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
interface HeaderType {
  isStyle: boolean;
}
function Header({ isStyle }: HeaderType) {
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(0);
  const [onDisplay, setOnDisplay] = useState(false);

  function menuDisplayFun() {
    setOnDisplay((result) => (result = !result));
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  });
  return (
    <div
      className="header_scroll"
      style={
        scroll > 50
          ? { visibility: "hidden", transform: `translateY(-100px)` }
          : { visibility: "visible", transform: `translateY(-8px)` }
      }
    >
      <header
        className={styles.header}
        style={
          isStyle
            ? { backgroundColor: "rgba(61, 61, 255, 0.794)" }
            : { backgroundColor: " rgba(0, 0, 0, 0.528)" }
        }
      >
        <div className={styles.header_flex}>
          <h1>
            <span
              className={styles.home_log}
              onClick={() => {
                navigate("/");
              }}
            >
              FoodPick
            </span>
          </h1>
          <nav className={onDisplay ? styles.onMenu : styles.offMenu}>
            <button
              className={styles.closeBtn}
              style={!onDisplay ? { display: "none" } : { display: "block" }}
              onClick={menuDisplayFun}
            >
              X
            </button>
            <ul>
              <li>
                <Link to={"/localfood"}>향토음식조회</Link>
              </li>
              <li>
                <Link to={"/nutrition"}>식품영양정보조회</Link>
              </li>
              <li>
                <Link to={"/item"}>부산생필품정보</Link>
              </li>
              <li>
                <Link to={"/haccp"}>HACCP제품정보조회</Link>
              </li>
            </ul>
          </nav>
          {/* 가로 624 px 이하 부터 적용 */}
          <button
            className={styles.menu_icon}
            onClick={menuDisplayFun}
            style={
              onDisplay ? { visibility: "hidden" } : { visibility: "visible" }
            }
          >
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
