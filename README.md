※ 사실상 처음 부터 다시 만들었기 때문에, 변경되는 사항은 바로 확인할 수 있도록 (https://github.com/youngwan2/food-picker/issues/15) 이슈를 만들어 히스토리 형식으로 정리하고 있습니다. <br/>
※ 백엔드 주소: https://github.com/youngwan2/foodpicker-server

## 📓 프로젝트명
- 식품 정보공유 웹 사이트: <mark><b>Food Picker</b></mark>
- <변경 전: ~ 2024.05.24 >
![제목을-입력해주세요_-002](https://github.com/youngwan2/food-picker/assets/107159871/947b9886-c3a7-440b-92cd-412b688aa1cb)

- <변경 후: 2024.05.24 ~ >
![main png](https://github.com/youngwan2/food-picker/assets/107159871/f94e8ddb-a0d1-4f07-b2e1-900253f5e201)


## 🎫 프로젝트 목적
- 우리 지역의 음식, 다양한 음식의 영양정보, 간단한 레시피 등 음식과 관련한 다양한 정보를 쉽게 찾아서 활용할 수 있으면 좋지 않을까 라는 생각에 개발하게 되었습니다.


## 📅 개발기간
- (이전 개발) 2023년 7월 16일 ~ 2023년 8월 13일
- (전체 재개발) 2024년 5월 24일 ~ 2024년 6월 12일
- (유지보수) 2024년 6월 13일 ~

## 🔥 배포
- 루트 도메인: https://foodpick.co.kr/
- 서브 도메인: https://www.foodpick.co.kr/
- 배포 히스토리(프론트): https://github.com/youngwan2/food-picker/issues/27
- 배포 히스토리(백엔드): https://github.com/youngwan2/food-picker/issues/30
- 배포 아키텍처
``` mermaid
sequenceDiagram
    participant Dev as Developer
    participant GH as GitHub
    participant GHA as GitHub Actions
    participant Vite
    participant S3
    participant CF as CloudFront
    participant User

    Dev->>GH: Push code
    GH->>GHA: Trigger workflow
    GHA->>Vite: Run build command
    Vite->>Vite: Build React app
    Vite-->>GHA: Return build artifacts
    GHA->>S3: Upload build artifacts
    S3-->>GHA: Confirm upload
    GHA->>CF: Create invalidation
    CF-->>GHA: Confirm invalidation request
    CF->>S3: Fetch updated content
    S3-->>CF: Serve updated content
    User->>CF: Request website
    CF->>User: Serve website content
```


## 🚬 트러블 슈팅
- [트러블 슈팅](https://duklook.tistory.com/444)

## 🧰 프레임워크 / 라이브러리 / 그 외 도구
### 프론트엔드/백엔드

|      사용 스텍       | 비고  |
| :------------------ | :---------------------- |
|    Typeccript(^5.4.2)    | (언어) 정적 타입 검사를 통한 타입 안정성 확보 위함   |
|     ReactJS(^18.3.1)     | (SPA) 개인적으로 SPA 프레임워크(혹은 라이브러리) 중 VueJS 보다 더 유연하고, 기능 확장이 유연한 점이 편했기에 선택 |
| SASS(^1.77.2)  | (CSS 프레임워크) CSS 코드 재사용성 향상 및 상속 구조 단순화 |
|   Zustand(^4.5.4)    | (전역 상태관리) 단일 스토어 기반으로 리덕스 처럼 래퍼를 사용하지 않고도, 간편하게 상태관리가 가능하다는 이점과 React Context API 에 의존하지 않는 처리 방식을 통한 성능상 이점 등을 고려하여 선택.(비고: 기존에는 Atom 기반의 전역 상태 관리 도구인 Recoil 을 사용하였으나 더 이상 관리가 되지 않고, 향후  React19 버전에서는 동작하지 않을 가능성을 염두하여 대체함) |
|     @tanstack/react-query(^5.39.0)      | (서버 상태관리) 캐싱 및 에러 처리의 효율성을 높이고, 무한 스크롤 기능 적용 시 캐싱 기능의 이점을 최대한 활용하기 위해 선택. SWR 과 비교해서 라이브러리 자체가 무거운 편이긴 하지만 문서화가 잘 되어 있고, 상태관리를 위한 폭 넓은 도구(ex. 직관적인 인터페이스의 개발도구 등)를 적극 지원하고 있는 점 등을 고려해서 선택 |
|    express(^4.18.3)     | (백엔드) 보다 더 가볍고, 확장성이 높다고 알려진 fastify 선택을 고민했으나, 미들웨어 처리의 유연성이 독보적이고, 보다 문서화가 잘 되어 있어서 선택|

### 데이터베이스
|      사용 스택       | 비고  |
| :------------------ | :---------------------- |
|    SQLite(^5.11.0)    | 복잡한 관계없이 대량의 데이터를 조회하고 빠른 쿼리를 생각한다면 NoSQL이 최적이겠으나, 개인적으로 관계형 데이터베이스의 학습 목적 및 별도의 서버없이 데이터베이스 구축과 적용이 가능하다는 이점, 향후 타 RDBS 이전 시 용이성이 돋보여서 선택 |

## ⚙ 구현된 기능
- ### 로드맵
    -  react-kakao-maps-sdk 를 활용하여 연관 식당의 로드뷰를 확인할 수 있는 기능 입니다.  useState로 설정한 true/false 상태에 따라 일반지도와 로드뷰를 바꿔가며 볼 수 있도록 구현했고, 전체화면과 창화면 모드를 지원하여 모바일 환경과 데스크톱 환경에서도 일관된 사용자 경험을 제공할 수 있도록 구현되었습니다.  
- ### 무한 스크롤
    -  tanstack/query-react 의 useInfiniteQuery 를 재사용할 수 있도록 useInfiniteScroll 라는 이름의 커스텀 훅으로 래핑하였습니다. 스크롤의 끝지점을 계산할 수 있도록 HTML5의 intersectionObserver 의 커스텀 훅 버전인 useIntersection 를 결합하여 구현 되었습니다.
    -   서버 측(Node.js Express)에서는 다음 페이지의 커서를 .next 객체에 담아서 응답함으로서 페이지 전환이 자연스럽게 이루어지도록 구현 되었습니다.
- ### 페이지네이션
    -  tanstack/query-react 의 placeholderData 와 keepPreviousData 를 사용하여 새로운 데이터를 요청하는 동안에도 마지막으로 성공적으로 페치된 데이터를 사용토록 하고, Pagination 컴포넌트를 필요로 하는 각 페이지 마다 가져와서 재사용할 수 있도록 구현 하였습니다. 이로서 컴포넌트의 재사용성을 높일 수 있고, 동시에 페이지 전환 시 화면이 깜빡이는 문제를 방지 합니다.
- ### 필터
    -  사용자가 선택한 데이터셋을 기반으로 실시간 데이터 조회가 가능한 기능 입니다. 식품영양정보 페이지의 필터는 다중 필터를 지원하고, 실시간 필터의 이점을 유지하면서 과중한 네트워크 요청을 방지하기 위해 디바운싱을 적용하여 구현 하여습니다.
- ### AI 음식 가이드
    -  OpenAI의 gpt3.5 버전을 사용하여 전통음식 이름을 전달받으면, 부여된 음식 가이드 역할에 따라 응답하는 기능 입니다. 클라이언트로 부터 받은 음식이름을 서버 측에서 openAI 에 요청을 보내게 되고, 이 때 json 객체 형태로 추천키워드와 설명을 응답 받은 후 클라이언트로에는 정제된 형태로 응답토록 로직 처리 하였습니다.
- ### 최근검색어 필터
    -  백과사전 조회 시 사용자가 최근 검색한 키워드를 중복제거 후 저장하고, 해당 키워드를 클릭하여 재검색할 수 있도록 구현 하였습니다.
- ### Breadcrumb 네비게이션
    - 사용자의 현재 위치를 알려주기 위해 깊이에 따라 현재 경로를 표시하는 기능. GuideMessage 컴포넌트로 모듈화되어 각 페이지 마다 재사용할 수 있도록 구현 하였습니다.
- ### 현재 항목 표시
    -  현재 사용자가 스크롤된 페이지의 수나 아이템의 갯수를 시각적으로 확인할 수 있는 기능 입니다.
    -  무한 스크롤 기반으로 목록을 조회할 때 사용자가 현재 어느 지점까지 왔는지 시각적으로 확인할 수 있다면 편할 것 같아서 추가하였습니다.


## 🗂️ 프로젝트 구조
```
📦src
 ┣ 📂api ---------->  HTTP 요청
 ┣ 📂stores ------->  zustand 전역 상태관리
 ┣ 📂components --->  전역적으로 쓰이는 컴포넌트 모음
 ┣ 📂config  ------>  프로젝트 환경 구성
 ┣ 📂hooks -------->  커스텀 훅
 ┣ 📂pages -------->  페이지 및 관련 컴포넌트 모음
 ┃ ┣ 📂Haccp
 ┃ ┣ 📂Home
 ┃ ┣ 📂Local ------>  Local 관련 페이지 역할을 하는 컴포넌트가 2 개 이므로 이를 묶어서 관리
 ┃ ┃ ┣ 📂Common
 ┃ ┃ ┣ 📂LocalFood
 ┃ ┃ ┣ 📂LocalMarket
 ┃ ┣ 📂Nutrition
 ┃ ┣ 📂Recipe
 ┃ ┗ 📂TraditionalFood
 ┣ 📂router ------->  페이지 라우터 설정
 ┣ 📂types  ------->  타입 관리
 ┣ 📂utils  ------->  유틸 함수 관리
```
