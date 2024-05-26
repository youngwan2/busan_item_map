import styles from '../Haccp.module.scss';

import { useRef } from 'react';

import HaccpGuide from './HaccpGuide';
import HaccpProductList from './HaccpProductList';

import { HaccpProductItemType} from '../../../types/Haccp.types';

interface PropsType {
  totalCount:number
  products?: HaccpProductItemType[];
}

function HccpResult({ products, totalCount}: PropsType) {
  const containerRef = useRef<HTMLBaseElement>(null);


  
  const currentProductCount = Array.isArray(products) ? products.length : 0



  if (!products) return <p>현재 아이템이 존재하지 않습니다.</p>
  return (
    <>
    <section className={styles.content_container} ref={containerRef}>
      <h2 className={styles.haccp_product_list_title}>상품목록</h2>
      <HaccpGuide totalProductCount={totalCount} currentProductCount={currentProductCount} />
      <HaccpProductList products={products} />
      
    </section>
  </>
  )
}

export default HccpResult;
