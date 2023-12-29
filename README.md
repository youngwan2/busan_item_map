###### 백엔드 저장소 주소: https://github.com/youngwan2/busan-item-map-server
---


## 1. 프로젝트명
- 식품 정보공유 웹 사이트: <mark><b>B.I.M</b></mark>


<p style="text-aligin:center; margin:0 auto">
  <img src="https://github.com/youngwan2/busan_item_map/assets/107159871/ffba0431-985d-427b-be3c-6a8c64bb2fd9"  alt="홈페이지 프리뷰"/>
  </p>

---

## 2. 프로젝트 목적
- (목적) 갈수록 비싸지는 식비를 아끼면서도 건강한 식사를 챙길 수 있다면, 얼마나 좋을까 라는 개인적인 바람에 의해 개발하게 되었습니다. 분산된 식품 및 영양정보들을 한 곳에 모아서 필요할 때 적재적소에 검색할 수 있는 사이트를 만드는 것이 목적입니다.

## 3. 개발기간/유지보수
- (개발기간) 2023년 7월 ~ 2023년 8월 13일
- (유지보수) 2023년 8월 13일 ~ 현재

## 4.  배포 URL(도메인)
- <a href="http://foodpick.site/" target="_blank">http://foodpick.site/</a>
- <a href="https://port-0-busan-item-map-server-12fhqa2blnl2zdg4.sel5.cloudtype.app/" target="_blank">https://port-0-busan-item-map-server-12fhqa2blnl2zdg4.sel5.cloudtype.app/</a>

## 5. 주요 기능
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

## 6. 사용된 주요 라이브러리 및 프레임워크(기타 API포함)
### 프론트엔드
- <img src="https://img.shields.io/badge/React(v18.2.0)-61DAFB?style=for-the-badge&logo=react&logoColor=white">
- <img src="https://img.shields.io/badge/Typescript(v4.9.5)-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
- <img src="https://img.shields.io/badge/Redux toolkit(v1.9.5)-764ABC?style=for-the-badge&logo=redux&logoColor=white">
- <img src="https://img.shields.io/badge/Recoil(v0.7.7)-3578E5?style=for-the-badge&logo=recoil&logoColor=white">
- <img src="https://img.shields.io/badge/React Query(v5.8.4)-AF6384?style=for-the-badge&logo=react-query&logoColor=white">

### 백엔드
- <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white">
  
### 데이터베이스
- <img src="https://img.shields.io/badge/SQLite3-003545?style=for-the-badge&logo=sqlite&logoColor=white">

## 7. 트러블 이슈
### 1) 렌딩 페이지 접속 시 렌더링 속도가 느렸던 문제

<details>
 <summary>a. 문제사항</summary>
  
