import styles from './Maps.module.scss'

import { BiReset } from "react-icons/bi";

interface PropsType {
    onClick: () => void
    isAtive:boolean
}

export default function MapResetButton({ isAtive,onClick }: PropsType) {
    return (
        <button title='초기화 버튼' onClick={onClick} className={`${isAtive? styles.active : ''} ${styles.map_position_reset_button}`}>
            <BiReset/>
        </button>
    )
}