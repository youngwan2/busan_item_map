###### 백엔드 저장소 주소: https://github.com/youngwan2/busan-item-map-server
---


## 프로젝트명
- 식품 정보공유 웹 사이트: <mark><b>B.I.M</b></mark>


<p style="text-aligin:center; margin:0 auto">
  <img src="https://github.com/youngwan2/busan_item_map/assets/107159871/ffba0431-985d-427b-be3c-6a8c64bb2fd9"  alt="홈페이지 프리뷰"/>
  </p>

---

## 프로젝트 목적
- (목적) 갈수록 비싸지는 식비를 아끼면서도 건강한 식사를 챙길 수 있다면, 얼마나 좋을까 라는 개인적인 바람에 의해 개발하게 되었습니다. 분산된 식품 및 영양정보들을 한 곳에 모아서 필요할 때 적재적소에 검색할 수 있는 사이트를 만드는 것이 목적입니다.

## 개발기간
- 2023년 7월 ~ 개발중

## 배포 URL(도메인)
- <a href="http://foodpick.site/" target="_blank">http://foodpick.site/</a>
- <a href="https://port-0-busan-item-map-server-12fhqa2blnl2zdg4.sel5.cloudtype.app/" target="_blank">https://port-0-busan-item-map-server-12fhqa2blnl2zdg4.sel5.cloudtype.app/</a>

## 주요 기능
- 부산 생활필수품에 대한 가격, 판매장소(지도), 주소를 확인할 수 있도록 테이블 형식으로 정보를 제공합니다.
- 테이블 내 목록을 클릭하면 해당 상품을 판매하고 있는 위도/경도 정보를 바탕으로 카카오 맵을 토대로 위치 정보를 보여줍니다.
- 지도 내 마커 위에 마우스 호버하면 해당 위치 내 판매점 이름이 표시됩니다.
- HACCP 인증을 받은 식품에 대한 정보를 제공하며, 각 상품목록을 클릭 시 상호명, 주소, 원재료 등에 대한 정보를 제공합니다.
- 학교 급식, 외식, 가정식 등의 다양한 음식의 영양성분 정보를 제공하며, 더보기 버튼을 활용하여 대량의 데이터를 필요에 따라 추가 조회할 수 있으며, 3대 영양소에 대한 시각화 정보를 제공합니다.
- AI Chat 을 활용하여 유동적으로 사용자가 원하는 질문에 대한 답변을 제공합니다.
- 네이버 지식백과 API와 연동하여 사이트 이용 중 모르는 용어에 대한 정보조회를 지원합니다.
- (추가)음식 레시피 조회 기능을 제공합니다. 사용자는 자신이 원하는 음식의 레시피를 음식타입 및 키워드 검색을 통해 조회할 수 있습니다
- (추가) BMI 측정 및 BMI 별 건강관리 팁을 제공하는 기능을 제공합니다.
- (추가) 유아 식단 정보를 제공합니다(주요 영양소, 간단한 조리법 등의 정보).

## 사용된 주요 라이브러리 및 프레임워크(기타 API포함)
### 프론트엔드
- <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white">
- <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
- <img src="https://img.shields.io/badge/Redux toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white">
- <img src="https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white">
- <img src="https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartjs&logoColor=white">
- <img src="https://img.shields.io/badge/React Query-AF6384?style=for-the-badge&logo=react-query&logoColor=white">

### 백엔드
- <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white">
  
### 데이터베이스
- <img src="https://img.shields.io/badge/SQLite3-003545?style=for-the-badge&logo=sqlite&logoColor=white">
---
## 기타

### 할 일 목록(TODO) : 급하게 X 단계적으로
- [ ] 추천 식단 추가(보류)
- [ ] 지역 시장 정보 추가
- [x] 아동 식단 추가
- [ ] 의약품 관련 정보 추가
- [X] CRA를 vite 로 마이그레이션 (이후 Next.js 로 마이그레이션 가능성)
- [ ] 도커 컨테이너 기반 AWS EC2 배포(보류)
- [x] 깃허브 액션 배포 자동화
- [x] indexed DB -> 코드 리팩터링(현재 jsx 로 안정성이 매우 떨어짐) -> SQLite3 로 변경


### 문제사항
- 23.11.08 이후 컴포넌트 분리 및 코드 리팩터링 작업 완료 후 조회 결과 초기화 문제가 다시 발생함

### 개선사항 
- 식품 영양정보조회, 음식 레시피 세부 페이지 이동 후 이전 페이지로 이동 시 조회 결과가 초기화 되는 문제수정(23.10.21 - 23.10.23)
- 레시피 세부 내용 조회 시 이전/다음 게시글을 조회할 수 있는 페이지 이동기능 추가(23.10.21).
- 레시피 조회 시 무한 스크롤 기능 추가.(23.10.22).
- HACCP 제품 정보조회 시 무한 스크롤 기능 추가(23.10.23)
- HACCP, 식품 영양정보조회, 레시피 정보 조회 시 무한 스크롤 기능 리팩토링:: 스크롤 이벤트 리스너의 중복 호출로 인한 메모리 누수 문제, 중복된 데이터를 조회하여 대량 데이터 렌더링 시 화면이 버벅이는 문제 등을 개선(23.10.31)
