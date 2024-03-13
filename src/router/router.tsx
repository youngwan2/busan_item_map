/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import NotFound from '../components/Errors/NotFound';
import { lazy, Suspense } from 'react';
import LocalFoodDetailPage from '../pages/LocalFood/LocalFoodDetailPage';
import 'react-toastify/dist/ReactToastify.css';
import ReactSpinner from '../components/UI/ReactSpinner';
import LocalMarketPage from '../pages/LocalMarket/LocalMarketPage';
import LocalMarketDetailPage from '../pages/LocalMarket/LocalMarketDetailPage';

const Home = lazy(() => import('../pages/Home/Home'));
const LocalFoodPage = lazy(() => import('../pages/LocalFood/LocalFoodPage'));
const NutritionPage = lazy(() => import('../pages/Nutrition/NutritionPage'));
const HaccpPage = lazy(() => import('../pages/Haccp/HaccpPage'));
const RecipePage = lazy(() => import('../pages/Recipe/RecipePage'));
const RecipeDetail = lazy(() => import('../pages/Recipe/RecipeDetail'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<ReactSpinner />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/localfood',
        element: (
          <Suspense fallback={<ReactSpinner />}>
            <LocalFoodPage />
          </Suspense>
        ),
      },
      {
        path: '/localfood/:id',
        element: (
          <Suspense fallback={<ReactSpinner />}>
            <LocalFoodDetailPage />
          </Suspense>
        ),
      },
      {
        path: '/localmarket',
        element: (
          <Suspense fallback={<ReactSpinner />}>
            <LocalMarketPage />
          </Suspense>
        ),
      },
      {
        path: '/localmarket/:id',
        element: (
          <Suspense fallback={<ReactSpinner />}>
            <LocalMarketDetailPage />
          </Suspense>
        ),
      },
      {
        path: '/nutrition',
        element: (
          <Suspense fallback={<ReactSpinner />}>
            <NutritionPage />
          </Suspense>
        ),
      },
      {
        path: '/haccp',
        element: (
          <Suspense fallback={<ReactSpinner />}>
            <HaccpPage />
          </Suspense>
        ),
      },
      {
        path: '/recipe',
        element: (
          <Suspense fallback={<ReactSpinner />}>
            <RecipePage />
          </Suspense>
        ),
      },
      {
        path: '/recipe/:id',
        element: (
          <Suspense fallback={<ReactSpinner />}>
            <RecipeDetail />
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
