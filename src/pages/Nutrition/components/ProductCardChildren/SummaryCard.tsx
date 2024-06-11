
import { NutritionProductType } from '@/types/Nutrition.types'
import styles from '@pages/Nutrition/Nutrition.module.scss'

interface PropsType {
    product: NutritionProductType
}

export default function SummaryCard({ product }: PropsType) {
    return (
        <div className={styles.product_card}>
            <div className={styles.product_card_content}>
                <strong>식별번호</strong>
                <p>{product.id}</p>
            </div>
            <div className={styles.product_card_content}>
                <strong>분류</strong>
                <p>{product.sort}</p>
            </div>
            <div className={styles.product_card_content}>
                <strong>총중량</strong>
                <p>{product.food_weight}</p>
            </div>
            <div className={styles.product_card_content}>
                <strong>단위중량</strong>
                <p>{product.base_g}</p>
            </div>
            <div className={styles.product_card_content}>
                <strong>칼로리</strong>
                <p>{product.kcal_g}kcal</p>
            </div>
            <div className={styles.product_card_content}>
                <strong>출처</strong>
                <p>{product.source_name}</p>
            </div>
            <div className={styles.product_card_content}>
                <strong>회사명</strong>
                <p>{product.company_name.replaceAll('해당없음', '').replaceAll(',', '') || '해당없음'}</p>
            </div>
            <div className={styles.product_card_content}>
                <strong>원산지</strong>
                <p>{product.origin_country_name}</p>
            </div>
            <div className={styles.product_card_content}>
                <strong>갱신일자</strong>
                <p>{product.data_reference_date}</p>
            </div>
            <div className={styles.product_card_content}>
                <strong>생성일자</strong>
                <p>{product.data_generation_date}</p>
            </div>
        </div>
    )
}