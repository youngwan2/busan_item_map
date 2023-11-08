import styles from "./NaverDictionary.module.scss";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import NaverDictionaryView from "./components/NaverDictionaryView";
import Overlay from "./components/Overlay";

export type DictionaryType = {
  title: string;
  thumbnail: string;
  link: string;
  description: string;
};

function NavSearch() {
  const [display, setDisplay] = useState(false);

  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(Draggable);
    if (spanRef.current) {
      Draggable.create(spanRef.current);
    }
  }, []);

  return (
    <>
      {/* 아이콘 */}
      <span
        ref={spanRef}
        role="button"
        className={styles.nav_search_icon}
        onClick={() => {
          setDisplay(!display);
        }}
      ></span>
      {/* 콘텐츠 뷰 */}
      <NaverDictionaryView display={display} setDisplay={setDisplay} />
      <Overlay display={display} setDisplay={setDisplay}></Overlay>
    </>
  );
}

export default NavSearch;
