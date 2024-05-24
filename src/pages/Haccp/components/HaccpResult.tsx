import styles from '../Haccp.module.scss';

import { useRef, useState } from 'react';

import HaccpGuide from './HaccpGuide';
import HaccpProductList from './HaccpProductList';

import { HaccpProductItemType, HaccpProductPropertyType } from '../../../types/Haccp.types';
import HaccpModal from './HaccpModal';

interface PropsType {
  totalCount:number
  products?: HaccpProductItemType[];
}

function HccpResult({ products, totalCount}: PropsType) {
  const containerRef = useRef<HTMLBaseElement>(null);

  const [pickProductInfo, setPickProductInfo] = useState<HaccpProductPropertyType>(); // 사용자가 선택한 아이템
  const [isOpen, setIsOpen] = useState(false);

  
  const currentProductCount = Array.isArray(products) ? products.length : 0

  function onToggleOpenModal() {
    setIsOpen(old=>!old); // 모달 활성화
  }

  // 사용자가 선택한 상품의 일련번호와 일치하는 상품만 필터링한다.
  const onPickProduct = (productId: string) => {
    const result = products?.find((product) => {
      return product.item.prdlstReportNo === productId;
    });

    if (!result) return
    const product = result.item
    setPickProductInfo(product);
  }


  if (!products) return <p>현재 아이템이 존재하지 않습니다.</p>
  return (
    <section className={styles.content_container} ref={containerRef}>
      <HaccpGuide totalProductCount={totalCount} currentProductCount={currentProductCount} />
      <HaccpProductList products={products} onToggleOpenModal={onToggleOpenModal} onPickProduct={onPickProduct} />
      <HaccpModal product={pickProductInfo}  onToggleOpenModal={onToggleOpenModal} isOpen={isOpen} />
    </section>
  );
}

export default HccpResult;
