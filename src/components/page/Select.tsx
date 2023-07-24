import styles from './Select.module.css'
import Search from '../UI/Search'
import { useState } from 'react'


interface ItemType {
    ANIMAL_PLANT: string,
    BGN_YEAR: string,
    DESC_KOR: string,
    NUTR_CONT1: string, // 열량(kcal)
    NUTR_CONT2: string, // 탄수화물(g)
    NUTR_CONT3: string, // 단백질(g)
    NUTR_CONT4: string, // 지방(g)
    NUTR_CONT5: string, // 당류(g)
    NUTR_CONT6: string, // 나트륨(mg)
    NUTR_CONT7: string, // 콜레스테롤(mg)
    NUTR_CONT8: string, // 포화지방산(g)
    NUTR_CONT9: string, // 트랜스지방산(g)
    SERVING_WT: string // 1회 제공량(g)
}


function Select() {

    const [topFixed, setTopFixed] = useState(true)

    return (
        <section className={styles.select}>
            <article className={styles.select_con}>
                <Search fixed={topFixed}></Search>
            </article>

            <h2>조회된 데이터 목록은 여기에</h2>
        </section>
    );
}

export default Select;