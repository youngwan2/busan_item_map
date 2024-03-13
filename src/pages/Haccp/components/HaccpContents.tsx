import styles from '../Haccp.module.scss'
import { FilterItemType} from '../types/Haccp.types'

interface PropsType {
    filterItem:  FilterItemType

    
}
export default function HaccpContents({filterItem}:PropsType) {

    return (
        <section>
            <div className={styles.modal_content_con} key={filterItem.prdlstReportNo}>
                <figure className={styles.modal_figure}>
                    <img src={`${filterItem.imgurl1}`} alt="상품이미지" />
                </figure>
                <div>
                    <p>
                        <strong>상품명</strong>
                        <br />
                        <span>{filterItem.prdlstNm ?? '알수없음'}</span>
                    </p>
                    <p>
                        <strong>제조사</strong>
                        <br />
                        <span>{filterItem.manufacture ?? '알수없음'}</span>
                    </p>
                    <p>
                        <strong>성분</strong>
                        <br />
                        <span>{filterItem.rawmtrl ?? '알수없음'}</span>
                    </p>
                    <p>
                        <strong>알러지</strong>
                        <br />
                        <span>{filterItem.allergy ?? '알수없음'}</span>
                    </p>
                    <p>
                        <strong>바코드</strong>
                        <br />
                        <span>{filterItem.barcode ?? '알수없음'}</span>
                    </p>
                </div>
            </div>
        </section>
    )
}