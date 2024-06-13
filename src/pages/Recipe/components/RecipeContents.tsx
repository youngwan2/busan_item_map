import styles from '../RecipeDetail.module.scss';

import { type RecipeType } from '@/types/Recipe.types';


interface PropsType {
    recipe: RecipeType
}
export default function RecipeContents({ recipe }: PropsType) {

    return (
        <div key={recipe.RCP_SEQ} className={styles.recipe_contents_inner_container}>

            {/* 레시피 개요 */}
            <div className={styles.recipe_contents_summary}>
                {/* 레시피 이미지 */}
                <img
                    src={recipe.ATT_FILE_NO_MAIN || '/images/background.png'}
                    alt={recipe.RCP_NM || '레시피 이미지'}
                    className={styles.recipe_main_image}
                />
                <div className={styles.recipe_summary}>
                    <h2 className={styles.recipe_menu_title}>{recipe.RCP_NM}</h2>
                    <ul className={styles.recipe_meta}>
                        <li className={styles.recipe_keywords}>
                            <h3>조리방법</h3>
                            <span>{recipe.RCP_WAY2 || '정보 없음'}</span>
                        </li>
                        <li className={styles.recipe_keywords}>
                            <h3>분류</h3>
                            <span>{recipe.RCP_PAT2 || '정보 없음'}</span>
                        </li>
                        <li className={`${styles.recipe_keywords} ${styles.recipe_tags}`}>
                            <h3>태그</h3>
                            <span>{recipe.HASH_TAG || '정보 없음'}</span>
                        </li>
                        <li className={styles.recipe_ingredient}>
                            <h3>재료</h3>
                            <p>
                                {recipe.RCP_PARTS_DTLS.split(',').map((splitText, i) => {
                                    return <span key={splitText} className={styles.split_container}><mark>{i + 1}</mark> <span className={styles.split_text}>{splitText}</span></span>
                                })}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            {/* 저감 조리법 팁 */}
            <div className={styles.recipe_tip}>
                <h3>저감 조리법 TIP</h3>
                <p>{recipe.RCP_NA_TIP}</p>
            </div>

            {/* 레시피 내용 */}
            <div className={styles.recipe_contents_detail}>
                <h3>조리법</h3>
                <div className={styles.recipe_figure_container}>
                    {[...Array(8)].map((_, index) => (
                        <figure
                            key={index}
                            style={
                                recipe[`MANUAL0${index + 1}`] === '' || recipe === undefined
                                    ? { display: 'none' }
                                    : { display: 'flex' }
                            }
                        >
                            <img src={recipe[`MANUAL_IMG0${index + 1}`]} alt={`만드는법${index + 1}`} />
                            <p>{recipe[`MANUAL0${index + 1}`]}</p>
                        </figure>
                    ))}
                </div>
            </div>
        </div>
    )
}