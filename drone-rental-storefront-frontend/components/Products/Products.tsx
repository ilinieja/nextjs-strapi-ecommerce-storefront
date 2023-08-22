import clsx from "clsx";

import { getProducts } from "@/lib/api";

import Product from "../Product/Product";

export default async function Products({className}: {className?: string}) {
    const products = await getProducts();

    return <section className={clsx(className, "grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 px-8 md:px-0")}>
        {products.map(product => <Product product={product}/>)}
    </section>
}
