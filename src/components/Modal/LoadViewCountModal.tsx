import styles from './LoadViewCountModal.module.scss';

import { useState } from 'react';


interface Type {
  type?:boolean
  totalProductCount:number,
  currentProductCount: number;
}

export default function LoadViewCountModal({type, totalProductCount =0, currentProductCount }: Type) {
  const [messageSpanDisplay, setMessageSpanDisplay] = useState(true);
  return (
    <aside
      className={`${styles.message_container} ${!messageSpanDisplay? styles.active:''}`}
    >
      <button
        onClick={() => {
          setMessageSpanDisplay((old) => (old = !old));
        }}
      >
        {'←'}
      </button>
      <span
        className={styles.message}
      >
        {type && Math.ceil(totalProductCount)+' 페이지 중 '+ currentProductCount+' 페이지 조회..' }
        {!type && totalProductCount +'개 중 '+currentProductCount+'개 상품 조회..' }
        
      </span>
    </aside>
  );
}
