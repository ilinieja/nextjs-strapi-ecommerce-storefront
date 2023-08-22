import { Product } from "@/lib/types";

export default function Product({product}: {product: Product}) {
    return <div>{product?.attributes?.name?.toString()}</div>
}
