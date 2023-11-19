import styles from '../ChildDiet.module.scss'
import { DietType } from '../types/Diet.types'

interface PropsType {
    childDietList: DietType[]
}
const ChildDietResults = ({ childDietList }: PropsType) => {
    return (
        <section className={styles.diet_item_box_con}>
            {childDietList.map((diet) => {
                return (
                    <ul key={diet.MEAL_NM} className={styles.diet_item_box}>
                        <li className={styles.diet_item_title}><h3>{diet.MEAL_NM}</h3>
                            <ul className={styles.diet_item_list_con}>
                                <li className={styles.diet_item_list}><strong>열량</strong> {diet.CALORIE_QY}kcal</li>
                                <li className={styles.diet_item_list}><strong>단백질</strong> {diet.PROTEIN_QY}g</li>
                                <li className={styles.diet_item_list}><strong>지방</strong> {diet.FAT_QY}g</li>
                                <li className={styles.diet_item_list}><strong>탄수화물</strong> {diet.CARBOH_QY}g</li>
                            </ul>
                        </li>

                    </ul>
                )
            })}
        </section>
    )
}


export default ChildDietResults