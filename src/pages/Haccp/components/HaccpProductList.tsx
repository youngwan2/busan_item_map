import { HaccpProductItemType } from '../../../types/Haccp.types';
import '../Haccp.module.scss'

interface PropsType {
    products: HaccpProductItemType[]
    onPickProduct:(id:string)=>void
    onToggleOpenModal: ()=>void
}
export default function HaccpProductList({ products, onPickProduct, onToggleOpenModal }: PropsType) {

    function handleClick(id:string){
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
                            key={product.item.prdlstReportNo}
                            onClick={()=>handleClick(product.item.prdlstReportNo)}
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