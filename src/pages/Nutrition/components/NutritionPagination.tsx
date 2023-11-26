import { useState, useRef, useEffect, Fragment, useCallback } from "react"
import styles from './NutritionPagination.module.scss'
import { NutritionPageNumber } from "../../../atom/NutritionsAtom"
import { useRecoilState } from "recoil"

interface PropsType {
    totalPage: number
}
const NutritionPagination = ({ totalPage }: PropsType) => {
    // eslint-disable-next-line prefer-const
    let [page, setPage] = useRecoilState(NutritionPageNumber)
    const pageSize = useRef<number>(5)
    const [liElements, setLiElements] = useState<JSX.Element[]>()
    const [pageGroup, setPageGroup] = useState(0)
    const [lastPage, setLastPage] = useState(0)
    const [firstPage, setFirstPage] = useState(0)

    const isLastPageGreaterThanTotal = lastPage>=totalPage
    const isFirstPageGreaterThanCurrentPage = firstPage>page
    const elementRendererFun = useCallback((page: number, pageGroup: number) => {
        setPageGroup(Math.ceil(page / pageSize.current))
        setLastPage(pageGroup * pageSize.current)
        const lis: JSX.Element[] = []
        
        if (isLastPageGreaterThanTotal) { setLastPage(totalPage)
        }
        if(isLastPageGreaterThanTotal && isFirstPageGreaterThanCurrentPage ){
            setLastPage(pageGroup * pageSize.current)
        }
        for (let i = firstPage; i <= lastPage; i++) {
            if(i>0) {
            lis.push(
                <li
                    onClick={(e) => {
                        const pageNumber = Number(e.currentTarget.textContent)
                        setPage(pageNumber)
                        setPageGroup(page / pageSize.current)

                    }}
                    style={page === i ? { boxShadow: 'inset 50px 50px 0 white', color: 'black', border: '1px solid gray' } : { boxShadow: 'inset 50px 50px 0 0 rgb(131, 131, 240)' }}>
                    {i}
                </li>)
                }
        }

        setLiElements(lis)

    }, [setPage, firstPage, lastPage, totalPage,isFirstPageGreaterThanCurrentPage,isLastPageGreaterThanTotal])

    // 마지막 페이지가 짝수일 때 보여지는 페이지 버튼 수를 조정하는 이펙트
    useEffect(()=>{
        if(lastPage %2 ===0 ) {
            setFirstPage(lastPage - pageSize.current+1)
        } else {
            setFirstPage(lastPage - pageSize.current + 1)
        }
    },[firstPage,lastPage,totalPage])

   // 페이지네이션 초깃값을 셋팅하고, 변동 사항을 추적하여 반영하는 이펙트
    useEffect(() => {
        elementRendererFun(page, pageGroup)
    }, [page, pageGroup, elementRendererFun])

    return (
        <ul className={styles.pagination_container} style={totalPage === 0 ? { display: 'none' } : { display: 'flex' }}>
            <li
                style={page <= 1 ? { visibility: 'hidden', opacity: 0 } : { visibility: 'visible', opacity: 1 }}
                onClick={() => {
                    setPage(Math.max(--page, 0))
                }}>prev</li>
            {liElements?.map((li) => {
                const id = li.props.children
                return <Fragment key={id}>{li}</Fragment>
            })}
            <li
                style={totalPage === page ? { visibility: 'hidden', opacity: 0 } : { visibility: 'visible', opacity: 1 }}
                onClick={() => {
                    setPage(Math.min(++page, totalPage))
                }}>next</li>
        </ul>
    )
}


export default NutritionPagination
