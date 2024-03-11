/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import NotFound from "../components/Errors/NotFound";
import ChildDietPage from "../pages/Diet/ChildDietPage";
import { lazy,Suspense } from "react";
import LocalFoodDetailPage from "../pages/LocalFoodDetail/LocalFoodDetailPage";
import 'react-toastify/dist/ReactToastify.css'
import ReactSpinner from "../components/UI/ReactSpinner";
import PageError from "../components/Errors/PageError";

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
     <Suspense fallback={<ReactSpinner/>}>
      <Home/>
    </Suspense>,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/localfood",
        element: 
         <Suspense fallback={<ReactSpinner/>}>
          <LocalFoodPage />
         </Suspense>
        ,
      },
      {
        path: "/localfood/:id",
        element: 
         <Suspense fallback={<ReactSpinner/>}>
          <LocalFoodDetailPage />
         </Suspense>
        ,
      },
      {
        path: "/nutrition",
        element:
        <Suspense fallback={<ReactSpinner/>}>
          <NutritionPage/>
       </Suspense>
      },
      {
        path: "/busan-necessities",
        element:
        <Suspense fallback={<ReactSpinner/>}>
         <NecessitiesPage />
       </Suspense>
      },
      {
        path: "/haccp",
        element: 
        <Suspense fallback={<ReactSpinner/>}>
          <HaccpPage />
        </Suspense>
      },
      {
        path: "/recipe",
        element: 
        <Suspense fallback={<ReactSpinner/>}>
          <RecipePage />
        </Suspense>
      },
      {
        path: "/recipe/:id",
        element: 
        <Suspense fallback={<ReactSpinner/>}>
          <RecipeDetail />
        </Suspense>
      },
      {
        path: "/bmi",
        element: 
        <Suspense fallback={<ReactSpinner/>}>
         <BmiPage />
        </Suspense>
      },
      {
        path:"/child-diet",
        element:
        <Suspense fallback={<ReactSpinner/>}>
        <ChildDietPage />
       </Suspense>
      }
    ],
  },
  {
    path: "*",
    element: <NotFound message="잘못된 경로로 접속 하셨습니다." />,
  },
 
]);

export default router;
