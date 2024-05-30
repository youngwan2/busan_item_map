import styles from '@pages/Nutrition/Nutrition.module.scss'

import NutritionProductCard from './NutritionProductCard';

import type { NutritionProductType } from '@/types/Nutrition.types';
import LoadViewCountModal from '@/components/LoadViewCountModal';

interface PropsType {
  products: NutritionProductType[];
}


export default function NutritionProductList({ products }: PropsType){

  return (
      <section className={styles.product_list_container} >
        <h2 className={styles.product_list_title}>식품영양정보 목록</h2>

        {products?.map((product:NutritionProductType) => {
          return (
            <NutritionProductCard product={product} key={product.id}/>
           
          );
        })}
      </section>
  );
};


