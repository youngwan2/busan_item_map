import { Link } from 'react-router-dom'
import styles from '../TraditionalFood.module.scss'
import { TraditionalProductType } from "@/types/Traditional.types"

interface PropsType {
  product: TraditionalProductType
}

export default function TraditionalFoodCard({ product }: PropsType) {
  return (
    <ul className={styles.traditional_food_card_inner_wrapper}>
      <li className={`${styles.traditional_food_card_content} ${styles.card_title}`}><h3>{product.name}</h3></li>
      <li className={styles.traditional_food_card_content}>{product.food_type}</li>
      <li className={styles.traditional_food_card_content}>{product.main_category + '>' + product.sub_category + '>' + product.detail_category}</li>
      {/* <li className={styles.traditional_food_card_content}><Link to={'/traditional/' + product.product_id} >{product.traditional_food_count}개 음식 조회 가능</Link></li> */}
    </ul>
  )
}