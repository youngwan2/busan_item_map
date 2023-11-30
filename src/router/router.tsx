/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import Header from "../components/Layout/Header";
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
      {
        path: "/nutrition",
        element:
        <Suspense fallback={<PageLoading/>}>
          <NutritionPage/>
       </Suspense>
      },
      {
        path: "/busan-necessities",
        element:
        <Suspense fallback={<PageLoading/>}>
         <NecessitiesPage />
       </Suspense>
      },
      {
        path: "/haccp",
        element: 
        <Suspense fallback={<PageLoading/>}>
          <HaccpPage />
        </Suspense>
      },
      {
        path: "/recipe",
        element: 
        <Suspense fallback={<PageLoading/>}>
          <RecipePage />
        </Suspense>
      },
      {
        path: "/recipe/:id",
        element: 
        <Suspense fallback={<PageLoading/>}>
          <RecipeDetail />
        </Suspense>
      },
      {
        path: "/bmi",
        element: 
        <Suspense fallback={<PageLoading/>}>
         <BmiPage />
        </Suspense>
      },
      {
        path:"/child-diet",
        element:
        <Suspense fallback={<PageLoading/>}>
        <ChildDietPage />
       </Suspense>
      }
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
