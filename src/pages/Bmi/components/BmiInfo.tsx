import styles from './BmiInfo.module.scss'
import BmiMarkDown from './BmiMarkDown';

interface PropsType {
    selectTap : string
}
const BmiInfo = ({selectTap}:PropsType) => {
    return (
        <section className={styles.bmi_info_section}>
            <BmiMarkDown choice={selectTap}/>
        </section>
    );
}

export default BmiInfo;