import styles from './LocalFood.module.css'
import { localFoods } from './localfood(202212)'
import Header from '../UI/Header'
import { useEffect, useState, useRef } from 'react'
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

    const categoryRef = useRef<HTMLOListElement>(null)
    const topBtn = useRef<HTMLLIElement>(null)
    const bottomBtn = useRef<HTMLLIElement>(null)
    const [title, setTitle] = useState<string[]>()
    const [searchResult, setSearchResult] = useState<localFoodType[]>()
    const [display, setDisplay] = useState(false)

    // 전체 목록에서 중복을 제외한 카테고리 목록을 필터링하는 함수
    const categoryFilter = () => {

        const filterList: any[] = []
        localFoods?.forEach((data) => {
            filterList.push(data.data_title_nm)
        })
        const filterTitle = [...new Set(filterList)]

        setTitle(filterTitle)
    }

    /*     // 에러 이미지 대체 하는 함수
        const errImageReplace = (e: SyntheticEvent<HTMLImageElement>) => {
            // e.currentTarget.src = '/error.png'
        } */

    // 카테고리 중 목록 선택시 데이터 조회하는 함수
    const searchFilter = (e: MouseEvent<HTMLLIElement>) => {
        const choiceTitle = e.currentTarget.textContent!

        // 제목 리스트에서 유저가 선택한 항목이 포함되어 있는 경우만 필터링
        const choiceFood = localFoods.filter((food) => {
            return (food.data_title_nm.includes(choiceTitle))
        })
        setSearchResult(choiceFood)
    }

    // 카테고리 상단 이동
    const categoryTopShifter = () => {
        topBtn.current?.addEventListener('click', () => {
            categoryRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
        })
    }

    // 카테고리 하단 이동
    const catgoryBottomShiter = () => {
        bottomBtn.current?.addEventListener('click', () => {
            categoryRef.current?.scrollTo({ top: 100000, behavior: 'smooth' })
        })
    }

    useEffect(() => {
        categoryFilter()
    }, [])

    return (
        <>
            <Header isStyle={true} />


            {/* 주제별 카테고리 */}
            <article className={styles.category_con} style={display ? { display: 'block' } : { display: 'none' }} >
                <input className={styles.category_search_input} type="text" placeholder='fsdfds' />
                <ol className={styles.category} ref={categoryRef} >
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
                <ul className={styles.category_shift_btn_con}>
                    <li onClick={categoryTopShifter} ref={topBtn}>▲</li>
                    <li>■</li>
                    <li onClick={catgoryBottomShiter} ref={bottomBtn}>▼</li>
                </ul>
            </article>
            <section className={styles.LocalFood}>
                <button
                    onClick={() => {
                        setDisplay(true)
                    }}
                    className={styles.slide_btn_outer} style={!display ? { display: 'block' } : { display: 'none' }}>카테고리</button>

                {/* 주제별 세부 내용 */}
                <section className={styles.contents}>
                    <h3>향토음식조회</h3>
                    <p>※ 현재 기능은 검색 기능없이 카테고리 내 주제별 선택을 통해 검색이 가능합니다.</p>

                    {/* 대표 이미지 */}
                    <img width={380} height={380} src={searchResult !== undefined && searchResult[0].main_thumb_url !== '' ? `${searchResult[0].main_thumb_url}` : process.env.PUBLIC_URL + '/not-image.png'} alt='thumb'></img>
                    <h3 className={styles.sub_title}>{searchResult !== undefined ? searchResult[0].sbjt_nm : null}</h3>
                    <p className={styles.foods_sumry}> {searchResult !== undefined ? searchResult[0].sumry_cn.replace(/&nbsp;/gi, ' ') : null}</p>
                    <p className={styles.foods_detail_url}>{searchResult !== undefined ? searchResult[0].cntnts_url : null}</p>
                    <article className={styles.foods_flex_con}>
                        {searchResult?.map((foods) => {
                            return (
                                <div className={styles.foods}>
                                    <p><span>식별 </span>{foods.data_manage_no}</p>
                                    <p><span>주소 </span>{foods.addr}</p>
                                    <p><span>관련 식당명 </span>{foods.relate_rstrnt_nm}</p>
                                    <p><span>식당번호 </span>{foods.rstrnt_tel_no}</p>
                                    <p><span>등록일자 </span>{foods.regist_de}</p>
                                    <p><span>키워드 </span>{foods.core_kwrd_cn}</p>
                                    <p><span>갱신일자 </span>{foods.opn_de}</p>
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