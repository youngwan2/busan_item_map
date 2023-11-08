import { useRef, Dispatch, SetStateAction } from "react";

import styles from "../Gpt.module.scss";
import GptForm from "./GptForm";

interface Content {
  target: string;
  comment: string;
}

interface PropsType {
  conversations: Content[];
  setConversations: Dispatch<SetStateAction<Content[]>>;
  list: Content[];
  loading: boolean;
  setLoading: (p: boolean) => void;
}

const GptChatBox = ({
  conversations,
  setConversations,
  loading,
  list,
  setLoading,
}: PropsType) => {

  const ulRef = useRef<HTMLUListElement>(null);

  return (
    <>
      <ul className={styles.content_ul} ref={ulRef}>
        {conversations[0] === undefined && (
          <li className={styles.chat_meg}>
            음식과 관련한 궁금증을 물어보세요! <br />
            ex) 아르기닌은 무엇인가요?
          </li>
        )}
        {loading && (
          <li className={styles.loading_meg}>
            {" "}
            잠시만 기다려주세요. 열심히 답변 중 입니다.
          </li>
        )}
        {conversations.map((content: Content, i: number) => {
          return (
            <ChatList key={i} content={content}/>
          );
        })}
      </ul>
      <GptForm
        list={list}
        loading={loading}
        setConversations={setConversations}
        setLoading={setLoading}
        ref={ulRef}
      />
    </>
  );
};

/* 대화목록 */
const ChatList = ({content}:{content:Content}) => {

    return (
        <li style={{ margin: "10px 0" }} className={styles.chat_li}>
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
    )
}
export default GptChatBox;
