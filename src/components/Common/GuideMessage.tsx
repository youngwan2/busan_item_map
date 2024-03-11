import { Link } from "react-router-dom";
import styles from './GuideMessage.module.scss'

interface PropsType {
    path: string, 
    mainName: string, 
    subName?: string, 
    totalCount?: number
}

export default function GuideMessage({ path, mainName, subName, totalCount }: PropsType) {


    return (
        <article className={styles.guide} ><Link to={path}>{mainName}</Link>{subName?'>' + subName :null}{totalCount?`(${totalCount})`:null}</article>
    )
}