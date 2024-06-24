import styles from '@pages/Local/LocalDetail.module.scss'
import { localFoodType } from "../types/localFood.types"

interface PropsType {
    info: localFoodType
}

export default function LeftContent({ info }: PropsType) {
    const { sub_title, title, content, main_thumb_url } = info
    return (
        <div className={styles.left_content}>
            <h3 className={styles.sub_title}>{sub_title}</h3>
            <h2 className={styles.title}>{title}</h2>
            <img
                className={styles.thumb}
                src={main_thumb_url || '/not-image.png'}
                alt="썸네일 이미지"
            />
            <p className={styles.sumary}>{content}</p>
        </div>
    )
}