import styles from '../Necessities.module.scss';
import { ItemsType, laLoType } from '../types/Necessities.types';

/**
 * @param items : 부산 생필품 목록
 * @param {Function}setLaLo : 지도 위도/경도 설정
 * @param {Function}setIsDisplay : 지도 디스플레이 지정
 * @param {Function}setBsshNm : 판매점 설정
 */

interface PropsType {
  items?: ItemsType[];
  setLaLo: (p: laLoType) => void;
  setIsDisplay: (state: boolean) => void;
  isDisplay: boolean;
  setBsshNm: (p: string) => void;
}
const Table = ({ items, setLaLo, setIsDisplay, isDisplay, setBsshNm }: PropsType) => {
  return (
    <table className={styles.item_table}>
      <thead>
        <tr>
          <th>상품명</th>
          <th>판매점</th>
          <th>주소</th>
          <th>등록일</th>
          <th>카테고리</th>
          <th>단위</th>
          <th>단위 당 가격</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(items) ? (
          items.map((item, i) => {
            return (
              <tr
                key={i}
                onClick={() => {
                  setLaLo({ la: item.la, lo: item.lo });
                  setIsDisplay(!isDisplay);
                  setBsshNm(item.bsshNm);
                }}
              >
                <td>{item.itemName}</td>
                <td>{item.bsshNm}</td>
                <td>{item.adres}</td>
                <td>{item.examinDe}</td>
                <td>{item.pumNm}</td>
                <td>{item.unit}</td>
                <td>{item.unitprice.toLocaleString()}(원)</td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td>아무런 내용이 존재하지 않습니다.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
