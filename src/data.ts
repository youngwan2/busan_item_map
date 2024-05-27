export interface HaccpProductCategoryType {
  name: string;
}

// HACCP 카테고리
export const haccpProductCategories: HaccpProductCategoryType[] = [
  { name: '즉석섭취식품' },
  { name: '양념육' },
  { name: '김치' },
  { name: '빵' },
  { name: '과자' },
  { name: '가공' },
  { name: '혼합장' },
  { name: '음료' },
  { name: '소스' },
  { name: '조미김' },
  { name: '신선편의식품' },
  { name: '청국장' },
  { name: '고춧가루' },
  { name: '절임' },
  { name: '천일염' },
  { name: '소금' },
  { name: '건조저장육류' },
  { name: '수산물' },
  { name: '농산물조림' },
  { name: '어묵' },
  { name: '햄' },
  { name: '치즈' },
  { name: '발효유' },
  { name: '곡류' },
  { name: '즉석조리식품' },
  { name: '빙과' },
  { name: '고추장' },
  { name: '베이컨' },
  { name: '참기름' },
];

export interface RecipeCategoryType {
  id: number,
  name:string
}

// 레시피 카테고리
export const recipeCategories:RecipeCategoryType[] = [
  { id: 1, name: '밥' },
  { id: 2, name: '일품' },
  { id: 3, name: '후식' },
  { id: 4, name: '국' },
  { id: 5, name: '반찬' },
  { id: 6, name: '기타' },
  { id: 7, name:''}
]