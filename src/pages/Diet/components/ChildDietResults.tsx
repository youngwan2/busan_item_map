import styles from '../ChildDiet.module.scss'
import { DietType } from '../types/Diet.types'
import ChildDietDetailModal from './ChildDietDetailModal'
import { useState } from 'react'

interface PropsType {
    childDietList?: DietType[]
}
const ChildDietResults = ({ childDietList }: PropsType) => {

const [closeModal, setCloseModal] = useState(false)
const [choiceItemIndex, setChoiceItemIndex] = useState(0)
const hasList = childDietList && childDietList.length < 1
 if(childDietList) {
    return (
        <>
        <section className={styles.diet_item_box_con} id='child-diet-results'>
            {hasList && <h2 style={{marginTop:'2em'}}>찾고자 하는 데이터가 존재하지 않습니다.</h2>}
            {childDietList.map((diet,index) => {
                return (
                    <ul key={diet.MEAL_NM||'알 수 없음'} className={styles.diet_item_box} onClick={()=>{
                        setCloseModal(old => old = !old)
                        setChoiceItemIndex(index)
                        console.log(choiceItemIndex)
                    }}>
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
        
        {closeModal?<ChildDietDetailModal setCloseModal={setCloseModal} dietList ={childDietList[choiceItemIndex]}/>:null}
        </>
    )
}
}


export default ChildDietResults