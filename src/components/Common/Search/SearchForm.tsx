import styles from './Search.module.scss'

import { FormEventHandler } from 'react'
import SearchButton from "./SearchButton";
// import ReactSpinner from "../../UI/ReactSpinner";
import SearchInput from "./SearchInput";

interface PropsType {
    onSearch: () => void;
    action: FormEventHandler<HTMLFormElement>
    inputOptions: {
        defaultValue?:string
        placeholder: string
        id: string
        type: string
        name: string

    }
    buttonOptions: {
        text: string
        type: "submit" | "reset" | "button"
    }
}


export default function SearchForm({ action, onSearch, inputOptions, buttonOptions }: PropsType) {
    return (
        <form className={styles.search_container} onSubmit={action}>
            <SearchInput
                inputOptions={inputOptions}
            />
            {/* 조회 버튼 */}
            <SearchButton onSearch={onSearch} buttonOptions={buttonOptions} />
        </form>
    )
}