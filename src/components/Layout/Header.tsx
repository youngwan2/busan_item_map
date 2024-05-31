import styles from './Header.module.scss';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Nav from '../UI/Nav';

import { HiMenu, HiXCircle } from 'react-icons/hi';

function Header() {
  const [isShow, setIsShow] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false)


  function onClickDropDown() { setIsOpenModal(old => !old) }

  function resize() {
    const viewWidth = window.innerWidth
    if (viewWidth >= 1240) {
      setIsShow(true)
      setIsOpenModal(true)
    } else {
      setIsShow(false)
      setIsOpenModal(false)
    }

  }

  useEffect(() => {
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [isShow])

  useEffect(() => {
    window.addEventListener('load', resize)
    return () => {
      window.removeEventListener('load', resize)
    }
  }, [isShow])

  return (
    <header
      className={`${isShow ? styles.active : ''} ${styles.Header}`}
    >
      <div className={styles.header_inner_bondary}>
        <h1 className={styles.home_log} >
          <Link to='/'>FoodPicker</Link>
          
        </h1>
        {/* 메뉴 */}
        <button onClick={onClickDropDown} className={`${styles.menu_icon} ${isShow ? styles.open_menu : ''}`}>{!isOpenModal ? <HiMenu /> : <HiXCircle />}</button>
        <Nav isOpen={isOpenModal} />
      </div>
    </header>
  );
}

export default Header;
