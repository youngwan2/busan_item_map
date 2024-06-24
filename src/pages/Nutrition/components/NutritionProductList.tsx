import { useRef, useEffect, useState } from 'react';

import NutritionProductCard from './NutritionProductCard';

import type { NutritionProductType } from '@/types/Nutrition.types';

interface PropsType {
  products: NutritionProductType[];
}
export default function NutritionProductList({ products }: PropsType) {
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    if (!cardRefs.current || cardRefs.current.length < 1) return;
    const cards = cardRefs.current as HTMLDivElement[];
    setPages(() => Array.from({ length: cards.length }, () => 1));

    return () => {
      cardRefs.current = [];
    };
  }, [products]);

  function onNextSlide(i: number) {
    const copy = [...pages];
    copy[i]++;
    setPages(copy);
    cardRefs.current[i].style.setProperty('--page-number', `${copy[i]}`);
  }

  function onPrevSlide(i: number) {
    const copy = [...pages];
    copy[i]--;
    setPages(copy);

    if (cardRefs.current[i].dataset.index === String(i)) {
      cardRefs.current[i].style.setProperty('--page-number', `${copy[i]}`);
    }
  }

  return (
    <>
      {products?.map((product: NutritionProductType, i) => {
        return (
          <NutritionProductCard
            onNext={onNextSlide}
            onPrev={onPrevSlide}
            key={product.id}
            product={product}
            index={i}
            ref={cardRefs}
          />
        );
      })}
    </>
  );
}
