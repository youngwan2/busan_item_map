
import styles from './Maps.module.scss'

import { HiChevronLeft } from "react-icons/hi2";

interface PropsType {
    id:string
    title: string
    onClick:()=>void

}

export default function MapRoadViewCloseButton({onClick, title, id}:PropsType) {
    return (
        <button
            className={styles.map_loadview_close_button}
            id={id}
            title={title}
            onClick={onClick}
        >
            <HiChevronLeft/>
        </button>
    )
}