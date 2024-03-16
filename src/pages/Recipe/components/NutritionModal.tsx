import { RecipeType } from '../types/Recipe.types';
import styles from './RecipeNutrition.module.scss';

interface PropsType {
    recipe: RecipeType
    modalState:boolean
}
export default function NutritionModal({ recipe, modalState }: PropsType) {

    const {INFO_CAR, INFO_ENG, INFO_FAT, INFO_PRO, INFO_NA, INFO_WGT} = recipe
    if(!recipe) return <></>
    return (
        <article
            className={styles.modal_con}
            style={
                modalState
                    ? { visibility: 'visible', opacity: 1 }
                    : {
                        visibility: 'hidden',
                        opacity: 0,
                        transform: 'translate(500px,-50%)',
                    }
            }
        >
            <h3 style={{ textAlign: 'center' }}>영양성분표</h3>
            <hr />
            <ul>
                <li>
                    ㅇ <strong>열량(kcal)</strong>
                    {INFO_ENG}
                </li>
                <li>
                    ㅇ <strong>탄수화물(g)</strong>
                    {INFO_CAR}
                </li>
                <li>
                    ㅇ <strong>단백질(g)</strong>
                    {INFO_PRO}
                </li>
                <li>
                    ㅇ <strong>지방(g)</strong>
                    {INFO_FAT}
                </li>
                <li>
                    ㅇ <strong>나트륨(mg)</strong>
                    {INFO_NA}
                </li>
            </ul>
        </article>
    )
}