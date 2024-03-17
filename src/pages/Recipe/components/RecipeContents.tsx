import { RecipeType } from '../types/Recipe.types';
import styles from '../RecipeDetail.module.scss';

interface PropsType {
    recipe: RecipeType
}
export default function RecipeContents({ recipe }: PropsType) {

    return (
        <article className={styles.recipe_contents}>
            <h2 className={styles.page_title}>{recipe.RCP_NM}</h2>
            <article className={styles.recipe_top_contents}>
                <img
                    src={recipe.ATT_FILE_NO_MAIN || '/images/background.png'}
                    alt="메인이미지"
                    className={styles.recipe_main_image}
                />
                <ul className={styles.recipe_meta}>
                    <li className={styles.recipe_tags}>
                        <h3>조리방법/요리종류/키워드</h3>
                        <span>{recipe.RCP_WAY2 || '방법'}</span>
                        <span>{recipe.RCP_PAT2 || '종류'}</span>
                        {recipe.HASH_TAG ? <span>{recipe.HASH_TAG}</span> : null}
                    </li>
                    <li>
                        <h3>재료</h3>
                        <span>{recipe.RCP_PARTS_DTLS}</span>
                    </li>
                    <li>
                        <h3>저감 조리법 TIP</h3>
                        <span>{recipe.RCP_NA_TIP}</span>
                    </li>
                </ul>
            </article>
            {/* 요리법 */}
            <div className={styles.middle_line}></div>
            <article className={styles.recipe_bottom_contents}>
                <h3>조리법</h3>
                {[...Array(8)].map((_, index) => (
                    <figure
                        key={index}
                        style={
                            recipe[`MANUAL0${index + 1}`] === '' || recipe === undefined
                                ? { display: 'none' }
                                : { display: 'block' }
                        }
                    >
                        <img src={recipe[`MANUAL_IMG0${index + 1}`]} alt={`만드는법${index + 1}`} />
                        <p>{recipe[`MANUAL0${index + 1}`]}</p>
                    </figure>
                ))}
            </article>
        </article>
    )
}