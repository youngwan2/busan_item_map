import styles from "./Nutrition.module.scss";
import { useEffect, useState } from 'react'
import SearchForm from "./components/SearchForm";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SearchResults from "./components/SearchResults";
import NutritionPagination from "./components/NutritionPagination";
import { NutritionPageNumber } from "../../atom/NutritionsAtom";
import { useRecoilState } from "recoil";

const Nutrition = () => {

  const [page] = useRecoilState(NutritionPageNumber)
  const [value, setValue] = useState('')
  const [itemTotalCount, setItemTotalCount] = useState(0)
  const [totalPage, setTotalPage] = useState(0)
  useEffect(() => {
    document.title = "식품영양정보조회 | FoodPicker";
  }, []);

  async function getNutrtionInfoFromDB(value: string, page: number = 1) {
    const response = await axios.get(`http://localhost:3000/nutrition?search=${value}&page=${page}`)
    const { result: data, totalCount } = response.data
    setItemTotalCount(totalCount)
    setTotalPage(Math.ceil(totalCount / 20))
    if (response.status !== 200) { throw new Error(response.statusText) }
    if (data.length === 0) { return ["검색하신 키워드에 해당하는 데이터가 존재하지 않습니다."] }

    return data

  }
  const { data: itemList, isFetching } = useQuery({ queryKey: ["nutrition", `${value}`, page], queryFn: () => getNutrtionInfoFromDB(value, page) })
  const hasNutrition = Array.isArray(itemList) && itemList.length === 1
  return (
    <section className={styles.Nutrition_section}>
      <h2 className={styles.nutrition_title}>
        <strong>식품영양정보조회</strong>
      </h2>
      <ul className={styles.guide_message}>
        <li>검색결과: {itemTotalCount}개</li>
        <li>현재위치: {`${page}`}/{Math.ceil(itemTotalCount / 20)}</li>
      </ul>
      <SearchForm setValue={setValue} />
      {isFetching ? <h2>데이터를 불러오고 있습니다. </h2> : null}
      {hasNutrition ? <h2 style={{ marginTop: '2em' }}>조회된 데이터가 존재하지 않습니다.</h2> : <SearchResults itemList={itemList} />}
      <NutritionPagination totalPage={totalPage} />
    </section>

  );
};

export default Nutrition;
