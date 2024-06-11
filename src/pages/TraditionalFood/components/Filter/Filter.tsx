import styles from '@pages/TraditionalFood/TraditionalFoodFliter.module.scss'

import Container from "@/components/Common/Container";
import { ReactNode } from 'react';

interface PropsType {
    title:string
    children:ReactNode

}


export default function Filter({title,children }:PropsType) {
    return (
        <Container container={'div'} className={styles.filter_content_wrapper}>
                <h3>{title}</h3>
                <div className={styles.filter_contents}>
                    {children}
                </div>
        </Container>
    )
}