import styles from '../Haccp.module.scss'

import { HaccpProductItemType } from "../../../types/Haccp.types"

interface PropsType {
  product:HaccpProductItemType
 }

export default function HaccpProductCard({product}:PropsType) {
  return (
    <figure
      className={styles.haccp_card_container}
      key={product.item.prdlstReportNo}
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
  )
}