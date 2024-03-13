import ReactSpinner from '../../../components/UI/ReactSpinner'
import styles from './RecipeNutrition.module.scss'

interface ProsType {
    loading: boolean
}
export default function RecipeSpinner({ loading }: ProsType) {

    return (
        <div
            className={styles.loading_spinner}
            style={loading ? { display: 'inline-block' } : { display: 'none' }}
        >
            {loading && <ReactSpinner />}
        </div>
    )
}