import axios from "axios";
import styles from "./gpt.module.css";
import { useState, useRef } from "react";

type Content = {
  target: string;
  comment: string;
};

function GPT() {
  const [prompt, setPrompt] = useState("");
  const [conversations, setConversations] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [display, setDisplay] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function reqGPT(prompt: string) {
    setLoading(true);
    const list = [...conversations];
    list.push({ target: "user", comment: prompt });
    axios
      .post("http://localhost:3000/gpt", { prompt })
      .then((result) => {
        list.push({ target: "AI상담사", comment: result.data.text });
        setConversations((prev) => {
          return (prev = list);
        });
        console.log(list);
        if (inputRef.current) inputRef.current.value = "";
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <button
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
      <article
        className={styles.gpt_container}
        style={
          display
            ? { visibility: "visible", opacity: 1, transform: "scale(1)",transformOrigin:'bottom right'  }
            : { visibility: "hidden", opacity: 0,transform: "scale(0)",transformOrigin:'bottom right' }
        }
      >
        <h2 className={styles.chat_title}>FoodPick</h2>
        <button
          className={styles.close_btn}
          onClick={() => {
            setDisplay(false);
          }}
        >
          X
        </button>
        <ul className={styles.content_ul}>
          {conversations[0] === undefined && (
            <li className={styles.chat_meg}>
              음식과 관련한 궁금증을 물어보세요!
            </li>
          )}
          {loading&&<li className={styles.loading_meg}> 잠시만 기다려주세요. 열심히 답변 중 입니다.</li>}
          {conversations.map((content: Content, i: number) => {
            return (
              <li key={i} style={{ margin: "10px 0" }}>
                <p
                  style={
                    content.target === "user"
                      ? {
                          left: "14.8%",
                          textAlign: "right",
                          background: "rgb(46, 143, 395)",
                        }
                      : { background: "rgb(26, 113, 395)" }
                  }
                  className={styles.comment}
                >
                  {content.comment}
                </p>
              </li>
            );
          })}
        </ul>
        <div className={styles.input_area}>
          <input
            ref={inputRef}
            type="text"
            className={styles.user_input}
            onKeyUp={(e) => {
              setPrompt(e.currentTarget.value);
            }}
          ></input>
          <button
            className={styles.submit_btn}
            onClick={() => {
              reqGPT(prompt);
            }}
          >
            전송
          </button>
        </div>
      </article>
    </>
  );
}

export default GPT;
