import {  forwardRef } from "react";
import styles from '../Haccp.module.scss'

const HaccpInput = forwardRef<HTMLInputElement>((_,ref) => {
    

    return (
        <input
            ref={ref}
            className={styles.search_input}
            type="search"
            value={undefined}
            id={styles.search}
            name="search-input"
            placeholder="ex) 치킨"
        />
    )


})

export default HaccpInput