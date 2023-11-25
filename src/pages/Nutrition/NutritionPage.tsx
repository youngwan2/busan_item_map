import styles from "./Nutrition.module.scss";
import { useEffect, useState } from 'react'
import SearchForm from "./components/SearchForm";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SearchResults from "./components/SearchResults";

const Nutrition = () => {

  const [value, setValue] = useState('')
  useEffect(() => {
    document.title = "식품영양정보조회 | FoodPicker";
  }, []);

  const [page, setPage] = useState(1)
  async function getNutrtionInfoFromDB(value: string, page: number = 1) {
    const response = await axios.get(`http://localhost:3000/nutrition?search=${value}&page=${page}`)
    const data = response.data.result
    if (response.status !== 200) { throw new Error(response.statusText) }
    if(data.length ===0) {return ["검색하신 키워드에 해당하는 데이터가 존재하지 않습니다."]}
    return data

  }
  const { data: itemList, isFetching } = useQuery({ queryKey: ["nutrition", `${value}`, page], queryFn: () => getNutrtionInfoFromDB(value) })
  const hasNutrition=Array.isArray(itemList) && itemList.length===1 
  return (
    <section className={styles.Nutrition_section}>
      <h2 className={styles.nutrition_title}>
        <strong>식품영양정보조회</strong>
      </h2>
      <SearchForm setValue={setValue} />
      {isFetching ? <h2>데이터를 불러오고 있습니다. </h2> :  null}
      {hasNutrition?<h2>조회된 데이터가 존재하지 않습니다.</h2>:<SearchResults itemList={itemList} />}
    </section>
  );
};

export default Nutrition;
