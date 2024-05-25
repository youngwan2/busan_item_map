import HaccpProductCard from './HaccpProductCard';

import { HaccpProductItemType } from '../../../types/Haccp.types';

interface PropsType {
    products: HaccpProductItemType[]
}
export default function HaccpProductList({ products }: PropsType) {


    return (
        <>
            {
                products.map((product) => <HaccpProductCard product={product}/>)
            }
        </>
    )
}