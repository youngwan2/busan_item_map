import { useState, useRef, useEffect, Fragment, useCallback } from "react"
import styles from './NutritionPagination.module.scss'
import { NutritionPageNumber } from "../../../atom/NutritionsAtom"
import { useRecoilState } from "recoil"

interface PropsType {
    totalPage:number
}
const NutritionPagination = ({totalPage}:PropsType) => {
    // eslint-disable-next-line prefer-const
    let [page,setPage] = useRecoilState(NutritionPageNumber)
    const pageBtnCount = useRef<number>(5)
    const [liElements, setLiElements] = useState<JSX.Element[]>()
    const [pageGroup, setPageGroup] = useState(1)
    const [lastPage, setLastPage] = useState(pageGroup * pageBtnCount.current)
    const [firstPage, setFirstPage] = useState(lastPage - pageBtnCount.current + 1)

    const elementRendererFun = useCallback((page: number, pageGroup: number) => {
        setPageGroup(Math.ceil(page/ pageBtnCount.current))
        setLastPage(pageGroup*pageBtnCount.current)
        setFirstPage(lastPage - pageBtnCount.current + 1)

        const lis: JSX.Element[] = []
        if(lastPage>=totalPage) {setLastPage(totalPage)}
        for (let i = firstPage ; i <= lastPage; i++) {
            lis.push(
                <li
                    onClick={(e) => {
                        const pageNumber = Number(e.currentTarget.textContent)
                        setPage(pageNumber)
                        setPageGroup(page / pageBtnCount.current)

                    }}
                    style={page === i ? { boxShadow: 'inset 50px 50px 0 white', color: 'black', border: '1px solid gray' } : { boxShadow: 'inset 50px 50px 0 0 rgb(131, 131, 240)' }}>
                    {i}
                </li>)
        }
        setLiElements(lis)

    }, [setPage,firstPage,lastPage,totalPage])


    useEffect(() => {
        elementRendererFun(page, pageGroup)
    }, [page, pageGroup, elementRendererFun])

    return (
        <ul className={styles.pagination_container} style={totalPage===0?{display:'none'}:{display:'flex'}}>
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
            style={lastPage===totalPage?{visibility:'hidden',opacity:0}:{visibility:'visible',opacity:1}}
            onClick={() => {
                setPage(++page)
            }}>next</li>
        </ul>
    )
}


export default NutritionPagination


// 현재페이지
// const currentPage = page
// 페이지네이션 버튼의 수
// const pageButtonCount = 5
// 현재페이지 그룹
// const group = Math.ceil(1/pageButtonCount)
// 마지막 페이지
// const lastPage =pageGroup*pageButtonCount

// 첫 번째 페이지
// const firstPage = lastPage -(pageButtonCount+1)

