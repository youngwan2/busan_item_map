###### 백엔드 저장소 주소: https://github.com/youngwan2/busan-item-map-server
---


## 📓 프로젝트명
- 식품 정보공유 웹 사이트: <mark><b>Food Picker</b></mark>

<p style="text-aligin:center; margin:0 auto">

  <img src="https://github.com/youngwan2/food-picker/assets/107159871/028faaea-40b2-4cb4-9ebb-eb7464ff7538"  alt="홈페이지 프리뷰"/>
  </p>

---

## 🎫 프로젝트 요약
- 중구난방으로 퍼져 있는 음식 관련 정보(식품영양, 향토 음식 등)을 한 곳에서 찾아볼 수 있는 가벼운 정보조회 웹 사이트

## 📅 개발기간/유지보수
- (개발기간) 2023년 7월 16일 ~ 2023년 8월 13일
- (유지보수) 2023년 8월 13일 ~ 

## 🔥 배포
- 무료 플랜이라 24시간 호스팅이 되고 있지 않습니다. 
- <a href="http://foodpick.site/" target="_blank">http://foodpick.site/</a>
- <a href="https://port-0-busan-item-map-server-12fhqa2blnl2zdg4.sel5.cloudtype.app/" target="_blank">https://port-0-busan-item-map-server-12fhqa2blnl2zdg4.sel5.cloudtype.app/</a>

## ⚙ 구현된 기능
- (무한 스크롤, Kakao Map API )지역별 향토 음식과 향토 시장의 유래 및 지도 API 를 활용한 관련 유명 음식점 정보 제공
- (무한 스크롤) 안심하고 먹을 수 있는 HACCP 등록 제품 정보조회 서비스 제공
- (무한 스크롤 )집에서 간단하게 먹을 수 있는 레시피 정보조회 서비스 제공
- (페이지네이션) 1만 개 이상의 식품영양정보 조회 서비스 제공
- (Naver API) 백과사전 검색 조회 서비스 제공


## 🧰 프레임워크 / 라이브러리 / 그 외 도구
### 프론트엔드/백엔드

|      사용 스텍       | 선택 이유  |
| :------------------ | :---------------------- |
|    Typeccript(^5.4.2)    | (언어) 정적 타입 검사를 통한 타입 안정성 확보 위함   |
|     ReactJS(^18.2.0)     | (SPA) 개인적으로 SPA 프레임워크(혹은 라이브러리) 중 VueJS 보다 더 유연하고, 기능 확장이 유연한 점이 편했기에 선택 |
| SASS(^1.71.1)  | (CSS 프레임워크) CSS 코드 재사용성 향상 및 상속 구조 단순화 |
|   Recoil(^0.7.7)    | (전역 상태관리) 단순한 상태의 전역 관리. Redux Toolkit 과 Zustand 와 비교했을 때, 상태 및 상태설정을 단일 컴포넌트 내에서 매우 쉽게 관리 할 수 있다는 이점이 돋보여서  선택 |
|   Reduxjs/toolkit(^2.2.1)    | (전역 상태관리) 기존 리덕스의 보일러 플레이트를 줄여주면서도 복잡한 전역 상태를 중앙집중식으로 관리하기 쉽다는 이점으로 채택하였으나 서버 상태 관리 시의 지저분함 및 보다 단순화면서도 중앙집중적 상태관리가 가능한 Recoil 을 사용함으로써 필요성이 떨어짐. 향후 제거될 가능성은 높으나, 학습목적을 위해 유지 |
|     @tanstack/react-query(^5.25.0)      | (서버 상태관리) Redux Toolkit을 활용한 서버 상태 관리의 복잡성(비동기적 입출력을 처리하기 위해 미들웨어 적용 시 코드가 지저분해 지는 것 등) 개선 및 무한 스크롤 기능 적용 시 캐싱 기능의 이점을 최대화 하기 위해 선택 |
|    gsap(^3.12.3)     | (애니메이션) icon 드래그 어블 애니메이션 적용 및 이외 복잡한 스크롤 기반 애니메이션 적용 시 필요|
|    express(^4.18.3)     | (nodejs 기반 서버 프레임워크) 보다 더 가볍고, 확장성이 높다고 알려진 fastify 선택을 고민했으나, 미들웨어 처리의 유연성이 독보적이고, 보다 문서화가 잘 되어 있어서 선택|

### 데이터베이스
|      사용 스텍       | 선택 이유  |
| :------------------ | :---------------------- |
|    SQLite(^5.1.1)    | 복잡한 관계없이 대량의 데이터를 조회하고 빠른 쿼리를 생각한다면 NoSQL이 최적이겠으나, 개인적으로 관계형 데이터베이스의 학습 목적 및 별도의 서버없이 데이터베이스 구축과 적용이 가능하다는 이점, 향후 타 RDBS 이전 시 용이성이 돋보여서 선택 |

## 🚬 트러블 슈팅
[트러블 슈팅 모음집](https://yunamom.tistory.com)


## 프로젝트 구조(참고용)
```
src
 ┣ 📂api ------→  서버 요청(= service)
 ┣ 📂app ------→ Redux 스토어 / 타입
 ┣ 📂features ------→ Redux 슬라이스
 ┃ ┣ 📂searchSlice
 ┃ ┗ 📂themeSlice
 ┣ 📂atom ------→ Recoil
 ┣ 📂components ------→ 전역적으로 사용되는 컴포넌트들
 ┃ ┣ 📂Common 
 ┃ ┃ ┣ 📂NaverDictionary 
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┣ 📂Errors
 ┃ ┣ 📂Layout
 ┃ ┗ 📂UI
 ┣ 📂config 
 ┣ 📂hooks -----→ 리액트 커스텀 훅
 ┣ 📂pages -----→ 페이지 : 페이지별 재사용 컴포넌트 및 타입
 ┃ ┣ 📂Haccp
 ┃ ┃ ┣ 📂components
 ┃ ┣ 📂Home
 ┃ ┃ ┣ 📂components
 ┃ ┣ 📂LocalFood
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┣ 📂types
 ┃ ┣ 📂LocalMarket
 ┃ ┃ ┣ 📂components
 ┃ ┣ 📂Nutrition
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┣ 📂types
 ┃ ┣ 📂NutritionDetail
 ┃ ┗ 📂Recipe
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┣ 📂types
 ┣ 📂router -----→ React-router-dom 의 페이지 경로 설정
 ┣ 📂utils  -----→ 재사용 헬퍼 함수 등
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┣ 📜routes.ts -----→ 재사용 네비게이션
```
