import styles from "./RecipeDetail.module.scss";
import Header from "../../UI/Header";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { RecipeType } from "../../../type/RecipeType";
import RecipeNutrition from "./RecipeNutrition";
import NextRecipe from "../../module/NextRecipe";

function RecipeDetail() {
  const detailSectionRef = useRef<HTMLBaseElement>(null);
  const params = useParams();
  const [recipe, setRecipe] = useState<RecipeType>();

  const state = useAppSelector((state) => {
    sessionStorage.setItem("recipe", JSON.stringify({recipes:state.recipe.value}));
    return state.recipe;
  }).value.filter((recipe) => {
    return recipe.RCP_SEQ === params.id;
  });


  
  useEffect(()=>{
    document.title ="레시피 상세조회 | FoodPicker"
  },[])


  useEffect(() => {
    setRecipe(state[0]);
    console.log(recipe);
  }, [params]);

  useEffect(() => {
    if (detailSectionRef.current) {
      detailSectionRef.current.scrollIntoView({ block: "start" });
    }
  }, []);
  return (
    <>
      <Header isStyle={true} />
      <section className={styles.recipe_detail_section} ref={detailSectionRef}>
        <h2 className={styles.page_title}>{recipe?.RCP_NM}</h2>
        <img
          src={recipe?.ATT_FILE_NO_MAIN || "/images/background.png"}
          alt="메인이미지"
          className={styles.recipe_image}
        />

        <article className={styles.recipe_content_con}>
          <section className={styles.etc}>
            <h3>조리방법/요리종류/키워드</h3>
            <div>
              <p>{recipe?.RCP_WAY2 || "방법"}</p>
              <p>{recipe?.RCP_PAT2 || "종류"}</p>
              <p>{recipe?.HASH_TAG}</p>
            </div>
          </section>
          <section>
            <h3>재료</h3>
            <p>{recipe?.RCP_PARTS_DTLS}</p>
          </section>
          <section>
            <h3>저감 조리법 TIP</h3>
            <p>{recipe?.RCP_NA_TIP}</p>
          </section>

          <section>
            <h3>만드는 법</h3>
            <article className={styles.recipe_making_items}>
              <figure
                style={
                  recipe?.MANUAL01 === "" || recipe === undefined
                    ? { display: "none" }
                    : { display: "block" }
                }
              >
                <img src={recipe?.MANUAL_IMG01} alt="만드는법1" />
                <p>{recipe?.MANUAL01}</p>
              </figure>
              <figure
                style={
                  recipe?.MANUAL02 === "" || recipe === undefined
                    ? { display: "none" }
                    : { display: "block" }
                }
              >
                <img src={recipe?.MANUAL_IMG02} alt="만드는법2" />
                <p>{recipe?.MANUAL02}</p>
              </figure>
              <figure
                style={
                  recipe?.MANUAL03 === "" || recipe === undefined
                    ? { display: "none" }
                    : { display: "block" }
                }
              >
                <img src={recipe?.MANUAL_IMG03} alt="만드는법3" />
                <p>{recipe?.MANUAL03}</p>
              </figure>
              <figure
                style={
                  recipe?.MANUAL04 === "" || recipe === undefined
                    ? { display: "none" }
                    : { display: "block" }
                }
              >
                <img src={recipe?.MANUAL_IMG04} alt="만드는법4" />
                <p>{recipe?.MANUAL04}</p>
              </figure>
              <figure
                style={
                  recipe?.MANUAL05 === "" || recipe === undefined
                    ? { display: "none" }
                    : { display: "block" }
                }
              >
                <img src={recipe?.MANUAL_IMG05} alt="만드는법5" />
                <p>{recipe?.MANUAL05}</p>
              </figure>
              <figure
                style={
                  recipe?.MANUAL06 === "" || recipe === undefined
                    ? { display: "none" }
                    : { display: "block" }
                }
              >
                <img src={recipe?.MANUAL_IMG06} alt="만드는법6" />
                <p>{recipe?.MANUAL06}</p>
              </figure>
              <figure
                style={
                  recipe?.MANUAL07 === "" || recipe === undefined
                    ? { display: "none" }
                    : { display: "block" }
                }
              >
                <img src={recipe?.MANUAL_IMG07} alt="만드는법7" />
                <p>{recipe?.MANUAL07}</p>
              </figure>
              <figure
                style={
                  recipe?.MANUAL08 === "" || recipe === undefined
                    ? { display: "none" }
                    : { display: "block" }
                }
              >
                <img src={recipe?.MANUAL_IMG08} alt="만드는법8" />
                <p>{recipe?.MANUAL08}</p>
              </figure>
            </article>
          </section>
        </article>
      </section>
      <RecipeNutrition recipe={recipe} />
      <br />
      <hr />
      <br />
      <NextRecipe param={params.id} />
    </>
  );
}

export default RecipeDetail;

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
