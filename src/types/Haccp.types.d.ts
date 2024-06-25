export interface HaccpProductPropertyType {
  nutrient: string;
  rawmtrl: string;
  prdlstNm: string;
  imgurl2: string;
  barcode: string;
  imgurl1: string;
  productGb: string;
  seller: string;
  prdkindstate: string;
  rnum: string;
  manufacture: string;
  prdkind: string;
  capacity: string;
  prdlstReportNo: string;
  allergy: string;
}

export interface HaccpProductItemType {
  item: HaccpProductPropertyType;
}

export interface HaccpProductCategoryType {
  name: string;
}
