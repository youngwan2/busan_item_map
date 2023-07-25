import styles from "./Select.module.css";
import Search from "../UI/Search";
import { useState } from "react";
import { useAppSelector } from "../../app/hooks";
interface ItemType {
  ANIMAL_PLANT: string;
  BGN_YEAR: string;
  DESC_KOR: string; // 식품이름
  NUTR_CONT1: string; // 열량(kcal)
  NUTR_CONT2: string; // 탄수화물(g)
  NUTR_CONT3: string; // 단백질(g)
  NUTR_CONT4: string; // 지방(g)
  NUTR_CONT5: string; // 당류(g)
  NUTR_CONT6: string; // 나트륨(mg)
  NUTR_CONT7: string; // 콜레스테롤(mg)
  NUTR_CONT8: string; // 포화지방산(g)
  NUTR_CONT9: string; // 트랜스지방산(g)
  SERVING_WT: string; // 1회 제공량(g)
}

function Select() {
  const [topFixed, setTopFixed] = useState(true);

  const test = useAppSelector((state) => {
    return state.search.value;
  });
  console.log(test);

  return (
    <section className={styles.select}>
      <article className={styles.select_con}>
        <Search fixed={topFixed}></Search>
      </article>
      <section className={styles.content_container}>
        {/* {test[0]} */}
        {Array.isArray(test) ? (
          test.map((item: any, i) => {
            console.log(item);
            return (
              <ul className={styles.search_items} key={item.DESC_KOR+item.BGN_YEAR}>
                <li><h3>{item.DESC_KOR}{`(${item.BGN_YEAR})`}</h3></li>
                <li>
                  <span>열량(kcal):</span>
                  {item.NUTR_CONT1}
                </li>
                <li>
                  <span>탄수화물(g):</span>
                  {item.NUTR_CONT2}
                </li>
                <li>
                  <span>단백질(g):</span>
                  {item.NUTR_CONT3}
                </li>
                <li>
                  <span>지방(g):</span>
                  {item.NUTR_CONT4}
                </li>
                <li>
                  <span>당류(g):</span>
                  {item.NUTR_CONT5}
                </li>
                <li>
                  <span>나트륨(mg):</span>
                  {item.NUTR_CONT6}
                </li>
                <li>
                  <span>콜레스테롤(mg):</span>
                  {item.NUTR_CONT7}
                </li>
                <li>
                  <span>포화지방산(g):</span>
                  {item.NUTR_CONT8}
                </li>
                <li>
                  <span>트랜스지방산(g):</span>
                  {item.NUTR_CONT9}
                </li>
                <li>
                  <span>1회제공량(g):</span>
                  {item.SERVING_WT}
                </li>
              </ul>
            );
          })
        ) : (
          <div>{test}</div>
        )}
      </section>
    </section>
  );
}

export default Select;
