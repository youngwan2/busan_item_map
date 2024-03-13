import { useState, useRef, useEffect } from 'react';
import { ItemsType } from '../types/Haccp.types';
import styles from '../Haccp.module.scss';
import HaccpGuide from './HaccpGuide';
import HaccpProductList from './HaccpProductList';

interface Type {
  items?: ItemsType[];
  setModal: (a: boolean) => void;
  setProductId: (a: string) => void;
}

function HccpResult({ items, setModal, setProductId }: Type) {
  const containerRef = useRef<HTMLBaseElement>(null);
  const totalItemCount = Array.isArray(items) ? items.length : 0
  const [visibleHCCP, setVisibleHCCP] = useState<ItemsType[]>([]);


  function onClickOpenModal(id: string) {
    setModal(true); // 모달 활성화
    setProductId(id); // 선택한 아이템 id 상태 관리
  }

  // 초기 렌더링 값 지정
  useEffect(() => {
    if (items) {
      const currentPage = Number(sessionStorage.getItem('currentHccp')) || 10;
      const initialItems = items.slice(0, currentPage);
      setVisibleHCCP(initialItems);
    }
  }, [items]);

  useEffect(() => {
    function handleScroll() {
      if (items && visibleHCCP.length > 0) {
        if (containerRef.current?.getBoundingClientRect().bottom! < window.innerHeight + 100) {
          const length = visibleHCCP.length;
          const nextHccp = items?.slice(length, length + 10);
          if (nextHccp && nextHccp.length > 0) setVisibleHCCP((prev) => [...prev, ...nextHccp]);
          sessionStorage.setItem('currentHccp', `${visibleHCCP.length}`);
        }
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleHCCP]);

  return (
    <section className={styles.content_container} ref={containerRef}>
      <HaccpGuide currentPage={visibleHCCP.length} totalPage={totalItemCount} />
      <HaccpProductList products={visibleHCCP} onClickOpenModal={onClickOpenModal} />
    </section>
  );
}

export default HccpResult;
