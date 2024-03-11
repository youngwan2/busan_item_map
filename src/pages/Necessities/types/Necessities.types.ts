export interface laLoType {
  la: string; // 위도
  lo: string; // 경도
}

export interface ItemsType extends laLoType {
  adres: string; // 주소
  bsshNm: string; // 판매점
  examinDe: string; // 등록일
  itemName: string; // 상품명
  pumNm: string; // 카테고리
  unit: string; // 단위
  unitprice: number; // 단위당 가격
}
