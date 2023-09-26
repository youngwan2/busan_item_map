import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import KaMap from "../components/UI/KaMap";
import ItemTable from "../components/UI/ItemTable";
import HccpSearch from "../components/page/HccpSearch";
import LocalFood from "../components/page/LocalFood";
import Nutrition from "../components/page/Nutrition";
import NutritionDetail from "../components/page/NutritionDetail";

const router = createBrowserRouter([
  {
    path: "/busan_item_map/",
    element: <App></App>,
    errorElement: <h2>컴포넌트를 불러오는 중에 문제가 발생하였습니다.</h2>,
  },
  {
    path: "/map",
    element: <KaMap></KaMap>,
  },
  {
    path: "/busan_item_map/localfood",
    element: <LocalFood></LocalFood>,
  },
  {
    path: "/busan_item_map/nutrition",
    element: <Nutrition></Nutrition>,
  },
  {
    path: "/busan_item_map/item",
    element: <ItemTable></ItemTable>,
  },
  {
    path: "/busan_item_map/haccp",
    element: <HccpSearch></HccpSearch>,
  },
  {
    path: "/busan_item_map/nutrition/:id",
    element: <NutritionDetail />
  },
  {
    path: "*",
    element: <h2>여기는 존재하지 않는 페이지 입니다.</h2>,
  },
]);

export default router;
