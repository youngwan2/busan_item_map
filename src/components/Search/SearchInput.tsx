import { forwardRef } from "react";
import styles from './Search.module.scss'

interface PropsType {
    inputOptions: {
        defaultValue?:string
        placeholder: string
        id: string
        type: string
        name: string

    }
}
const HaccpInput = forwardRef<HTMLInputElement, PropsType>(({ inputOptions }, ref) => {
    const {id, name, placeholder, type, defaultValue} = inputOptions

    return (
        <input
            ref={ref}
            className={styles.search_input}
            type={type}
            defaultValue={defaultValue}
            id={id}
            name={name}
            placeholder={'ex. 김치'}
        />
    )
})

export default HaccpInput