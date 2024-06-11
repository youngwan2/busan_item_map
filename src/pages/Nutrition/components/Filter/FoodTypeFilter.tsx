import styles from '@pages/Nutrition/NutritionProductFliter.module.scss'

import { ChangeEventHandler } from 'react'

import Container from "@/components/Common/Container";

interface PropsType {
    onChangeFoodTypeValue:ChangeEventHandler<HTMLInputElement>

}


export default function FoodTypeFilter({onChangeFoodTypeValue}:PropsType) {
    return (
        <Container container={'div'} className={styles.filter_content_wrapper}>
                <h3>가공/일반</h3>
                <div className={styles.filter_contents}>
                    <div className={styles.input_container}>
                        <input onChange={onChangeFoodTypeValue} name='sort' id="sort1" type="checkbox" value={'가공식품'} />
                        <label htmlFor="sort1">가공식품</label>
                    </div>
                    <div className={styles.input_container}>
                        <input onChange={onChangeFoodTypeValue} name='sort' id='sort2' type="checkbox" value={'음식'} />
                        <label htmlFor="sort2">일반음식</label>
                    </div>
                </div>
        </Container>
    )
}