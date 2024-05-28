import styles from '../RecipeCategoryGrid.module.scss'

import { recipeCategories as categories } from '@/data';

import { HiXCircle } from 'react-icons/hi2';

interface PropsType {
    categoryName: string;
    onSearch: (name: string) => void
}

export default function RecipeCategoryGrid({ categoryName, onSearch }: PropsType) {


    return (
        <section className={styles.recipe_category_container}>
            <h3 className={styles.recipe_category_title}>분류</h3>
            <div className={`${styles.recipe_category_grid}`}>
                {categories.map((category) => (
                    <button
                        key={category.id}
                        title={category.name}
                        onClick={() => onSearch(category.name)}
                        className={`
                        ${styles.recipe_category_grid_cell} 
                        ${category.name.length > 1 && category.name === categoryName ? styles.active : ''}`}>

                        <div className={styles.img_boundary}>
                            <div aria-label='추천품목 이미지' className={`${category.name !== '' ? styles.recipe_category_grid_cell_img : ''}`}>
                                {category.name === '' && <HiXCircle color='#6697D6' />}
                            </div>
                        </div>

                        <p aria-label='추천품목 이름'>{category.name}</p>
                    </button>
                ))}
            </div>
        </section>
    )
}