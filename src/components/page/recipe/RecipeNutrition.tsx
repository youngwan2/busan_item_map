import { RecipeType } from "../../../type/RecipeType";
import GPT from "../../../util/kakao/gpt";
import NavSearch from "../../UI/NavSearch";
import Movement from "../../UI/movement/Movement";
import styles from './RecipeNutrition.module.scss'
import { useState } from "react";
function RecipeNutrition({recipe}:{recipe?:RecipeType}) {


    const [modalState,setModalState] = useState(false)
    return (
        <>
        <button className={styles.modal_btn} onClick={()=>{
            setModalState(!modalState)
        }}>{modalState?"닫기":"영양성분표"}</button>
        <article className={styles.modal_con} style={modalState?{visibility:'visible',opacity:1}:{visibility:'hidden',opacity:0,transform:'translate(500px,-50%)'}}>
            <h3 style={{textAlign:'center'}}>영양성분표</h3>
            <hr />
            <ul>
                <li>ㅇ <strong>열량(kcal)</strong>{recipe?.INFO_ENG}</li>
                <li>ㅇ <strong>탄수화물(g)</strong>{recipe?.INFO_CAR}</li>
                <li>ㅇ <strong>단백질(g)</strong>{recipe?.INFO_PRO}</li>
                <li>ㅇ <strong>지방(g)</strong>{recipe?.INFO_FAT}</li>
                <li>ㅇ <strong>나트륨(mg)</strong>{recipe?.INFO_NA}</li>
            </ul>
        </article>
        <GPT/>
        <NavSearch/>
        <Movement/>
        </>
    );
}

export default RecipeNutrition;


/* 
6	INFO_ENG	열량
7	INFO_CAR	탄수화물
8	INFO_PRO	단백질
9	INFO_FAT	지방
10	INFO_NA	나트륨


*/