import styles from './NaverDictionary.module.scss';
import { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import NaverDictionaryView from './components/NaverDictionaryView';
import Overlay from './components/Overlay';
import { useGSAP } from '@gsap/react';

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

  useGSAP(() => {
    if (!buttonRef.current) return
      Draggable.create(buttonRef.current, {
        bounds: document.documentElement,
        onClick: function () {
          setDisplay(!display);
        },
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
      <NaverDictionaryView display={display} setDisplay={setDisplay} />
      <Overlay display={display} setDisplay={setDisplay}></Overlay>
    </>
  );
}

export default NavSearch;
