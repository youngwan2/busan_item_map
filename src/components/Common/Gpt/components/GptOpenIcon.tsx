import { useRef, useEffect } from "react";
import styles from "../Gpt.module.scss";
import { gsap } from "gsap/gsap-core";
import { Draggable } from "gsap/Draggable";

interface PropsType {
  display: boolean;
  setDisplay: (p: boolean) => void;
}

const GptOpenIcon = ({ display, setDisplay }: PropsType) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    gsap.registerPlugin(Draggable);

    if (buttonRef.current) {
      Draggable.create(buttonRef.current, {
        bounds: document.documentElement,
        onClick: function() {
          console.log(1212)
          setDisplay(!display);
          console.log(display)
        }
      });
    }
  }, []);

  return (
    <button
      ref={buttonRef}
      aria-label="인공지능 채팅 상담 서비스 모달창을 띄우는 버튼"
      className={styles.chat_icon}
    ></button>
  );
};

export default GptOpenIcon;
