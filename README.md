# 프로젝트명
#### 부산지역 생필품 정보 공유 웹 사이트; B.I.M
<p style="text-aligin:center">
  <img src="https://github.com/youngwan2/busan_item_map/assets/107159871/fb37c04d-1e47-49cd-adf5-29d437f003d6" alt="홈페이지 프리뷰">
  </p>

## 주요 기능
- 부산 생활필수품에 대한 가격, 판매장소, 주소를 확인할 수 있습니다.
- 테이블 내 목록을 클릭하면 해당 상품을 판매하고 있는 위도/경도 정보를 바탕으로 카카오 맵을 토대로 위치 정보를 보여줍니다.
- 지도 내 마커 위에 마우스 호버하면 해당 위치 내 판매점 이름이 표시됩니다.
- 부산 생필품 정보 외에도 향토음식정보, HACCP 인증 제품 정보, 각종 식품에 대한 영양정보를 제공합니다.
- 학교 급식, 외식, 가정식 등의 다양한 음식의 영양성분 정보를 제공하며, 3대 영양소에 대한 시각화된 정보를 제공합니다.
- AI Chat 을 활용하여 유동적으로 사용자가 원하는 질문에 대한 답변을 제공합니다.
- 네이버 지식백과 API와 연동하여 사이트 이용 중 모르는 용어에 대한 정보조회를 지원합니다.

## 배포 URL(도메인)
### 배포 클라우드: 클라우드타입
- <a href="http://foodpick.site/" target="_blank">http://foodpick.site/</a>
- <a href="https://port-0-busan-item-map-server-12fhqa2blnl2zdg4.sel5.cloudtype.app/" target="_blank">https://port-0-busan-item-map-server-12fhqa2blnl2zdg4.sel5.cloudtype.app/</a>


## 사용된 라이브러리 및 프레임워크(기타 도구포함)
### 프론트엔드
- #### React.js
- #### Typescript.js
- #### KaKao Map API
- #### Chart.js
- #### Redux-Toolkit

### 데이터베이스
- #### IndexedDB


## 향후 계획
- Chart.js 를 활용한 데이터 시각화를 통해 주요 영양소의 하루 권장섭취량과 조회 식품의 영양소 비율을 시각적으로 보여줄 수 있도록 기능을 추가할 예정입니다.
- IndexedDB의 경우 클라이언트 단에서 데이터를 저장하고 조회하기 때문에, 렌더링 시 이점이 있으나, 브라우저 단에서 데이터를 처리하기 때문에 대량의 데이터를 조회시에 버벅이는 문제가 발생하는 문제가 남아 있습니다. 따라서 이 문제를 개선하기 위한 작업을 실시할 예정입니다.
- 그 외에도 보완하거나 추가하고자 하는 기능이 있으면 계속 해서 개선해 나갈 예정 입니다.
