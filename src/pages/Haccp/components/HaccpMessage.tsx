import styles from '../Haccp.module.scss'
export default function HaccpMessage() {


    return (
        <div className={styles.message}>
            {' '}
            <h2>잠깐 알고가기</h2> <br />
            <p className={styles.message_content}>
                해썹(HACCP) 제도는 식품, 축산물, 사료 등을 만드는 과정에서 생물학적, 화학적, 물리적
                위해요인들이 발생할 수 있는 상황을 과학적으로 분석하고 사전에 위해요인의 발생여건들을
                차단하여 소비자에게 안전하고 깨끗한 제품을 공급하기 위한 시스템적인 규정을 말합니다.</p>
        </div>
    )
}