import styles from '../TraditionalFoodFliter.module.scss'

import { ChangeEvent } from 'react'

import Filter from './Filter/Filter'

import { onSubmit } from '@/utils/helpers'
import { tarditionalFoodCategories } from '@/data'


interface PropsType {
    onChange: (e: ChangeEvent<HTMLInputElement>, key: "main" | "sub" | "detail" | "foodType") => void
    categories: {
        main: string,
        sub: string,
        detail: string,
        foodType: string
    }
}

export default function TraditionalFoodFilter({ onChange, categories }: PropsType) {
    return (
        <form
            className={`${styles.traditional_food_filter_container}`} onSubmit={onSubmit}>
            <h2 className={styles.traditional_food_filter_title}>필터</h2>
            <Filter title='대분류'>
                {tarditionalFoodCategories.main.map((main) => {
                    return (
                        <div className={styles.input_container} key={main}>
                            <input onChange={(e) => onChange(e, "main")} name="main" id={'main-'+main} type="radio" defaultValue={categories.main} checked={categories.main === main} data-value={main}/>
                            <label htmlFor={'main-'+main}>{main}</label>
                        </div>
                    )
                })}

            </Filter>
            <Filter title='중분류'>
                {tarditionalFoodCategories.sub.map((sub) => {
                    return (
                        <div className={styles.input_container} key={sub}>
                            <input onChange={(e) => onChange(e, "sub")} name='sub' id={'sub-'+sub} type="radio" defaultValue={categories.sub} checked={categories.sub === sub} data-value={sub}/>
                            <label htmlFor={'sub-'+sub}>{sub}</label>
                        </div>

                    )
                })}
            </Filter>
            <Filter title='소분류'>
                {tarditionalFoodCategories.detail.map((detail) => {
                    return (
                        <div className={styles.input_container}>
                            <input onChange={(e) => onChange(e, "detail")} name='detail' id={'detail-'+detail} type="radio" key={detail} defaultValue={categories.detail} checked={categories.detail === detail} data-value={detail}/>
                            <label htmlFor={'detail-'+detail}>{detail}</label>
                        </div>
                    )
                })}
            </Filter>
            <Filter title='타입'>
                {tarditionalFoodCategories.foodType.map((foodType) => {
                    return (
                        <div className={styles.input_container}>
                            <input onChange={(e) => onChange(e, "foodType")} name='foodtype' id={'foodtype-'+foodType} type="radio" key={foodType} defaultValue={categories.foodType} checked={categories.foodType === foodType} data-value={foodType}/>
                            <label htmlFor={'foodtype-'+foodType}>{foodType}</label>
                        </div>
                    )
                })}
            </Filter>
        </form>
    )
}