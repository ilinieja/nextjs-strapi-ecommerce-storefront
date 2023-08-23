import clsx from "clsx";

import { getProducts } from "@/lib/api";

import Product from "../Product/Product";

export default async function Products({className}: {className?: string}) {
    const products = await getProducts();

    return <section className={clsx(className, "grid gap-6 grid-cols-4 md:grid-cols-8 lg:grid-cols-12 p-8 md:px-12")}>
        {products.map(product => <Product className="col-span-4" product={product}/>)}
    </section>
}
