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
      Draggable.create(buttonRef.current);
    }
  }, []);

  return (
    <button
      ref={buttonRef}
      style={
        !display
          ? { visibility: "visible", transform: "scale(1)" }
          : { visibility: "hidden", transform: "scale(0)" }
      }
      className={styles.chat_icon}
      onClick={() => {
        setDisplay(!display);
      }}
    ></button>
  );
};

export default GptOpenIcon;
