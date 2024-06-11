import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import NotFound from '../components/Errors/NotFound';
import { lazy, Suspense } from 'react';
import LocalFoodDetailPage from '../pages/LocalFood/LocalFoodDetailPage';
import 'react-toastify/dist/ReactToastify.css';
import LocalMarketPage from '../pages/LocalMarket/LocalMarketPage';
import LocalMarketDetailPage from '../pages/LocalMarket/LocalMarketDetailPage';
import LoadingSpinner from '@/components/Common/Spinner/LoadingSpinner';
import TraditionalFoodPage from '@/pages/TraditionalFood/TraditionalFoodPage';
import TraditionalFoodDetailPage from '@/pages/TraditionalFood/TraditionalFoodDetailPage';

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
      <Suspense fallback={<LoadingSpinner />}>
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
      {
        path: '/traditional/:id',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <TraditionalFoodDetailPage />
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
