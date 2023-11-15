import CartCheckoutButton from "@/components/CartCheckoutButton/CartCheckoutButton";
import CartProducts from "@/components/CartProducts/CartProducts";
import CartTotal from "@/components/CartTotal/CartTotal";

export default function Cart() {
  return (
    <article className="flex flex-col">
      <div className="pt-8 md:px-12 flex justify-between items-center">
        <CartTotal />
        <CartCheckoutButton />
      </div>
      <CartProducts />
    </article>
  );
}
