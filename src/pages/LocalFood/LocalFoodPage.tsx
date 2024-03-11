import { useEffect, useRef } from "react";
import LocalFoodList from "./components/LocalFoodList";
import styles from './LocalFood.module.scss'
import ReactSpinner from "../../components/UI/ReactSpinner";
import GuideMessage from "../../components/Common/GuideMessage";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import useIntersection from "../../hooks/useIntersection";

const LocalFoodPage = () => {

  useEffect(() => {
    document.title = "향토음식조회 | FoodPicker";
  }, []);

  const observerRef = useRef<HTMLButtonElement>(null)

  const { isEnd } = useIntersection(observerRef)
  const { items, totalCount ,isFetching, hasNextPage, fetchNextPage } = useInfiniteScroll('localfood', '/localfood?page=')

  async function nextPageHanlder() {
    const isNext = new Promise((reslove) => {
      if (isEnd) {
        reslove(true)
      } else {
        reslove(false)
      }
    })
    await isNext ? hasNextPage && fetchNextPage() : null
  }

  useEffect(() => {
    if (!hasNextPage) return
    nextPageHanlder()
  }, [isEnd])

  if (!items && isFetching) {
    return <ReactSpinner />
  }

  return (
    <section className={styles.Localfood}>
      <h2 className={styles.page_title}>
        <p>향토음식이야기</p>
      </h2>
      <GuideMessage path="/localfood" mainName='향토 이야기' subName='향토 음식이야기' totalCount={totalCount} />
      <LocalFoodList localfoods={items} />
      <button className={styles.scroll_pointer} ref={observerRef} aria-hidden={'true'}></button>
    </section>
  );
};

export default LocalFoodPage;
