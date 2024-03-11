import { useState, useRef, useEffect } from 'react';
import { ItemsType } from '../types/Haccp.types';
import styles from '../Haccp.module.scss';
import HaccpMessage from './HaccpMessage';

interface Type {
  items: ItemsType[];
  setModal: (a: boolean) => void;
  setProductId: (a: string) => void;
  modal: boolean;
}

function HccpResult({ items, setModal, setProductId, modal }: Type) {
  const containerRef = useRef<HTMLBaseElement>(null);
  const totalItemCount = items.length;
  const [visibleHCCP, setVisibleHCCP] = useState<ItemsType[]>([]);

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
      <HaccpMessage currentPage={visibleHCCP.length} totalPage={totalItemCount} />
      {Array.isArray(items) ? (
        visibleHCCP.map((item, i) => {
          return (
            // 조회된 각 아이템
            <figure
              key={i}
              onClick={() => {
                setModal(true); // 모달 활성화
                setProductId(item.item.prdlstReportNo); // 선택한 아이템 id 상태 관리
              }}
            >
              <div id="item_box" role="listitem">
                <img src={`${item.item.imgurl1}`} alt="상품이미지"></img>
                <p>{item.item.prdlstNm}</p>
              </div>
            </figure>
          );
        })
      ) : (
        <div>{modal}</div>
      )}
    </section>
  );
}

export default HccpResult;
