import { createBrowserRouter } from "react-router-dom";
import Header from "../components/Common/Header";
import LocalFoodPage from "../pages/LocalFood/LocalFoodPage";
import NutritionPage from "../pages/Nutrition/NutritionPage";
import NecessitiesPage from "../pages/Necessities/NecessitiesPage";
import HaccpPage from "../pages/Haccp/HaccpPage";
import RecipePage from "../pages/Recipe/RecipePage";
import RecipeDetail from "../pages/Recipe/RecipeDetail";
import BmiPage from "../pages/Bmi/BmiPage";
import NutritionDetail from "../pages/NutritionDetail/NutritionDetailPage";
import NotFound from "../components/Errors/NotFound";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <Header isStyle={true} />,
    children: [

      {
        path: "/localfood",
        element: <LocalFoodPage />,
      },
      {
        path: "/nutrition",
        element: <NutritionPage />,
      },
      {
        path: "/busan-necessities",
        element: <NecessitiesPage />,
      },
      {
        path: "/haccp",
        element: <HaccpPage />,
      },
      {
        path: "/recipe",
        element: <RecipePage />,
      },
      {
        path: "/recipe/:id",
        element: <RecipeDetail />,
      },
      {
        path: "/calculate",
        element: <BmiPage />,
      },
    ],
  },
  {
    path: "/nutrition/:id",
    element: <NutritionDetail />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
