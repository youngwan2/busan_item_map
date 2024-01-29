import { useRef } from 'react'
import styles from '../Nutrition.module.scss'
import { useRecoilState } from 'recoil'
import { NutritionPageNumber } from '../../../atom/NutritionsAtom'
import { FiSearch } from 'react-icons/fi'

interface PropsType {
    setValue: (p: string) => void
}
const SearchForm = ({ setValue }: PropsType) => {

    const inputRef = useRef<HTMLInputElement>(null)
    const [_, setPage] = useRecoilState(NutritionPageNumber)

    return (
        <form
            className={styles.nutrtion_search_form}
            onSubmit={(e) => {
                e.preventDefault()
            }}>
            <label className={styles.nutrition_search_label} htmlFor="search"><FiSearch/></label>
            <input ref={inputRef} id="search" type="search" onKeyDown={(e) => {
                const value = e.currentTarget.value

                if (e.code === "Enter") {
                    setValue(value)
                    setPage(1)
                }

            }} />
            <button onClick={() => {
                if (inputRef.current) {
                    const value = inputRef.current.value
                    setValue(value)
                    setPage(1)
                }
            }}>조회</button>
        </form>
    )
}

export default SearchForm