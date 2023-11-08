import { useState, useRef, Dispatch, SetStateAction, forwardRef } from "react";
import styles from "../Gpt.module.scss";
import axios from "axios";

type Content = {
  target: string;
  comment: string;
};

interface PropsType {
  setLoading: (p: boolean) => void;
  loading: boolean;
  setConversations: Dispatch<SetStateAction<Content[]>>;
  list: Content[];
}

const GptForm = forwardRef<HTMLUListElement | null, PropsType>(
  ({ setLoading, loading, list, setConversations }, ulRef) => {
    const [prompt, setPrompt] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    function reqGPT(prompt: string) {
      setLoading(true);

      list.push({ target: "user", comment: prompt });

      if (process.env.NODE_ENV !== "production") {
        axios
          .post("http://localhost:3000/gpt", { prompt })
          .then((result) => {
            list.push({ target: "AI상담사", comment: result.data.text });
            setConversations((prev: Content[]) => {
              return (prev = list);
            });
            console.log(list);
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
            setConversations((prev) => {
              return (prev = list);
            });
            console.log(list);
            if (inputRef.current) inputRef.current.value = "";

            setLoading(false);
            // @ts-ignore
            if (loading === true && ulRef.current) {
              // @ts-ignore
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
          type="text"
          className={styles.user_input}
          onKeyUp={(e) => {
            setPrompt(e.currentTarget.value);
            if (e.code === "Enter") {
              reqGPT(e.currentTarget.value);
            }
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
      </form>
    );
  }
);

export default GptForm;
