import { useSelector } from "react-redux/es/hooks/useSelector";
import { useRef, useEffect } from "react";

import BackButton from "./components/BackButton";
import DetailContent from "./components/DetailContent";

const NutritionDetail = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const detailNutritionData = useSelector<any>(
    (state) => state.nutrition
  ) as any;

  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.scrollIntoView(true);
    }
  }, []);

  useEffect(() => {
    document.title = detailNutritionData
      ? `${detailNutritionData.식품명} : ${detailNutritionData.식품기원명}`
      : "Not Found 404 | FoodPicker";
  }, []);

  return (
    <section ref={pageRef}>
      <BackButton />
      <DetailContent detailNutritionData={detailNutritionData} />
    </section>
  );
};

export default NutritionDetail;
