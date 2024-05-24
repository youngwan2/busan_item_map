import { HaccpProductItemType } from '../../../types/Haccp.types';
import styles from '../Haccp.module.scss'

interface PropsType {
    products: HaccpProductItemType[]
    onPickProduct: (id: string) => void
    onToggleOpenModal: () => void
}
export default function HaccpProductList({ products, onPickProduct, onToggleOpenModal }: PropsType) {

    function handleClick(id: string) {
        onPickProduct(id)
        onToggleOpenModal()
    }

    return (
        <>
            {
                products.map((product) => {
                    return (
                        // 조회된 각 아이템
                        <figure
                            className={styles.haccp_card_container}
                            key={product.item.prdlstReportNo}
                            onClick={() => handleClick(product.item.prdlstReportNo)}
                        >
                            <div id="item_box">
                                <img className={styles.haccp_card_img} src={`${product.item.imgurl1}`} alt="상품이미지"></img>
                                <p className={styles.haccp_card_content}>
                                    <h3 className={styles.product_name}> {product.item.prdlstNm || '알수없음'}</h3>
                                    <div className={styles.product_sort}><span>분류</span> {product.item.prdkind || '알수없음'}</div>
                                    <div><span>열량</span> {product.item.capacity || '알수없음'}</div>
                                    <div><span>성분</span> {product.item.rawmtrl || '알수없음'}</div>
                                    <div><span>알러지</span> {product.item.allergy || '알수없음'}</div>
                                    <div><span>제조사</span> {product.item.manufacture || '알수없음'}</div>
                                    <div><span>판매자</span> {product.item.seller || '알수없음'}</div>
                                </p>
                            </div>
                        </figure>
                    );
                })
            }
        </>
    )
}