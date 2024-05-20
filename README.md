## 📓 프로젝트명
- 식품 정보공유 웹 사이트: <mark><b>Food Picker</b></mark>
![제목을-입력해주세요_-002](https://github.com/youngwan2/food-picker/assets/107159871/947b9886-c3a7-440b-92cd-412b688aa1cb)

## 🎫 프로젝트 목적
- 우리 지역의 음식, 다양한 음식의 영양정보, 간단한 레시피 등 음식과 관련한 다양한 정보를 쉽게 찾아서 활용할 수 있으면 좋지 않을까 라는 생각에 개발하게 되었습니다.

## 📅 개발기간/유지보수
- (개발기간) 2023년 7월 16일 ~ 2023년 8월 13일
- (유지보수) 2023년 8월 13일 ~ 

## 🔥 배포
- ※ 현재 프로젝트는 클라우드 타입이라는 클라우드 플랫폼의 프리티어 멤버쉽으로 배포되었으며, 하루에 1번 서버를 자동으로 닫기 때문에, 24시간 호스팅이 되고 있지 않습니다. 매번 확인 후 재빌드하여 서버를 오픈하고 있습니다.
- <a href="https://port-0-foodpicker-12fhqa2blnl2zdg4.sel5.cloudtype.app/" target="_blank">https://port-0-foodpicker-12fhqa2blnl2zdg4.sel5.cloudtype.app/</a>

## 🚬 트러블 슈팅
- 프로젝트를 진행하면서 경험하게된 이슈를 모음집 형태로 정리해 보았습니다. 
- [트러블 슈팅 1 ~ 3](https://duklook.tistory.com/444)

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


## 🗂️ 프로젝트 구조(참고용)
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
