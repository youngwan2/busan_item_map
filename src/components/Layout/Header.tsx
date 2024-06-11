import styles from './Header.module.scss';

import { useEffect, useState } from 'react';

import Nav from '../Nav';

import { Link } from 'react-router-dom';
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
        <h1 title='사이트 로고' aria-label="클릭 시 홈으로 이동" className={styles.home_log} >
          <Link to='/'>FoodPicker</Link>
          
        </h1>
        {/* 메뉴 */}
        <button title='메뉴 버튼' aria-label='메뉴 버튼' onClick={onClickDropDown} className={`${styles.menu_icon} ${isShow ? styles.open_menu : ''}`}>{!isOpenModal ? <HiMenu /> : <HiXCircle />}</button>
        <Nav isOpen={isOpenModal} />
      </div>
    </header>
  );
}

export default Header;
