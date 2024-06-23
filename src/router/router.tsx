import 'react-toastify/dist/ReactToastify.css';

import { createBrowserRouter } from 'react-router-dom';

import { lazy, Suspense } from 'react';

import LoadingSpinner from '@/components/Spinner/LoadingSpinner';
import Layout from '@/components/Layout/Layout';
import NotFound from '@/components/Errors/NotFound';
import PageError from '@/components/Errors/PageError';

const Home = lazy(() => import('@/pages/Home/Home'));
const LocalFoodPage = lazy(() => import('@/pages/Local/LocalFood/LocalFoodPage'));
const LocalFoodDetailPage = lazy(() => import('@/pages/Local/LocalFood/LocalFoodDetailPage'));
const LocalMarketPage = lazy(() => import('@/pages/Local/LocalMarket/LocalMarketPage'));
const LocalMarketDetailPage = lazy(() => import('@/pages/Local/LocalMarket/LocalMarketDetailPage'));
const NutritionPage = lazy(() => import('@/pages/Nutrition/NutritionPage'));
const HaccpPage = lazy(() => import('@/pages/Haccp/HaccpPage'));
const RecipePage = lazy(() => import('@/pages/Recipe/RecipePage'));
const RecipeDetail = lazy(() => import('@/pages/Recipe/RecipeDetail'));
const TraditionalFoodPage = lazy(() => import('@/pages/TraditionalFood/TraditionalFoodPage'));


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: '/',
    element: <Layout />,
    errorElement:<PageError>데이터 로드 중 문제가 발생하였어요. 새로고침을 시도해주세요.</PageError>,
    children: [
      {
        path: '/localfood',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <LocalFoodPage />
          </Suspense>
        ),
      },
      {
        path: '/localfood/:id',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <LocalFoodDetailPage />
          </Suspense>
        ),
      },
      {
        path: '/localmarket',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <LocalMarketPage />
          </Suspense>
        ),
      },
      {
        path: '/localmarket/:id',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <LocalMarketDetailPage />
          </Suspense>
        ),
      },
      {
        path: '/nutrition',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <NutritionPage />
          </Suspense>
        ),
      },
      {
        path: '/haccp',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <HaccpPage />
          </Suspense>
        ),
      },
      {
        path: '/recipe',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <RecipePage />
          </Suspense>
        ),
      },
      {
        path: '/recipe/:id',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <RecipeDetail />
          </Suspense>
        ),
      },
      {
        path: '/traditional',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <TraditionalFoodPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <NotFound message="잘못된 경로로 접속 하셨습니다." />,
  },
]);

export default router;
