import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import KaMap from "../components/UI/KaMap";
import ItemTable from "../components/UI/ItemTable";
import HccpSearch from "../components/page/HccpSearch";
import LocalFood from "../components/page/LocalFood";
import Nutrition from "../components/page/Nutrition";
import NutritionDetail from "../components/page/NutritionDetail";
import NotFound from "../components/errror/NotFound";
import Recipe from "../components/page/recipe/Recipe";
import RecipeDetail from "../components/page/recipe/RecipeDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <h2>컴포넌트를 불러오는 중에 문제가 발생하였습니다.</h2>,
  },
  {
    path: "/map",
    element: <KaMap></KaMap>,
  },
  {
    path: "/localfood",
    element: <LocalFood></LocalFood>,
  },
  {
    path: "/nutrition",
    element: <Nutrition></Nutrition>,
  },
  {
    path: "/item",
    element: <ItemTable></ItemTable>,
  },
  {
    path: "/haccp",
    element: <HccpSearch></HccpSearch>,
  },
  {
    path: "/nutrition/:id",
    element: <NutritionDetail />,
  },
  {
    path: "/food-recipe",
    element: <Recipe />,
  },
  {
    path: "/food-recipe/detail/:id",
    element: <RecipeDetail />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
