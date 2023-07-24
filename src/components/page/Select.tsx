import styles from './Select.module.css'
import Search from '../UI/Search'
import { useState } from 'react'


interface ItemType {
    ANIMAL_PLANT: string,
    BGN_YEAR: string,
    DESC_KOR: string,
    NUTR_CONT1: string,
    NUTR_CONT2: string,
    NUTR_CONT3: string,
    NUTR_CONT4: string,
    NUTR_CONT5: string,
    NUTR_CONT6: string,
    NUTR_CONT7: string,
    NUTR_CONT8: string,
    NUTR_CONT9: string,
    SERVING_WTL: string
}
function Select() {

    const [topFixed, setTopFixed] =useState(true)


    return (
        <section className={styles.select}>
            <article className={styles.select_con}>
                <Search fixed ={topFixed}></Search>
            </article>

            <h2>조회된 데이터 목록은 여기에</h2>
        </section>
    );
}

export default Select;