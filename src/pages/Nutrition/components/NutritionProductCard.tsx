import styles from '@pages/Nutrition/Nutrition.module.scss'

import SummaryCard from './ProductCardChildren/SummaryCard'
import VitaminInfoCard from './ProductCardChildren/VitaminInfoCard'
import MacroNutrientCard from './ProductCardChildren/MacroNutrientCard'
import FiberInfoCard from './ProductCardChildren/FiberInfoCard'

import { type NutritionProductType } from '@/types/Nutrition.types'

interface PropsType {
    product: NutritionProductType
}

export default function NutritionProductCard({ product }: PropsType) {

    return (
        <div className={`${styles.product_card_container} product_card_container`}
        >
            <SummaryCard product={product} />
            <VitaminInfoCard product={product} />
            <MacroNutrientCard product={product} />
            <FiberInfoCard product={product} />
        </div>
    )
}