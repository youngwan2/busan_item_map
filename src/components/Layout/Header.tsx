import styles from './Header.module.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Nav from '../UI/Nav';
import { HiMenu, HiXCircle } from 'react-icons/hi';
import { useAppSelector } from '../../app/hooks';


function Header() {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(true);

  const headerTheme =  useAppSelector(state => state.headerTheme)

  function onClickHomeMove() { navigate('/') }
  function onClickDropDown() { setIsShow((result) => (result = !result)); }

  function resize() {
    const viewWidth = window.innerWidth
    if (viewWidth > 768) {
      setIsShow(true)
    } else {
      setIsShow(false)
    }

  }

  useEffect(()=>{
    window.addEventListener('load',resize)
    return ()=>{
      window.removeEventListener('load', resize)
    }
  },[])
  useEffect(() => {
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <header
      className={`${styles.Header} ${headerTheme.isChange? styles.theme:null}`}
    >
      <h1 className={styles.home_log} onClick={onClickHomeMove}>
        Food Picker
      </h1>
      {/* 메뉴 */}
      <button onClick={onClickDropDown} className={`${styles.menu_icon} ${isShow ? styles.open_menu : ''}`}>{!isShow ? <HiMenu /> : <HiXCircle />}</button>
      <Nav isShowMenu={isShow} onClickDropDown={onClickDropDown} />
    </header>
  );
}

export default Header;
