
import styles from './TraditionalFood.module.scss'
import { ChangeEvent, MouseEvent, SyntheticEvent, useState } from 'react'
import useDefaultQuery from '@/hooks/useDefaultQuery'

import GuideMessage from '@/components/GuideMessage'
import Pagination from '@/components/Pagination'
import ListContainer from '@/components/Common/Container'
import TraditionalFoodList from './components/TraditionalFoodList'
import TraditionalFoodSearchForm from './components/TraditionalFoodSearchForm'
import TraditionalFoodFilter from './components/TraditionalFoodFilter'
import LoadViewCountModal from '@/components/Modal/LoadViewCountModal'


const MIN_VIEW_COUNT = 20
/** todo: 페이지별로 중복되는 함수 모듈과 상태가 있음. 이들을 커스텀 훅으로 바꾸어서 재사용 가능한 형태로 */
export default function TraditionalFoodPage() {

  const [productName, setProductName] = useState('');
  const [categories, setCategories] = useState({
    main: '부식',
    sub: '구이류',
    detail: '전',
    foodType: '복합식품'
  })

  const [page, setPage] = useState(1)


  const url = `/traditionalfood?name=${productName}&main=${categories.main}&sub=${categories.sub}&detail=${categories.detail}&food_type=${categories.foodType}&page=${page}`

  const { data = [], isFetching } = useDefaultQuery(['traditionalfood',productName, categories, page], url)
  const { items: products= [], totalCount = 0 } = data
  const hasProducts = Array.isArray(products) && products.length > 0;
  const totalPage = Math.ceil(totalCount / MIN_VIEW_COUNT) || 1;

  /** 검색어 반환 */
  function getSearchValue(input: HTMLInputElement) {
    if (!(input instanceof HTMLInputElement)) return
    if (input.value.length <= 1) return false
    const searchProduct = input.value
    return searchProduct
  }


  /** action: 검색 Form 액션 */
  function searchAction(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    const input = e.currentTarget.childNodes[1] as HTMLInputElement
    const searchProductName = getSearchValue(input) || ''
    updateState(searchProductName, 1)
  }

  /** 검색어 초기화 */
  function onReset() {
    setProductName('')
  }

  function categoryStateReset(){
    setCategories({
      main: '',
      sub: '',
      detail: '',
      foodType: ''
    })
  }

  /** 버튼 검색 액션 */
  async function onSearch(e: MouseEvent<HTMLButtonElement>) {
    const input = e.currentTarget.previousElementSibling as HTMLInputElement
    const searchProductName = getSearchValue(input) || ''
    updateState(searchProductName, 1)
  }
  function updateState(productName: string, initialPage: number) {
    categoryStateReset()
    setProductName(productName)
    setPage(initialPage)
    
  }

  /** 필터*/
  function onChangeSetCategory(e: ChangeEvent<HTMLInputElement>, key: "main" | "sub" | "detail" | "foodType") {
    const value = e.currentTarget.dataset.value
    const isChecked = e.currentTarget.checked

    if (isChecked) {
      setCategories(old => ({ ...old, [key]: value }))
    } else {
      setCategories(old => ({ ...old, [key]: '' }))
    }
  }



  /** 페이지네이션 */
  function onPageSwitch(page: number) {
    setPage(page)
  }

  return (
    <section className={`${styles.traditional_food_page_container}`}>
      <h2 className={styles.traditional_food_page_title}>전통음식</h2>
      <div className={styles.traditional_food_page_inner_boundary}>
        <GuideMessage stylesClassName={styles.page_path_guide_message} path='/traditional' subPath='/traditional' mainName='조회서비스' subName='전통식품' totalCount={0} />
        <TraditionalFoodSearchForm action={searchAction} onSearch={onSearch} onReset={onReset} />
        <TraditionalFoodFilter onChange={onChangeSetCategory} categories={categories} />
        <LoadViewCountModal type totalProductCount={totalPage} currentProductCount={page}/>
        <ListContainer container={'section'} className={`${styles.traditional_food_list_container}`}>
          <h2 className={styles.traditional_food_list_title}>전통음식 목록({totalCount})</h2>
          <span className={styles.traditional_food_category}>{(categories.main||'대분류')+ '>' + (categories.sub||'중분류') + '>' + (categories.detail||'소분류')}</span>
          {isFetching
            ? <p className={styles.traditional_food_list_loading_message}>데이터를 조회중입니다.</p>
            : hasProducts
              ? <TraditionalFoodList products={products} />
              : <p className={styles.traditional_food_list_loading_message}>조회된 목록이 존재하지 않습니다.</p>}
        </ListContainer>

        <Pagination onPageSwitch={onPageSwitch} page={page} totalPage={totalPage} />
      </div>
    </section>
  )
}