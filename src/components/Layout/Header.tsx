import styles from './Header.module.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Nav from '../UI/Nav';
import { HiMenu, HiXCircle } from 'react-icons/hi';
interface HeaderType {
  isStyle: boolean;
}

function Header({ isStyle }: HeaderType) {
  const navigate = useNavigate();

  const [isShow, setIsShow] = useState(true);

  function onClickDropDown() {
    setIsShow((result) => (result = !result));
  }

  function resize() {

    const viewWidth = window.innerWidth
    if (viewWidth > 768) {
      setIsShow(true)
    } else {
      setIsShow(false)
    }

  }
  useEffect(() => {
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
    }

  })

  return (
    <header
      className={styles.Header}
    >
      <h1 className={styles.home_log} onClick={() => {
        navigate('/');
      }}>
        Food Picker
      </h1>
      {/* 메뉴 */}
      <button onClick={onClickDropDown} className={`${styles.menu_icon} ${isShow ? styles.open_menu : ''}`}>{ !isShow ? <HiMenu /> : <HiXCircle />}</button>
      <Nav isShowMenu={isShow} onClickDropDown={onClickDropDown} />

      {/* 가로 624 px 이하 부터 적용 */}
      {/* <button
        className={styles.menu_icon}
        aria-label="모바일 메뉴 버튼"
        onClick={onClickDropDown}
        style={isShow ? { visibility: 'hidden' } : { visibility: 'visible' }}
      >
        <HiMenu />
      </button> */}
    </header>
  );
}

export default Header;