- 렌딩 페이지를 접속하면, 완성된 화면을 렌더링 하는데 오랜 시간이 걸리는 문제가 발생하였습니다. 개발 서버인 것을 감안하더라도 성능 최적화가 반드시 필요한 부분이라 보았습니다.
![image](https://github.com/youngwan2/food-picker/assets/107159871/fdc86770-eeb5-4364-aedc-1431a66a4841)

- 브라우저의 라이트 하우스로 성능 측정을 해보니 , 빌드 이후의 bundle.js 파일이 3.082.0 KiB로 매우 컸기에, 렌딩 페이지와는 연관이 없는 js 파일까지 다운로드 하는데 많은 시간이 소요된 것으로 보였습니다.
![image](https://github.com/youngwan2/food-picker/assets/107159871/6b161e4f-2fc4-4dd6-9bf5-8c62e64983c2)

- 이로 인해 FCP 가 4.8초로 매우 느렸고, 그에 따라 LCP 의 경우도 5.5초, TBT의 경우 560 ms 로 그 동안 사용자가 사이트를 방문할 시 오랫동안 동작되지 않는 화면을 보게 되는 문제에 직면했습니다. 물론 TBT의 경우 1초 미만이라면 느린 편이라고 볼 수는 없으나, 사이트의 확장성 및 간단한 사이트임을 감안하면 이 정도 시간이 걸리는 것은 매우 좋지 못한 경우이라 분석하였습니다.

![image](https://github.com/youngwan2/food-picker/assets/107159871/3e1e7bcb-bd0b-430c-8ea8-f78ba7ab1640)
</details>

<details>
 <summary>b. 개선과정</summary>
  
- 결국 빌드 이후의 번들 파일이 컸기 때문에 발생한 문제로 판단했고, 이를 위해 코드 분할 기법을 적용하기로 하였습니다.
- 리액트에서는 마침 코드 분할을 위해서 Lazy 함수를 이용한 동적 import 기능을 지원하고 있었고, 이와 함께 Suspense 컴포넌트를 활용하여 fallback 처리도 함께 할 수 있다는 이점을 바탕으로 이를 적용하기로 결정하였습니다. React-router 를 사용하고 있었기에, 라우트 별로 사용자가 해당 페이지에 접속할 때 파일을 다운로드할 수 있도록 다음과 같이 라우트별로 코드 분할을 실시하였습니다.
```javascript /* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import Header from "../components/Common/Header";
import NotFound from "../components/Errors/NotFound";
import PageLoading from "../components/UI/PageLoading";
import ChildDietPage from "../pages/Diet/ChildDietPage";
import { lazy,Suspense } from "react";

const Home = lazy(()=> import('../pages/Home/Home'))
const LocalFoodPage = lazy(()=> import('../pages/LocalFood/LocalFoodPage'))
const NutritionPage = lazy(()=> import('../pages/Nutrition/NutritionPage'))
const NecessitiesPage = lazy(()=> import('../pages/Necessities/NecessitiesPage'))
const HaccpPage = lazy(()=> import('../pages/Haccp/HaccpPage'))
const RecipePage = lazy(()=> import('../pages/Recipe/RecipePage'))
const RecipeDetail = lazy(()=> import('../pages/Recipe/RecipeDetail'))
const BmiPage = lazy(()=> import('../pages/Bmi/BmiPage'))


const router = createBrowserRouter([
  {
    path: "/",
    element: 
     <Suspense fallback={<PageLoading/>}>
      <Home/>
    </Suspense>,
  },
  {
    path: "/",
    element: <Header isStyle={true} />,
    children: [
      {
        path: "/localfood",
        element: 
         <Suspense fallback={<PageLoading/>}>
          <LocalFoodPage />
         </Suspense>
        ,
      },
       // -- 중략 --
]);

export default router;
 ```
</details>

<details>
<summary>c. 성과</summary>
  
- 코드 분할 기법을 적용 결과 다음과 같이 FCP 는 1.3 초, LCP 는 2.1 초로 성능이 크게 개선될 것을 확인할 수 있었습니다.
- 최종적으로 개발 환경에서 성능 측정 점수는 34점 에서 77 점으로 큰 증가폭을 보였습니다.
- 결론적으로, 사이트 렌더링 속도가 빨라졌고, 데스크톱/모바일 환경 전체적으로 렌딩 화면 접속 시 장시간 멈추는 문제를 개선할 수 있었습니다.

![image](https://github.com/youngwan2/food-picker/assets/107159871/4e90a4d5-c8b4-4897-80da-93197cf8cebc)


- 배포 환경에서 재측정 해보니 FCP, LCP, TBT도 크게 개선되었고, 성능 점수가 91점으로 증가된 것을 볼 수 있었습니다. 코드 분할 이전의 배포 환경에서 성능 점수 77 점을 추정한 것과 비교하면 많은 개선을 경험하였다고 볼 수 있을 것 같습니다.

![image](https://github.com/youngwan2/food-picker/assets/107159871/9062b20d-8c34-4e12-91b6-9bc080054a16)

</details>

<details>
<summary>d. 배운점</summary>

- 라이트하우스를 토대로 분석하고, 코드 분할 기법을 적용하면서 리액트의  Suspense 컴포넌트와 Lazy 동적 import 함수의 용도와 활용성에 대하여 알게 되었습니다.
- 사용자 경험에서 렌더링 이슈가 얼마나 중요한 사안이지 확인할 수 있었고, 프론트엔드 개발자의 역량이 프로젝트의 완성도에 얼마나 큰 영향을 미칠 수 있는지 고찰해보는 시간이었고, 왜 성능 최적화가 중요한 사안인지 알 수 있었습니다.
</details>


### 2) 개발 서버 환경의 느린 빌드 속도 및 리액트 자체적인 유지보수 미흡으로 인한 취약성 문제
<details>
<summary>a. 문제사항</summary>

 - 이는 개인적인 불편함이 주 이유입니다. 7월 중순 부터 시작한 해당 프로젝트는 CRA(Ceate React App) 로 프로젝트 환경을 구축하였습니다.
 - 처음에는 개발 서버를 구동하는데 걸리는 빌드 시간에 의미를 부여하지 않았으나, Vite 기반의 간단한 애플리케이션을 만들어보면서, CRA의 느린 빌드 속도에 큰 불만을 가지게 되었습니다.
 - 특히, CRA 의 경우 변동 사항을 반영하여 렌더링되는데 체감상 Vite 기반의 앱에 비해서 1초 이상 차이가 났습니다.
 - 왜 이런 차이가 나는지 공식문서를 살펴보니, 일반적인 웹펙과 같이 의존성 모듈 전체를 재렌더링하는 것이 아니라, 변동사항이 존재하는 모듈만 빠르게 대체하기 때문임을 알게 되었습니다. 여러모로 바꾸지 않을 이유가 없었습니다.
 - 무엇보다 CRA는 react-script 패키지와 관련한 취약성 문제가 계속 발생하고 있음에도 불구하고, 개선하고자 하는 움직임이 보이지 않았습니다. 이에 대한 심각성을 바탕으로 빠른 시일 이내에 vite 기반으로 마이그레이션 하자는 목적을 가지게 되었습니다.
</details>

<details>
<summary> b. 개선과정</summary>
- CRA 와 VITE 기반의 앱의 초기 프로젝트 환경의 구성을 비교하면서, 그 차이점을 기반으로 마이그레이션을 진행하였습니다.
- 간략히 거친 과정을 언급하자면 ``` package.json 에서 CRA 기반의 비의존성 및 의존성 패키지 정리 → vite 설치 및 플로그인 설치 → vite.config.ts 설정 → react-app-env.d.ts 설정 → 환경변수 → eslint 설정 → 빌드 과정을 거쳤습니다.```

- vite 의 경우에는 vite.config.ts 파일을 추가하고, 해당 vite 앱이 react 기반임을 vite에 알리고, 빌드 시 해당 파일이 어디에 저장될 것인지를 기본값으로 설정해야 했기에 다음과 같이 플로그인 등록과 경로 설정을 실시하였습니다.

![image](https://github.com/youngwan2/food-picker/assets/107159871/90bf6373-f413-41a9-9eb5-c1a52be68961)

- 환경변수의 타입을 지정하는 react-app-env.d.ts 파일의 경우에는 기존 CRA 설정 방식이었던 reference를 vite 기반으로 변경하였습니다.
  
![image](https://github.com/youngwan2/food-picker/assets/107159871/157f4760-4ca4-4487-8007-80f152cd9eb2)
![image](https://github.com/youngwan2/food-picker/assets/107159871/2ced6f72-37d5-488c-bccf-70fa045f4552)

- 환경변수 파일의 경우 vite 기반의 리액트 앱에서는 환경변수에 접근할 때 imprt.meta.env 로 접근하여 사용함을 확인했고, 다음과 process.env 부분을 vite 환경변수에 맞게 수정하였습니다.

  ![image](https://github.com/youngwan2/food-picker/assets/107159871/fb24b08d-62e9-40cc-a924-8a3959cffb8d)

- 또한, index.html 파일의 경우에도 변동이 발생하였는데, CRA에서는 public 폴더 접근 시 %PUBLIC_URL%/ 로 접근하였으나, Vite 에서는 이 부분이 생략되어도 내부적으로 public 폴더로 설정되는 것을 확인하였고 다음과 같이 변동사항을 체크 후 수정하였습니다.

  ![image](https://github.com/youngwan2/food-picker/assets/107159871/74bfa3eb-89f5-48f2-971c-c02519acc41d)
  ![image](https://github.com/youngwan2/food-picker/assets/107159871/a6635841-8bcf-4264-b3c2-80068a08f36a)

- 이후 이전 기록이 남아있는 node_modules 폴더를 rm -rf 명령어를 통해 하위 디렉토리 까지 모두 강제 처리하고, npm install 을 통하여 재설치를 시도하였고, 빌드 명령어를 실행하여 성공적으로 마이그레이션이 되었음을 확인하였습니다.
  ![image](https://github.com/youngwan2/food-picker/assets/107159871/112c19b7-c8fb-4231-ae68-45068b7e59d5)
</details>

<details>
<summary>c. 성과</summary>
  
- 체감상 빌드 속도와 코드 변경 사항에 대한 리렌더링에 있어서 CRA 보다 Vite 가 효율적이고 빠르게 느껴졌습니다.
- 개발 서버의 빌드 속도 또한 눈에 띄게 증가하였고, 배포 파일 빌드 시에도 빌드 시간이 감소하였습니다.
- CRA 에서 뜨던 react-scripts 취약성 문제가 제거되었습니다.
</details>

<details>
<summary>d. 배운점</summary>

- 성능 문제를 개선 함에 있어서, 마이그레이션이 왜 중요한지 알게 되었습니다. 그러나  CRA 와 vite 의 경우 서로 환경 셋팅 방법이 다르기 때문에, 이 과정 동안 충돌되는 자잘한 이슈들이 많이 있었습니다. 이를 통해, 프로젝트의 규모나 환경에 따라서 마이그레이션을 진행해야 한다는 사실을 많이 배웠습니다.
</details>

---
## 기타

### 할 일 목록(TODO) : 급하게 X 단계적으로
- [ ] 추천 식단 추가(보류)
- [ ] 지역 시장 정보 추가(보류)
- [x] 아동 식단 추가
- [ ] 의약품 관련 정보 추가(보류)
- [X] CRA를 vite 로 마이그레이션 (이후 Next.js 로 마이그레이션 가능성)
- [ ] 도커 컨테이너 기반 AWS EC2 배포(보류 : 비용관련 문제) -> AWS Lightsail 로 대체 예정
- [ ] 깃허브 액션 배포 자동화(현 배포 환경인 클라우드 타입의 프리티어 지원 종료로 중지)
- [x] indexed DB -> 코드 리팩터링(현재 jsx 로 안정성이 매우 떨어짐) -> SQLite3 로 변경
