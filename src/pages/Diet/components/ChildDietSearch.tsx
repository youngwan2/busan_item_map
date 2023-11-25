import styles from '../ChildDiet.module.scss'
import { useRef } from 'react'

interface PropsType {
    setChoiceKeyword:(p:string)=>void
}
const ChildDietSearch = ({setChoiceKeyword}:PropsType) => {
    const timeRef = useRef<number>(0)

    return (
        <form className={styles.diet_form} method="get" action="/" onSubmit={(e)=>{
            e.preventDefault()
        }}>
            <label htmlFor="diet_search">검색</label>
            <input placeholder='ex) 감자' id="diet_search" type="search" onInput={(e)=>{
                const value = e.currentTarget.value
             
                if(timeRef.current) {clearTimeout(timeRef.current)}
                timeRef.current = setTimeout(()=>{
                    setChoiceKeyword(value)
                },200)
            }} />
        </form>
    )
}


export default ChildDietSearch