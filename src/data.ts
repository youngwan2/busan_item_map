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

// 식품영양조회 식당 이름
export const restaurants = [
  { id: 1, name: "해당없음" },
  { id: 2, name: "배스킨라빈스" },
  { id: 3, name: "GS 리테일 심플리쿡" },
  { id: 4, name: "할리스" },
  { id: 5, name: "굽네치킨" },
  { id: 6, name: "교촌치킨" },
  { id: 7, name: "이디야" },
  { id: 8, name: "파리바게뜨" },
  { id: 9, name: "송사부수제쌀고로케" },
  { id: 10, name: "못난이꽈배기" },
  { id: 11, name: "더벤티" },
  { id: 12, name: "뚜레쥬르" },
  { id: 13, name: "따삐오" },
  { id: 14, name: "롤링핀" },
  { id: 15, name: "메가커피" },
  { id: 16, name: "블루샥" },
  { id: 17, name: "크리스피크림도넛" },
  { id: 18, name: "던킨도너츠" },
  { id: 19, name: "파스쿠찌" },
  { id: 20, name: "스타벅스" },
  { id: 21, name: "달콤" },
  { id: 22, name: "바나프레소" },
  { id: 23, name: "커피에반하다" },
  { id: 24, name: "탐앤탐스" },
  { id: 25, name: "카페띠아모" },
  { id: 26, name: "공차" },
  { id: 27, name: "커피:니" },
  { id: 28, name: "KFC" },
  { id: 29, name: "디저트39" },
  { id: 30, name: "마리웨일237" },
  { id: 31, name: "요거프레소" },
  { id: 32, name: "토프레소" },
  { id: 33, name: "투썸플레이스" },
  { id: 34, name: "카페베네" },
  { id: 35, name: "커피빈" },
  { id: 36, name: "드롭탑" },
  { id: 37, name: "청자다방" },
  { id: 38, name: "카페게이트" },
  { id: 39, name: "더리터" },
  { id: 40, name: "커피마마" },
  { id: 41, name: "카페루앤비" },
  { id: 42, name: "크로플덕오리아가씨" },
  { id: 43, name: "커피베이" },
  { id: 44, name: "맥도날드" },
  { id: 45, name: "노브랜드버거" },
  { id: 46, name: "맘스터치" },
  { id: 47, name: "버거킹" },
  { id: 48, name: "뉴욕버거" },
  { id: 49, name: "버거앤프라이즈" },
  { id: 50, name: "롯데리아" },
  { id: 51, name: "프랭크버거" },
  { id: 52, name: "666버거" },
  { id: 53, name: "비비큐" },
  { id: 54, name: "팔공티" },
  { id: 55, name: "로띠번" },
  { id: 56, name: "엔제리너스" },
  { id: 57, name: "빽다방" },
  { id: 58, name: "와플대학" },
  { id: 59, name: "와플칸" },
  { id: 60, name: "베러댄와플" },
  { id: 61, name: "스트릿츄러스" },
  { id: 62, name: "츄러스1500" },
  { id: 63, name: "망원동티라미수" },
  { id: 64, name: "호밀호두" },
  { id: 65, name: "크라상점" },
  { id: 66, name: "코코호도" },
  { id: 67, name: "앤티앤스" },
  { id: 68, name: "7번가피자" },
  { id: 69, name: "피자헤븐" },
  { id: 70, name: "업텐브로피자" },
  { id: 71, name: "임실N치즈피자" },
  { id: 72, name: "비토랩" },
  { id: 73, name: "비스트로피자" },
  { id: 74, name: "피자마루" },
  { id: 75, name: "피자헛" },
  { id: 76, name: "파파존스" },
  { id: 77, name: "오르새피자" },
  { id: 78, name: "피제이피자" },
  { id: 79, name: "킹스타피자" },
  { id: 80, name: "피자탑" },
  { id: 81, name: "미스터피자" },
  { id: 82, name: "서오릉피자" },
  { id: 83, name: "피자스톰" },
  { id: 84, name: "프레드피자" },
  { id: 85, name: "피자플래넷" },
  { id: 86, name: "선명희피자" },
  { id: 87, name: "또래오래" },
  { id: 88, name: "피자는치즈빨" },
  { id: 89, name: "치킨플러스" },
  { id: 90, name: "자담치킨" },
  { id: 91, name: "빽보이피자" },
  { id: 92, name: "호식이두마리치킨" },
  { id: 93, name: "아임일리터" },
  { id: 94, name: "크로플각" },
  { id: 95, name: "멕시카나" },
  { id: 96, name: "카페봄봄" },
  { id: 97, name: "요거트아이스크림의 정석" },
  { id: 98, name: "마이요거트립" },
  { id: 99, name: "스무디킹" },
  { id: 100, name: "매머드 익스프레스" },
  { id: 101, name: "HY 잇츠온" },
  { id: 102, name: "프레시지" },
  { id: 103, name: "신세계푸드 피코크" }
];




//  홈 네비게이션 기능
export const features = [
  {  
      index:0,
      id: 'local-food',
      title: '우리 고향 음식과 그 이야기',
      description: '한국 각 지역의 다양한 향토음식을 소개합니다. 각 지역의 특색 있는 음식에 대한 역사를 확인하세요.',
      link: '/localfood',
      imageUrl: '/assets/localfoodback.png'
  },
  {
      index:1,
      id: 'local-market',
      title: '지역 역사와 함께 숨쉬는 시장과 그 이야기',
      description: '전통 시장의 다양한 이야기와 시장에서 만날 수 있는 특별한 음식과 물건들을 소개합니다.',
      link: '/localmarket',
      imageUrl: '/assets/slide/market-back.jpg'
  },
  {
      index:2,
      id: 'haccp',
      title: 'Haccp가 붙은 제품은 안전합니다.',
      description: 'Haccp 인증을 받은 제품과 업체를 조회할 수 있습니다. 안전한 먹거리를 확인하세요.',
      link: '/haccp',
      imageUrl: '/assets/slide/haccp-back.jpg'
  },
  {
      index:3,
      id: 'nutrition',
      title: '우리가 먹은(먹는) 음식의 영양성분를 살펴볼까요?',
      description: '방대한 식품 영양 데이터베이스를 통해 우리가 먹은 음식의 칼로리 정보를 확인하세요.',
      link: '/nutrition',
      imageUrl: '/assets/slide/nutrition-back.jpg'
  },
  {
      index:4,
      id: 'recipe',
      title: '간단하게 만들어 먹을 수 있는 요리 없을까?',
      description: '화려해 보이는 음식부터 단순한 음식까지 간단한 조리법으로 쉽고 편하게 조리해 보세요.',
      link: '/recipe',
      imageUrl: '/assets/slide/recipe-back.jpg'
  }
];