import styles from './Recipe.module.scss';
import { useEffect, useState, useRef } from 'react';
import { RecipeType } from './types/Recipe.types';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setRecipe } from '../../store/slice/recipeSearch';
import RecipeSearchForm from './components/RecipeSearchForm';
import RecipeList from './components/RecipeList';
import { ApiType, getDefaultFetcher } from '../../api/get.api';
import { toast } from 'react-toastify';
import RecipeSpinner from './components/RecipeSpinner';
import GuideMessage from '../../components/Common/GuideMessage';

const API_KEY = import.meta.env.VITE_FOOD_KEY;

export default function RecipePage() {
  const [userInputValue, setUserInputValue] = useState('');
  const [categories] = useState(['', '후식', '국', '반찬', '밥', '일품', '기타']);
  const [checkedMenu, setCheckedMenu] = useState('');
  const [undefinedMessage, setUndefinedMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState<RecipeType[]>();

  const sectionRef = useRef<HTMLBaseElement>(null);
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => {
    return state.recipe;
  });

  useEffect(() => {
    document.title = '레시피 정보조회 | FoodPicker';
  }, []);

  useEffect(() => {
    setRecipes(state.value);
  }, [state.value]);

  /* axios.then */
  function axiosThen(data: any) {
    const result = data.COOKRCP01.row;
    if (result) {
      setRecipes(result);
      setUndefinedMessage('');
      dispatch(setRecipe(result));
    } else {
      setUndefinedMessage(data.COOKRCP01.RESULT.MSG);
    }
    setLoading(false);
  }
  // 레시피 데이터 API 요청
  const getRecipeDataFromOpenApi = async (searchFoodName: string = '', foodType: string = '') => {
    setLoading(true);
    const hasFoodName = searchFoodName.length;
    const hasFoodType = foodType.length;
    const isEmptyReq = hasFoodName === 0 && hasFoodType >= 0
    const isAllMenu = hasFoodType === 0 && hasFoodName >= 1
    const isChoiceMenu = hasFoodName >= 1 && hasFoodType > 0

    if (isEmptyReq) {
      setLoading(false);
      setUndefinedMessage('검색어를 입력해주세요.');
      toast.warn('검색어를 입력해주세요.')
      return;
    }
    const url = isAllMenu ? `https://openapi.foodsafetykorea.go.kr/api/${API_KEY}/COOKRCP01/json/1/200/RCP_NM=${searchFoodName}` : isChoiceMenu ? `https://openapi.foodsafetykorea.go.kr/api/${API_KEY}/COOKRCP01/json/1/200/RCP_NM=${searchFoodName}&RCP_PAT2=${foodType}` : null
    const data = await getDefaultFetcher(url,ApiType.EXTERNAL)
    if(!data) return toast.error('데이터 요청에 실패하였습니다.')
    return axiosThen(data)
  };

  const recipeCount  = recipes?.length || 0
  return (
    <section className={styles.Recipe} ref={sectionRef}>
      <h2 className={styles.page_title}>음식 레시피</h2>
      <GuideMessage path='/recipe' mainName='조회서비스' subName='음식레시피' totalCount={recipeCount}/>
      <RecipeSearchForm
        setCheckedMenu={setCheckedMenu}
        setUserInputValue={setUserInputValue}
        getRecipeDataFromApi={getRecipeDataFromOpenApi}
        userInputValue={userInputValue}
        checkedMenu={checkedMenu}
        categories={categories}
      />
      <RecipeSpinner loading={loading}/>
      <RecipeList recipes={recipes} meg={undefinedMessage}/>
    </section>
  );
}

