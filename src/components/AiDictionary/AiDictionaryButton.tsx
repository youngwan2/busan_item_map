import { MouseEventHandler } from "react"
import { BsRobot } from "react-icons/bs";

import styles from './AiDictionary.module.scss'
interface PropsType {
  onClick:MouseEventHandler<HTMLButtonElement>
}
export default function AiDictionaryButton({onClick}:PropsType) {

  return (
    <button title="인공지능 검색 버튼" className={styles.ai_search_button} onClick={onClick}>
        <BsRobot/> <span>AI 가 알려드림</span>
    </button>
  )
}