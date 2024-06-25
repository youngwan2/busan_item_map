import styles from '../TraditionalFood.module.scss';
import { TraditionalProductType } from '@/types/Traditional.types';
import TraditionalFoodCard from './TraditionalFoodCard';

interface PropsType {
  products: TraditionalProductType[];
}

export default function TraditionalFoodList({ products }: PropsType) {
  return (
    <div className={styles.traditional_food_card}>
      {products?.map((product: TraditionalProductType) => {
        return (
          <TraditionalFoodCard key={product.product_id} product={product} />
        );
      })}
    </div>
  );
}
