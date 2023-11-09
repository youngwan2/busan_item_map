###### 백엔드 저장소 주소: https://github.com/youngwan2/busan-item-map-server
---


## 프로젝트명
- 식품 정보공유 웹 사이트: <mark><b>B.I.M</b></mark>
<p style="text-aligin:center; margin:0 auto">
  <img src="https://github.com/youngwan2/busan_item_map/assets/107159871/2e65e166-d690-4724-b11e-518299dea054"  alt="홈페이지 프리뷰"/>
  </p>

---

## 배포 URL(도메인)
- <a href="http://foodpick.site/" target="_blank">http://foodpick.site/</a>
- <a href="https://port-0-busan-item-map-server-12fhqa2blnl2zdg4.sel5.cloudtype.app/" target="_blank">https://port-0-busan-item-map-server-12fhqa2blnl2zdg4.sel5.cloudtype.app/</a>

## 프로젝트 목적
- (목적) 다양한 식품 정보를 적재적소에 검색하여 활용할 수 있는 사이트가 있으면 좋겠다는 개인적인 바람에 의해 개발하였습니다. 

## 주요 기능
- 부산 생활필수품에 대한 가격, 판매장소(지도), 주소를 확인할 수 있도록 테이블 형식으로 정보를 제공합니다.
- 테이블 내 목록을 클릭하면 해당 상품을 판매하고 있는 위도/경도 정보를 바탕으로 카카오 맵을 토대로 위치 정보를 보여줍니다.
- 지도 내 마커 위에 마우스 호버하면 해당 위치 내 판매점 이름이 표시됩니다.
- HACCP 인증을 받은 식품에 대한 정보를 제공하며, 각 상품목록을 클릭 시 상호명, 주소, 원재료 등에 대한 정보를 제공합니다.
- 학교 급식, 외식, 가정식 등의 다양한 음식의 영양성분 정보를 제공하며, 더보기 버튼을 활용하여 대량의 데이터를 필요에 따라 추가 조회할 수 있으며, 3대 영양소에 대한 시각화 정보를 제공합니다.
- AI Chat 을 활용하여 유동적으로 사용자가 원하는 질문에 대한 답변을 제공합니다.
- 네이버 지식백과 API와 연동하여 사이트 이용 중 모르는 용어에 대한 정보조회를 지원합니다.
- (추가)음식 레시피 조회 기능을 제공합니다. 사용자는 자신이 원하는 음식의 레시피를 음식타입 및 키워드 검색을 통해 조회할 수 있습니다(23.10.18)
- (추가) BMI 측정 및 BMI 별 건강관리 팁을 제공하는 기능을 제공합니다(23.10.29 ~ 개발중)

## 사용된 주요 라이브러리 및 프레임워크(기타 API포함)
### 프론트엔드
- <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white">
- <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
- <img src="https://img.shields.io/badge/Redux toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white">
- <img src="https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white">
- <img src="https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartjs&logoColor=white">

### 백엔드
- <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white">
  
### 데이터베이스(브라우저)
- <img src="https://img.shields.io/badge/indexed DB-003545?style=for-the-badge&logo=indexeddb&logoColor=white">

## 향후 계획
- 식품 이미지를 사용자가 올리면, 해당 이미지를 분석하여 영양정보를 제공하는 AI 기능을 tensorflow.js 를 활용하여 도입해볼 예정입니다.
- 그 외에도 있으면 좋은 기능이 발견되면 지속적으로 개선해 나갈 예정입니다.


## 개선사항 
- (문제) 식품 영양정보조회, 음식 레시피 세부 페이지 이동 후 이전 페이지로 이동 시 조회 결과가 초기화 되는 문제수정(23.10.21 - 23.10.23).
- (개선) 레시피 세부 내용 조회 시 이전/다음 게시글을 조회할 수 있는 페이지 이동기능 추가(23.10.21).
- (개선) 레시피 조회 시 무한 스크롤 기능 추가.(23.10.22).
- (개선) HACCP 제품 정보조회 시 무한 스크롤 기능 추가(23.10.23)
- (개선) HACCP, 식품 영양정보조회, 레시피 정보 조회 시 무한 스크롤 기능 리팩토링:: 스크롤 이벤트 리스너의 중복 호출로 인한 메모리 누수 문제, 중복된 데이터를 조회하여 대량 데이터 렌더링 시 화면이 버벅이는 문제 등을 개선(23.10.31)
