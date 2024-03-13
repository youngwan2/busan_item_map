import { MouseEventHandler } from 'react'
import styles from '../Haccp.module.scss'

interface PropsType {
    onClickSearch: MouseEventHandler<HTMLButtonElement>
}
export default function SearchButton({ onClickSearch }: PropsType) {
    return (

        <button
            type='button'
            className={styles.search_btn}
            onClick={onClickSearch}
        >
            조회
        </button>
    )
}