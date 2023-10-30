import Image from "next/image";
import clsx from "clsx";

import { Product } from "@/lib/types";
import { addFileStoragePrefix } from "@/lib/api";

import ProductOrderControls from "./ProductOrderControls";

export default function Product({
  product,
  className,
}: {
  product: Product;
  className: string;
}) {
  return (
    <div
      className={clsx(
        className,
        "flex flex-col items-center p-4 lg:p-8 border rounded border-dark/30 dark:border-light/30"
      )}
    >
      <Image
        src={addFileStoragePrefix(product?.attributes?.mainImage?.data?.attributes?.url?.toString())}
        width={+product?.attributes?.mainImage?.data?.attributes?.width}
        height={+product?.attributes?.mainImage?.data?.attributes?.height}
        alt={product?.attributes?.name?.toString()}
      />
      <h2 className="text-2xl mb-4">{product?.attributes?.name?.toString()}</h2>
      <p className="whitespace-pre-line text-center mb-8">
        {product?.attributes?.description?.toString()}
      </p>

      <div className="flex flex-col w-full mt-auto">
        <ProductOrderControls product={product} />
      </div>
    </div>
  );
}
