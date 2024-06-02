
import { NutritionProductType } from '@/types/Nutrition.types'
import styles from '@pages/Nutrition/Nutrition.module.scss'

interface PropsType {
    product: NutritionProductType
}

export default function FiberInfoCard({ product }: PropsType) {
    return (

        <div className={styles.product_card}>
            <div className={styles.product_card_content}>
                <h3>식이섬유(단위:mg)</h3>
            </div>
            <div className={styles.product_card_content}>
                <strong>칼륨</strong>
                <p>{product.POTASSIUM_QY}</p>
            </div>
            <div className={styles.product_card_content}>
                <strong>칼슘</strong>
                <p>{product.CALCIUM_QY}</p>
            </div>
            <div className={styles.product_card_content}>
                <strong>나트륨</strong>
                <p>{product.NATRIUM_QY}</p>
            </div>
            <div className={styles.product_card_content}>
                <strong>인</strong>
                <p>{product.PHOSPHORUS_QY}</p>
            </div>
            <div className={styles.product_card_content}>
                <strong>철분</strong>
                <p>{product.IRON_QY}</p>
            </div>
        </div>
    )
}