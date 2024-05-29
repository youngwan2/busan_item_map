
import { NutritionProductType } from '@/types/Nutrition.types'
import styles from '@pages/Nutrition/Nutrition.module.scss'

interface PropsType {
    product: NutritionProductType
}
export default function MacroNutrientCard({ product }: PropsType) {
    return (
        <div className={styles.product_card}>
            <div className={styles.product_card_content}>
                <h3>3대 영양소</h3>
            </div>
            <div className={styles.product_card_content}>
                <strong>탄수화물</strong>
                <p>{product.CARBOH_QY}</p>
            </div>
            <div className={styles.product_card_content}>
                <strong>단백질</strong>
                <p>{product.PROTEIN_QY}</p>
            </div>
            <div className={styles.product_card_content}>
                <strong>지방</strong>
                <p>{product.FAT_QY}</p>
            </div>

        </div>
    )
}