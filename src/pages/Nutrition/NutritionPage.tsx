import styles from "./Nutrition.module.scss";
import { useEffect, useState } from 'react'
import { NutritionPageNumber } from "../../atom/NutritionsAtom";
import { useRecoilState } from "recoil";
import ReactSpinner from "../../components/UI/ReactSpinner";
import useDefaultQuery from "../../hooks/useDefaultQuery";
import SearchForm from "./components/SearchForm";
import NutritionPagination from "./components/NutritionPagination";
import SearchResults from "./components/SearchResults";
import GuideMessage from "../../components/Common/GuideMessage";
import NotFound from "../../components/Errors/NotFound";

const MIN_VIEW_COUNT=20
const Nutrition = () => {

  const [page] = useRecoilState(NutritionPageNumber)
  const [value, setValue] = useState('')

  useEffect(() => {
    document.title = "식품영양정보조회 | FoodPicker";
  }, []);

  const url = `/nutritions?search=${value}&page=${page}`
  const key = ['nutrition', value, page]

  const { data, isPending, isFetching } = useDefaultQuery(key, url)

  if (!data && isPending) return <ReactSpinner />
  const { items, totalCount } = data || { items: [], totalCount: 0 }
  const hasItems = Array.isArray(items) && items.length < 1
  const totalPage = Math.ceil(totalCount/MIN_VIEW_COUNT)
  return (
    <section className={styles.Nutrition_section}>
      <h2 className={styles.nutrition_title}>
        <strong>식품영양정보조회</strong>
      </h2>
      <GuideMessage path="/nutrition" mainName="조회 서비스" subName={`식품영양정보조회`} totalCount={totalCount}/>
      <SearchForm setValue={setValue} />
      {isFetching ? <h2>데이터를 불러오고 있습니다. </h2> : null}
      {hasItems ? <NotFound message="요청하신 데이터가 존재하지 않습니다."/> : <SearchResults itemList={items} />}
      <NutritionPagination totalPage={totalPage} />
    </section>

  );
};

export default Nutrition;
