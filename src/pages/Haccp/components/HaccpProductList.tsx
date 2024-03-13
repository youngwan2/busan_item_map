import '../Haccp.module.scss'
import { ItemsType } from "../types/Haccp.types";

interface PropsType {
    products: ItemsType[]
    onClickOpenModal: (id: string) => void
}
export default function HaccpProductList({ products, onClickOpenModal }: PropsType) {

    return (
        <>
            {
                products.map((product) => {
                    return (
                        // 조회된 각 아이템
                        <figure
                            key={product.item.prdlstReportNo}
                            onClick={() => {
                                const id = product.item.prdlstReportNo
                                onClickOpenModal(id)
                            }}
                        >
                            <div id="item_box" role="listitem">
                                <img src={`${product.item.imgurl1}`} alt="상품이미지"></img>
                                <p>{product.item.prdlstNm}</p>
                            </div>
                        </figure>
                    );
                })
            }
        </>
    )
}