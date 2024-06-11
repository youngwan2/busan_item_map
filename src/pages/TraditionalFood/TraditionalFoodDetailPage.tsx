import { useParams } from 'react-router-dom'
import styles from './TraditionalDetail.module.scss'
import useFetch from '@/hooks/useFetch'
import { ApiType } from '@/api/get.api'


{/* memo: 공공데이터 포털 외부 api 연결 에러로 미완 */}
export default function TraditionalFoodDetailPage() {

    const params = useParams()?.id || null
    const url =`https://apis.data.go.kr/B551553/TradFoodInfoService/getTradFoodList?serviceKey=${import.meta.env.VITE_PUBLIC_KEY}&pageNo=1&numOfRows=10&type=JSON&foodCd=${params}`
    
    const  { data, isLoading, isError, error } = useFetch(url, ApiType.EXTERNAL)

    console.log(data)

    
    return (
        <section className={styles.traditional_food_detail_page_container} >
            
            {/* <h2 className={styles.traditional_food_detail_page_title}>전통음식 디테일</h2>
            <div>

            </div> */}
        </section>
    )
}