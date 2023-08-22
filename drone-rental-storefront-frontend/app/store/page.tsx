import Banner from "@/components/Banner/Banner";
import Products from "@/components/Products/Products";

export default function Store() {
  return (
    <article className="flex flex-col">
      <Banner className="pt-12 lg:pt-24" />
      <Products className="pt-24" />
    </article>
  );
}
