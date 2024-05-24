import { MouseEventHandler } from 'react'
import styles from './Search.module.scss'

interface PropsType {
    onSearch: MouseEventHandler<HTMLButtonElement>
    buttonOptions: {
        text: string
        type?: "submit" | "reset" | "button"
    }
}
export default function SearchButton({ onSearch, buttonOptions }: PropsType) {
    const {type, text} = buttonOptions
    return (
        <button
            type={type}
            className={styles.search_btn}
            onClick={onSearch}
        >
            {text}
        </button>
    )
}