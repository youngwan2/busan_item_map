import styles from './BmiInfo.module.scss'

interface PropsType {
    selectTap : string
}
function BmiInfo({selectTap}:PropsType) {
    return (
        <section className={styles.bmi_info_section}>
            {selectTap||"준비중입니다.."}
        </section>
    );
}

export default BmiInfo;