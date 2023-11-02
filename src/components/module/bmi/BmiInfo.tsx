import styles from './BmiInfo.module.scss'
import MarkDown from './MarkDown';


interface PropsType {
    selectTap : string
}
function BmiInfo({selectTap}:PropsType) {

    return (
        <section className={styles.bmi_info_section}>
            <MarkDown choice={selectTap}/>
        </section>
    );
}

export default BmiInfo;