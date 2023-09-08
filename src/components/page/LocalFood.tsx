import styles from './LocalFood.module.css'
import { localFoods } from './localfood(202212)'
import Header from '../UI/Header'
import { useEffect, useState, useCallback } from 'react'
import { MouseEvent } from 'react'


type localFoodType = {
    addr: string,
    cntnts_url: string,
    core_kwrd_cn: string,
    ctprvn_nm: string,
    data_manage_no: string,
    data_title_nm: string,
    main_thumb_url: string
    era_nm: string,
    opn_de: string,
    regist_de: string
    sbjt_nm: string,
    signgu_nm: string,
    sumry_cn: string,
    relate_rstrnt_nm: string,
    rstrnt_addr: string,
    rstrnt_tel_no: string
}

const LocalFood = () => {

    const [localFoodData, setLocalFoodData] = useState<localFoodType[]>()
    const [filterKeyword, setFilterKeyword] = useState('')
    const [title, setTitle] = useState<string[]>()
    const [searchResult, setSearchResult] = useState<localFoodType[]>()
    const [display, setDisplay] = useState(false)
    async function localFoodDataFromJSON() {
        setLocalFoodData(localFoods)
    }

    // 전체 목록에서 중복을 제외한 카테고리 목록을 필터링하는 함수
    const categoryFilter = useCallback(() => {
        console.log(filterKeyword)

        const filterList: any[] = []
        localFoods?.forEach((data, i) => {
            filterList.push(data.data_title_nm)
        })
        const filterTitle = [...new Set(filterList)]

        setTitle(filterTitle)
    }, [filterKeyword])

    // 카테고리 중 목록 선택시 데이터 조회하는 함수
    const searchFilter = (e: MouseEvent<HTMLLIElement>) => {
        const choiceTitle = e.currentTarget.textContent!

        const choiceFood = localFoods.filter((food, i) => {
            return (food.data_title_nm.includes(choiceTitle))
        })
        console.log(choiceFood)

        setSearchResult(choiceFood)
    }

    useEffect(() => {
        localFoodDataFromJSON()
        categoryFilter()

    }, [categoryFilter])

    return (
        <>
            <Header isStyle={true} />

            <article className={styles.category_con}>
                <ol className={styles.category} style={display ? { display: 'block' } : { display: 'none' }}>
                    <button
                        onClick={() => {
                            setDisplay(false)
                        }}
                        className={styles.slide_btn_inner}>닫기</button>
                    {title?.map((title) => {
                        return (
                            <li onClick={searchFilter}>{title}</li>
                        )
                    })}
                </ol>
            </article>
            <section className={styles.LocalFood}>
                <button
                    onClick={() => {
                        setDisplay(true)
                    }}
                    className={styles.slide_btn_outer} style={!display ? { display: 'block' } : { display: 'none' }}>카테고리</button>

                <section className={styles.contents}>
                    <h3>정보 제공하는 영역</h3>
                    <img  width={400} height={400} src={searchResult !== undefined ? `${searchResult[0].main_thumb_url}` : ''} alt='thumb'></img>
                    <p className={styles.foods_sumry}> {searchResult !== undefined? searchResult[0].sumry_cn:null}</p>
                    <article className={styles.foods_flex_con}>
                        {searchResult?.map((foods) => {
                            return (
                                <div className={styles.foods}>

                                    <p><span>부제목 </span>{foods.sbjt_nm}</p>
                                    <p><span>주소 </span>{foods.addr}</p>
                                    <p><span>관련 식당명 </span>{foods.relate_rstrnt_nm}</p>
                                    <p><span>식당번호 </span>{foods.rstrnt_tel_no}</p>
                                    <p><span>등록일자 </span>{foods.regist_de}</p>
                                    <p><span>키워드 </span>{foods.core_kwrd_cn}</p>
                                    <p><span>갱신일자 </span>{foods.opn_de}</p>
                                    <p><span>관련사이트 </span>{foods.cntnts_url}</p>
                                    <p><span>시도 </span>{foods.ctprvn_nm}</p>
                                    <p><span>시구군 </span>{foods.signgu_nm}</p>


                                </div>
                            )
                        })}
                    </article>
                </section>
            </section>
        </>
    )



}


export default LocalFood