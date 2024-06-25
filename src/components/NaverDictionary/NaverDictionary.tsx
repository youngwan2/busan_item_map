import styles from './NaverDictionary.module.scss';

import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';

import NaverDictionaryView from './components/NaverDictionaryView';

import { Draggable } from 'gsap/Draggable';
import { gsap } from 'gsap';

export type DictionaryType = {
  title: string;
  thumbnail: string;
  link: string;
  description: string;
};

function NavSearch() {
  gsap.registerPlugin(Draggable);

  const [display, setDisplay] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  function onClickToggleModal() {
    setDisplay((old) => !old);
  }

  useGSAP(() => {
    if (!buttonRef.current) return;
    Draggable.create(buttonRef.current, {
      bounds: document.documentElement,
      onClick: onClickToggleModal,
    });
  }, []);

  return (
    <>
      {/* 아이콘 */}
      <button
        aria-label="네이버 백과사전 아이콘"
        ref={buttonRef}
        className={styles.nav_search_icon}
      ></button>
      {/* 콘텐츠 뷰 */}
      <NaverDictionaryView isDisplay={display} onToggle={onClickToggleModal} />
    </>
  );
}

export default NavSearch;
