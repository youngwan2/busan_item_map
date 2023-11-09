import { MouseEvent, useEffect, useRef } from "react";
import styles from "./IntroSlide.module.scss";


interface PropsType {
  pageSwitch:(e:MouseEvent<HTMLUListElement>)=>void
  page:number
}


const IntroSlideButton =({pageSwitch, page}:PropsType) => {
const ulRef =useRef<HTMLUListElement>(null)

  useEffect(()=>{
    if(ulRef.current) {

      const childEl = [...ulRef.current.children]
      childEl.forEach((el)=>{
        if(el instanceof HTMLElement) {
            const originIndex = Number(el.dataset.index)
            if(originIndex === page) {
              el.style.cssText = `
                transform: scale(1.5);
                color:black;
                background: white;
              `
            } else {
              el.style.cssText = `
              transform: scale(1.1, 1);
              color:white;
              background: black;
            `
            }
        }
      })

    }

  },[page])
  

  return (
    <ul className={styles.menu} onClick={pageSwitch} ref={ulRef}>
      <li className={styles.list} data-index="1">1</li>
      <li className={styles.list} data-index="2">2</li>
      <li className={styles.list} data-index="3">3</li>
      <li className={styles.list} data-index="4">4</li>
      <li className={styles.list} data-index="5">5</li>
    </ul>
  );
}

export default IntroSlideButton;
