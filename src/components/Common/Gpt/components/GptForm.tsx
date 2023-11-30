import { useState, useRef, forwardRef, ForwardedRef } from "react";
import styles from "../Gpt.module.scss";
import axios from "axios";

type Content = {
  target: string;
  comment: string;
};

interface PropsType {
  setLoading: (p: boolean) => void;
  loading: boolean;
  setConversations: (p:Content[])=>void;
  list: Content[];
}

const GptForm = forwardRef(({ setLoading, loading, list, setConversations }:PropsType, ulRef:ForwardedRef<HTMLUListElement>) => {
    const [prompt, setPrompt] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    function reqGPT(prompt: string) {
      setLoading(true);

      list.push({ target: "user", comment: prompt });

      if (import.meta.env.MODE !== "production") {
        axios
          .post("http://localhost:3000/gpt", { prompt })
          .then((result) => {
            list.push({ target: "AI상담사", comment: result.data.text });
            setConversations(list);
            if (inputRef.current) inputRef.current.value = "";
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        axios
          .post("/gpt", { prompt })
          .then((result) => {
            list.push({ target: "AI상담사", comment: result.data.text });
            setConversations(list)
            console.log(list);
            if (inputRef.current) inputRef.current.value = "";

            setLoading(false);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              //@ts-expect-error
            if (loading === true && ulRef.current !==null ) {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              //@ts-expect-error
              ulRef.current.scrollTo({ top: 1000000 });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className={styles.input_area}
      >
        <input
          placeholder="ex) 단백질에 대해 설명해주세요"
          ref={inputRef}
          type="search"
          className={styles.user_input}
          onKeyUp={(e) => {
            setPrompt(e.currentTarget.value);
          }}
        ></input>
        <button
          className={styles.submit_btn}
          onClick={() => {
            reqGPT(prompt);
            console.log(111)
          }}
        >
          전송
        </button>
      </form>
    );
  }
);

export default GptForm;
