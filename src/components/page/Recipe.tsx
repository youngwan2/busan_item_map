import axios from 'axios';
import styles from './Recipe.module.css'
import { useState } from 'react';
import { RecipeType } from '../../type/RecipeType';
import Header from '../UI/Header';

function Recipe() {
    const [totalRecipe, setTotalRecipe] = useState(0)
    const [recipes, setRecipes] = useState<RecipeType>()

    const getRecipeDataFromApi = (searchFoodName = "", foodType = "") => {
        const API_KEY = process.env.REACT_APP_FOOD_KEY
        axios.get(`http://openapi.foodsafetykorea.go.kr/api/${API_KEY}/COOKRCP01/json/1/20/RCP_NM=${searchFoodName}/RCP_PAT2=${foodType}`).then((response) => {
            const data = response.data
            const count = data.COOKRCP01.total_count
            const result = data.COOKRCP01.row
            setRecipes(result)
            setTotalRecipe(count)

        })
    }

    return (
        <>
            <Header isStyle={true} />
            <section className={styles.Recipe}>
                <h2 className={styles.page_title}>음식 레시피</h2>
                <article className={styles.search_form}>
                    <div className={styles.search_input_area}>
                        <label htmlFor="recipe_search"></label>
                        <input id='recipe_search' type="search" />
                        <button>검색</button>
                    </div>
                    <div className={styles.search_sortby_area}>
                        <input type="checkbox" value={""} />전체
                        <input type="checkbox" value={"국"} />국
                        <input type="checkbox" value={"밥"} />밥
                        <input type="checkbox" value={"반찬"} />반찬
                        <input type="checkbox" value={"후식"} />후식
                    </div>

                </article>
            </section>
        </>

    );
}

export default Recipe;


/**
 * 번호	항목	설명
1	RCP_SEQ	일련번호
2	RCP_NM	메뉴명
3	RCP_WAY2	조리방법
4	RCP_PAT2	요리종류 ex) 후식, 밥, 반찬 국
5	INFO_WGT	중량(1인분)
6	INFO_ENG	열량
7	INFO_CAR	탄수화물
8	INFO_PRO	단백질
9	INFO_FAT	지방
10	INFO_NA	나트륨
11	HASH_TAG	해쉬태그
12	ATT_FILE_NO_MAIN	이미지경로(소)
13	ATT_FILE_NO_MK	이미지경로(대)
14	RCP_PARTS_DTLS	재료정보
15	MANUAL01	만드는법_01
16	MANUAL_IMG01	만드는법_이미지_01
55	RCP_NA_TIP	저감 조리법 TIP

 * 
 * 
 */