import { useState } from 'react';
import styles from '../ChildDiet.module.scss'

interface PropsType {
  setChoiceFoodIngredient: (p: string) => void
  setChoiceKeyword: (p: string) => void
  totalItemCount:number
}
const ChildDietFilterMenu = ({ setChoiceFoodIngredient, setChoiceKeyword,totalItemCount }: PropsType) => {

  const [keywords] = useState([
    '전체','미음', '죽', '찜', '조림', '수프', '밥', '탕', '샐러드', '완자', '라이스', '퓨레', '수제비', '국수'
  ])

  const [foodIngredients] = useState(
    [ '전체',
      '쌀', '감자', '고구마', '브로콜리', '호박', '배추',
      '두부', '버섯', '치즈', '시금치', '계란', '가슴살',
      '옥수수', '다시마', '콩', '대구', '비츠', '오이',
      '사과', '청경채', '수박', '쇠고기', '닭고기', '배', '바나나', '명태'
    ]
  )
  return (
    <article className={styles.Menu_article}>
      <fieldset className={styles.keyword_field}>
        <legend>키워드</legend>
        {keywords.map((keyword) => {
          return (
            <div key={keyword} className={styles.keyword_list_con}>
              <input id={'childDiet' + keyword} type='radio' value={keyword} name={'diet_keyword'} onClick={() => {
                if(keyword ==='전체') return setChoiceKeyword('')
                setChoiceKeyword(keyword)
              }}></input>
              <label htmlFor={'childDiet' + keyword}>{keyword}</label>
            </div>
          )
        })}
      </fieldset>
      <fieldset className={styles.keyword_field}>
        <legend>재료</legend>
        {foodIngredients.map((ingredient) => {
          return (
            <div key={ingredient} className={styles.ingredient_list_con}>
              <input id={'childDiet' + ingredient} type='radio' value={ingredient} name={'diet_ingredient'} onClick={()=>{
                if(ingredient ==='전체') return setChoiceFoodIngredient('')
                setChoiceFoodIngredient(ingredient)
              }}></input>
              <label htmlFor={'childDiet' + ingredient}>{ingredient}</label>
            </div>
          )
        })}
      </fieldset>
      <span style={{ background:'rgba(0,0,588,0.7)', position:'fixed', top:'5rem',right:'2rem', color:'white',padding:'3px 5px', borderRadius:'5px'}}>검색결과: {totalItemCount||0}개</span>
    </article>
  );
}

export default ChildDietFilterMenu;