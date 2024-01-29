import { useEffect, useState } from "react";
import LocalFoodList from "./components/LocalFoodList";
import styles from './LocalFood.module.scss'
import { useQuery } from "@tanstack/react-query";
import { getLocalFoodListFormDB } from "../../api/get.api";

const LocalFoodPage = () => {

  useEffect(() => {
    document.title = "향토음식조회 | FoodPicker";
  }, []);

    const [page, setPage] = useState(0)
    const {data, isPending, isError, error } = useQuery({queryKey:['localFood'], queryFn:()=> getLocalFoodListFormDB(page)})
    console.log(data)

  if(isPending) {
    return <span>로딩중...</span>
  }
  if(isError) {
    return <span>에러발생 : {error.message}</span>
  }
  return (
    <>
      <h2>향토음식 이야기</h2>
      <LocalFoodList />



      <article>
        <button onClick={()=> setPage((old)=> Math.max(old -1, 0))}>이전</button>
        <button onClick={()=> setPage((old)=> Math.min(old +1, 5))}>다음</button>
      </article>
    </>
  );
};

export default LocalFoodPage;
