import styles from "../page/LocalFood.module.css"
import { localFoodType } from "../page/LocalFood";

interface Type {
    searchResult? : localFoodType[]
}

function LocalSearchResult({searchResult}:Type) {
    return (
        <article className={styles.foods_flex_con}>
        {searchResult?.map((foods) => {
          return (
            <div className={styles.foods} key={foods.data_manage_no}>
              <p>
                <span>식별 </span>
                {foods.data_manage_no}
              </p>
              <p>
                <span>주소 </span>
                {foods.addr}
              </p>
              <p>
                <span>관련 식당명 </span>
                {foods.relate_rstrnt_nm}
              </p>
              <p>
                <span>식당번호 </span>
                {foods.rstrnt_tel_no}
              </p>
              <p>
                <span>등록일자 </span>
                {foods.regist_de}
              </p>
              <p>
                <span>키워드 </span>
                {foods.core_kwrd_cn}
              </p>
              <p>
                <span>갱신일자 </span>
                {foods.opn_de}
              </p>
              <p>
                <span>시도 </span>
                {foods.ctprvn_nm}
              </p>
              <p>
                <span>시구군 </span>
                {foods.signgu_nm}
              </p>
            </div>
          );
        })}
      </article>
    );
}

export default LocalSearchResult;