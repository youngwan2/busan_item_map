import { DietType } from "../types/Diet.types"
import styles from '../ChildDiet.module.scss'
import { FiX } from "react-icons/fi"
interface PropsType {
    dietList: DietType
    setCloseModal: (p: boolean) => void
}
const ChildDietDetailModal = ({ dietList, setCloseModal }: PropsType) => {
    const split = dietList.COOK_MTH_CONT.split('.')
    console.log(split)
    return (
        <>
            <section className={styles.Diet_modal_section}>

                <ul className={styles.modal_left}>
                    <li><h3 className={styles.modal_id}> CHAPTER {dietList.id} : {dietList.MEAL_NM} 만들기</h3></li>
                    <li className={styles.modal_close_btn}><button onClick={()=>{
                        setCloseModal(false)
                    }} ><FiX fontSize={20}/></button></li>
                    <li><strong>음식명</strong> <p>{dietList.MEAL_NM}</p></li>
                    <li><strong>재료명</strong><p>{dietList.MATRL_NM}</p></li>
                    <li><strong>레시피</strong> <br />{split.map((cook) => { return (<p>{cook.replaceAll('<br>', '')}</p>) })}</li>

                </ul>
                <ul className={styles.modal_right}>
                    <li><strong>칼로리</strong><p>{dietList.CALORIE_QY || '알수없음'}(kcal)</p></li>
                    <li><strong>칼슘</strong><p>{dietList.CALCIUM_QY || '알수없음'}(mg)</p></li>
                    <li><strong>칼륨</strong><p>{dietList.RIBOFLAMIN_QY || '알수없음'}(mg)</p></li>
                    <li><strong>탄수화물</strong><p>{dietList.CARBOH_QY || '알수없음'}(g)</p></li>
                    <li><strong>지방</strong><p>{dietList.FAT_QY || '알수없음'}(g)</p></li>
                    <li><strong>단백질</strong><p>{dietList.PROTEIN_QY || '알수없음'}(g)</p></li>
                    <li><strong>나트륨</strong><p>{dietList.NATRIUM_QY || '알수없음'}(mg)</p></li>
                    <li><strong>나이아신</strong><p>{dietList.NIACIN_QY || '알수없음'}(㎍)</p></li>
                    <li><strong>인</strong><p>{dietList.PHOSPH_QY || '알수없음'}(mg)</p></li>
                    <li><strong>비타민A</strong><p>{dietList.VITAMINA_QY || '알수없음'}(㎍)</p></li>
                    <li><strong>비타민C</strong><p>{dietList.VITAMINC_QY || '알수없음'}(mg)</p></li>
                </ul>
            </section>
            <div className={styles.modal_overlay} onClick={() => {
                setCloseModal(false)
            }}></div>
        </>
    )
}

export default ChildDietDetailModal