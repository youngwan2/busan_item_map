/*global kakao*/

import styles from './Map.module.css';
import MapCloseBtn from './MapCloseBtn';
import MapRender from './MapRender';
import useMap from '../../../hooks/useMap';

interface PropsType {
  la: string;
  lo: string;
  bss: string;
  isDisplay: boolean;
  setIsDisplay: (state: boolean) => void;
}

function Map({ la, lo, bss, isDisplay, setIsDisplay }: PropsType) {
  /**
   * @argument la : 위도
   * @argument lo : 경도
   * @argument bss : 주소
   * @argument id : Map 식별자
   */
  const id = 'busanMap';
  useMap(la, lo, bss, id, '');
  return (
    <article
      onDoubleClick={() => {
        setIsDisplay && setIsDisplay(!isDisplay);
      }}
      className={styles.Map}
      style={isDisplay ? { display: 'none' } : { display: 'block' }}
    >
      {/* 지도 닫기 버튼 */}
      <MapCloseBtn setIsDisplay={setIsDisplay} isDisplay={isDisplay} />
      {/* 지도 표시 */}
      <MapRender id={id} />
    </article>
  );
}

export default Map;
