import styles from './NutritionDetail.module.scss'
import {useState,useEffect,useCallback } from 'react'
import { NutritionType } from '../Nutrition/types/nutrition.types'
import { FiArrowLeftCircle } from 'react-icons/fi'
interface PropsType {
    id:number,
    itemList:NutritionType[]
    modalState:boolean
    setModalState:(p:boolean)=>void
}
const NutritionDetailModal = ({id,itemList,setModalState, modalState}:PropsType) => {
    const hasItemInfo = itemList?.length>0
    const [filterData, setFiterdata] = useState<NutritionType>()
    
    // 게시글 필터링(선택한 게시글의 아이디와 일치하는 내용만 모달창에 표시하기 위함)
    const itemFilterFunc = useCallback((id:number,itemList:NutritionType[])=>{
        if(hasItemInfo){
       const items = itemList?.filter((item)=> item.id === id)
       
       return setFiterdata(items[0])}
    },[hasItemInfo])

    useEffect(()=>{
        itemFilterFunc(id,itemList)
    },[id,itemList, itemFilterFunc])

    // const nutritionResultSectionRef = document.getElementById('nutrition_result_section')!
    // console.log(nutritionResultSectionRef)
    if(filterData ){
    return (
        <ul className={styles.nutrition_detail_modal} style={modalState?{visibility:'visible',opacity:1, transform:'rotateX(0deg) translate(-50%,-50%)'}:{visibility:'hidden',opacity:0, transform:'rotateX(30deg)  translate(-50%,100%)'}}>
            <button onClick={()=>{
                setModalState(false)
            }}><FiArrowLeftCircle/></button>
                <li className={styles.item_box}>
                    <h4 className={styles.detail_modal_subtitle}>일반정보</h4>
                    <ul>
                        <li><strong>상품이름</strong>{filterData.PRODUCT_NAME}</li>
                        <li><strong>음식기원</strong>{filterData.PRODUCT_ORIGIN_NAME}</li>
                        <li><strong>자료출처</strong>{filterData.DATA_ORIGIN}</li>
                        <li><strong>열량(kcal)</strong>{filterData.KCAL_QY}</li>
                        <li><strong>상품중량</strong>{filterData.FOOD_WEIGHT}</li>
                        <li><strong>단위중량</strong>{filterData.BASE_QY}</li>
                        <li><strong>데이터생성일자</strong>{filterData.CREATION_DATE}</li>
                        <li><strong>데이터기준일자</strong>{filterData.BASE_DATE}</li>
                    </ul>
                </li>
                <li className={styles.item_box}>
                    <h4 className={styles.detail_modal_subtitle}>비타민</h4>
                    <ul>
                        <li><strong>비타민A(μg)</strong>{filterData.VITAMIN_A_QY}</li>
                        <li><strong>비타민B1(mg)</strong>{filterData.THIAMIN}</li>
                        <li><strong>비타민B2(mg)</strong>{filterData.VITAMIN_B2_QY}</li>
                        <li><strong>비타민B3(mg)</strong>{filterData.VITAMIN_B3_QY}</li>
                        <li><strong>비타민C(mg)</strong>{filterData.VITAMIN_C_QY}</li>
                        <li><strong>비타민D(μg)</strong>{filterData.VITAMIN_D_QY}</li>
                    </ul>
                </li>
                <li className={styles.item_box}>
                    <h4 className={styles.detail_modal_subtitle}>3대 영양(단위:g)</h4>
                    <ul>
                        <li><strong>탄수화물</strong>{filterData.CARBOH_QY}</li>
                        <li><strong>단백질</strong>{filterData.PROTEIN_QY}</li>
                        <li><strong>지방</strong>{filterData.FAT_QY}</li>
                    </ul>
                </li>
                <li className={styles.item_box}>
                    <h4 className={styles.detail_modal_subtitle}>미네랄(단위: mg)</h4>
                    <ul>
                        <li><strong>칼륨</strong>{filterData.POTASSIUM_QY}</li>
                        <li><strong>칼슘</strong>{filterData.CALCIUM_QY}</li>
                        <li><strong>나트륨</strong>{filterData.NATRIUM_QY}</li>
                        <li><strong>인</strong>{filterData.PHOSPHORUS_QY}</li>
                        <li><strong>철분</strong>{filterData.IRON_QY}</li>
                    </ul>
                </li>
                <li className={styles.item_box}>
                    <h4 className={styles.detail_modal_subtitle}>기타 성분</h4>
                    <ul>
                        <li><strong>포화지방(g)</strong>{filterData.SATURATED_FAT_QY}</li>
                        <li><strong>트랜스지방(g)</strong>{filterData.TRANS_FAT_QY}</li>
                        <li><strong>콜레스테롤(mg)</strong>{filterData.CHOLESTEROL_QY}</li>
                        <li><strong>베타카로틴(μg)</strong>{filterData.B_CAROTENE_QY}</li>
                        <li><strong>당류(g)</strong>{filterData.SUGAR_QY}</li>
                        <li><strong>식이섬유(g)</strong>{filterData.DIETARY_FIBER_QY}</li>
                    </ul>
                </li>
            </ul>
    )
} else {
    return <></>
}

}

export default NutritionDetailModal