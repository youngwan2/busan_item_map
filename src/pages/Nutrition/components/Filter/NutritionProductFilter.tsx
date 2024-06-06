import styles from '@pages/Nutrition/NutritionProductFliter.module.scss'

import { ChangeEventHandler } from 'react'

import RestaurantFilter from './RestaurantFilter'
import FoodTypeFilter from './FoodTypeFilter'
import KcalRangeFilter from './KcalRangeFilter'
import { onSubmit } from '@/utils/helpers'

interface PropsType {
    onChangeFoodTypeValue:ChangeEventHandler<HTMLInputElement>
    onChangeRestaurantValue: ChangeEventHandler<HTMLInputElement>

}

export default function NutritionProductFilter({ onChangeFoodTypeValue,onChangeRestaurantValue }: PropsType) {

    return (
        <form
        className={`${styles.nutrition_product_filter_container}`} onSubmit={onSubmit}>
            <h2 className={styles.nutrition_product_filter_title}>필터</h2>
            {/* 상호명 필터 */}
            <RestaurantFilter onChangeRestaurantValue={onChangeRestaurantValue} />

            {/* 가공/일반 */}
            <FoodTypeFilter onChangeFoodTypeValue={onChangeFoodTypeValue} />

            {/* 칼로리 범위 */}
            <KcalRangeFilter  />
        </form>
    )
}