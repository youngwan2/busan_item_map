import { HaccpProductItemType, HaccpProductPropertyType } from '../../../types/Haccp.types'
import styles from '../Haccp.module.scss'

interface PropsType {
    product:  HaccpProductPropertyType

    
}
export default function HaccpContents({product}:PropsType) {

    return (
        <section>
            <div className={styles.modal_content_con} key={product.prdlstReportNo}>
                <figure className={styles.modal_figure}>
                    <img src={`${product.imgurl1}`} alt="상품이미지" />
                </figure>
                <div>
                    <p>
                        <strong>상품명</strong>
                        <br />
                        <span>{product.prdlstNm ?? '알수없음'}</span>
                    </p>
                    <p>
                        <strong>제조사</strong>
                        <br />
                        <span>{product.manufacture ?? '알수없음'}</span>
                    </p>
                    <p>
                        <strong>성분</strong>
                        <br />
                        <span>{product.rawmtrl ?? '알수없음'}</span>
                    </p>
                    <p>
                        <strong>알러지</strong>
                        <br />
                        <span>{product.allergy ?? '알수없음'}</span>
                    </p>
                    <p>
                        <strong>바코드</strong>
                        <br />
                        <span>{product.barcode ?? '알수없음'}</span>
                    </p>
                </div>
            </div>
        </section>
    )
}