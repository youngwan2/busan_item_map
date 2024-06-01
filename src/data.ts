import { KoreanProvincesType } from "./types/Local.types";

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

// 지역 카테고리
export const koreanProvinces:KoreanProvincesType[] = [
  { id: 0, name: ''},
  { id: 1, name: '서울' },
  { id: 2, name: '부산' },
  { id: 3, name: '대구' },
  { id: 4, name: '인천' },
  { id: 5, name: '광주' },
  { id: 6, name: '대전' },
  { id: 7, name: '울산' },
  { id: 8, name: '세종' },
  { id: 9, name: '경기도' },
  { id: 10, name: '강원도' },
  { id: 11, name: '충북,충청북도' },
  { id: 12, name: '충남,충청남도' },
  { id: 13, name: '전북,전라북도' },
  { id: 14, name: '전남,전라남도' },
  { id: 15, name: '경북,경상북도' },
  { id: 16, name: '경남,경상남도' },
  { id: 17, name: '제주' },

];

//  홈 네비게이션 기능
export const features = [
  {  
      index:0,
      id: 'local-food',
      title: '향토음식이야기',
      description: '한국 각 지역의 다양한 향토음식을 소개합니다. 각 지역의 특색 있는 음식에 대한 역사를 확인하세요.',
      link: '/localfood',
      imageUrl: '/assets/localfoodback.png'
  },
  {
      index:1,
      id: 'local-market',
      title: '향토시장이야기',
      description: '전통 시장의 다양한 이야기와 시장에서 만날 수 있는 특별한 음식과 물건들을 소개합니다.',
      link: '/localmarket',
      imageUrl: '/assets/localfoodback.png'
  },
  {
      index:2,
      id: 'haccp',
      title: 'HACCP 조회',
      description: 'HACCP 인증을 받은 제품과 업체를 조회할 수 있습니다. 안전한 먹거리를 확인하세요.',
      link: '/haccp',
      imageUrl: '/assets/localfoodback.png'
  },
  {
      index:3,
      id: 'nutrition',
      title: '식품영양조회',
      description: '방대한 식품 영양 데이터베이스를 통해 우리가 먹은 음식의 칼로리 정보를 확인하세요.',
      link: '/nutrition',
      imageUrl: '/assets/localfoodback.png'
  },
  {
      index:4,
      id: 'recipe',
      title: '간단 레시피 조회',
      description: '화려해 보이는 음식부터 단순한 음식까지 간단한 조리법으로 쉽고 편하게 조리해 보세요.',
      link: '/recipe',
      imageUrl: '/assets/localfoodback.png'
  }
];