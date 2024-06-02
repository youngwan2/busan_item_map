import { forwardRef, } from 'react';
import styles from '@pages/Nutrition/Nutrition.module.scss';

import SummaryCard from './ProductCardChildren/SummaryCard';
import VitaminInfoCard from './ProductCardChildren/VitaminInfoCard';
import MacroNutrientCard from './ProductCardChildren/MacroNutrientCard';
import FiberInfoCard from './ProductCardChildren/FiberInfoCard';

import { type NutritionProductType } from '@/types/Nutrition.types';

interface PropsType {
    product: NutritionProductType;
    onNext: (index: number) => void
    onPrev: (index: number) => void
    index: number
}
const NutritionProductCard = forwardRef(({ product, onNext, onPrev, index }: PropsType, ref: any) => {

    return (
        <div>
            <div className={styles.product_card_control_btn_container}>
                <button aria-label='이전 슬라이드 버튼' className={styles.product_card_control_button} onClick={() => onPrev(index)}> 이전 </button>
                <button aria-label='다음 슬라이드 버튼' className={styles.product_card_control_button} onClick={() => onNext(index)}> 다음 </button>
                <p>{product.PRODUCT_NAME}</p>
            </div>
            <div
                data-index={index}
                className={`${styles.product_card_container} product_card_container`}
                ref={(element) => {
                    if (!(element instanceof HTMLDivElement)) return
                    if (ref.current.length >= 20) return
                    ref.current.push(element)
                }}>
                <SummaryCard product={product} />
                <VitaminInfoCard product={product} />
                <MacroNutrientCard product={product} />
                <FiberInfoCard product={product} />

            </div>
        </div>
    );
}
);

export default NutritionProductCard;
