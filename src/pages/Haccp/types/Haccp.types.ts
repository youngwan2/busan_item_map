export interface ItemsType {
  item: FilterItemType
}


export interface FilterItemType {
  allergy: string; // 알레르기
  barcode: string; // 바코드
  imgurl1: string;
  manufacture: string; // 제조사
  prdkind: string; // 상품 유형
  prdkindstate: string; // 상품 상태
  prdlstNm: string; // 상품 이름
  prdlstReportNo: string; // 상품 보고 번호(일련번호)
  rawmtrl: string; // 영양정보
}