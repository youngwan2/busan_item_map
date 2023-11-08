import styles from "./Gpt.module.scss";
import { useState } from "react";

import GptChatBox from "./components/GptChatBox";
import GptOpenIcon from "./components/GptOpenIcon";

interface Content {
  target: string;
  comment: string;
}

function Gpt() {
  const [conversations, setConversations] = useState<Content[]>([]);
  const [loading, setLoading] = useState(false);
  const [display, setDisplay] = useState(false);

  const list = [...conversations];

  return (
    <>
      <GptOpenIcon display={display} setDisplay={setDisplay} />
      <article
        className={styles.gpt_container}
        style={
          display
            ? {
                visibility: "visible",
                opacity: 1,
                transform: "scale(1)",
                transformOrigin: "bottom right",
              }
            : {
                visibility: "hidden",
                opacity: 0,
                transform: "scale(0)",
                transformOrigin: "bottom right",
              }
        }
      >
        <h2 className={styles.chat_title}>FoodPick</h2>
        <GptCloseIcon setDisplay={setDisplay}/>
        <GptChatBox
          conversations={conversations}
          setConversations={setConversations}
          loading={loading}
          setLoading={setLoading}
          list={list}
        />
      </article>
    </>
  );
}

/* 닫기 아이콘 */
const GptCloseIcon = ({ setDisplay }: { setDisplay: (p: boolean) => void }) => {
  return (
    <button
      className={styles.close_btn}
      onClick={() => {
        setDisplay(false);
      }}
    >
      X
    </button>
  );
};

export default Gpt;
