
import { NutritionProductType } from '@/types/Nutrition.types'
import styles from '@pages/Nutrition/Nutrition.module.scss'

interface PropsType {
    product:NutritionProductType
 }
  
export default function SummaryCard({product}:PropsType) {
return (
    <div className={styles.product_card}>
    <div className={styles.product_card_content}>
        <h3> {product.PRODUCT_NAME}</h3>
    </div>
    <div className={styles.product_card_content}>
        <strong>식별번호</strong>
        <p>{product.id}</p>
    </div>
    <div className={styles.product_card_content}>
        <strong>일반음식</strong>
        <p>{product.PRODUCT_ORIGIN_NAME}</p>
    </div>
    <div className={styles.product_card_content}>
        <strong>총중량</strong>
        <p>{product.FOOD_WEIGHT}</p>
    </div>
    <div className={styles.product_card_content}>
        <strong>단위중량</strong>
        <p>{product.BASE_QY}</p>
    </div>
    <div className={styles.product_card_content}>
        <strong>출처</strong>
        <p>{product.DATA_ORIGIN}</p>
    </div>
    <div className={styles.product_card_content}>
        <strong>갱신일자</strong>
        <p>{product.BASE_DATE}</p>
    </div>
    <div className={styles.product_card_content}>
        <strong>생성일자</strong>
        <p>{product.CREATION_DATE}</p>
    </div>
</div>
)}