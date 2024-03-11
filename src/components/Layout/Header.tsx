import styles from './Header.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HiMenu } from 'react-icons/hi';
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

  function scrollTrace() {
    setScroll(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener('scroll', scrollTrace);
    return () => {
      window.removeEventListener('scroll', scrollTrace);
    };
  }, [scroll]);

  return (
    <header
      className={styles.header}
      style={
        isStyle
          ? { backgroundColor: 'rgba(61, 61, 255, 0.794)' }
          : { backgroundColor: 'transparent', boxShadow: 'none' }
      }
    >
      <div className={styles.header_flex}>
        <h1>
          <span
            className={styles.home_log}
            onClick={() => {
              navigate('/');
            }}
          >
            Food Picker
          </span>
        </h1>
        <nav className={onDisplay ? styles.onMenu : styles.offMenu}>
          <button
            className={styles.closeBtn}
            style={!onDisplay ? { display: 'none' } : { display: 'block' }}
            onClick={menuDisplayFun}
          >
            X
          </button>
          <ul>
            <li className={styles.main_menu_con}>
              <Link to={'#'}>향토 이야기</Link>
              <ul className={styles.main_menu_ul}>
                <li>
                  <Link to={'/localfood'}>향토음식조회</Link>
                </li>
              </ul>
            </li>
            <li className={styles.main_menu_con}>
              <Link to={'#'}>조회 서비스</Link>
              <ul className={styles.main_menu_ul}>
                <li>
                  <Link to={'/nutrition'}>식품영양정보조회</Link>
                </li>

                <li>
                  <Link to={'/haccp'}>HACCP제품정보조회</Link>
                </li>
                <li>
                  <Link to={'/recipe'}>레시피정보조회</Link>
                </li>
                <li>
                  <Link to={'/child-diet'}>유아 식단 정보</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* 가로 624 px 이하 부터 적용 */}
        <button
          className={styles.menu_icon}
          aria-label="웹 사이트 메뉴 버튼"
          onClick={menuDisplayFun}
          style={onDisplay ? { visibility: 'hidden' } : { visibility: 'visible' }}
        >
          <HiMenu />
        </button>
      </div>
    </header>
  );
}

export default Header;
