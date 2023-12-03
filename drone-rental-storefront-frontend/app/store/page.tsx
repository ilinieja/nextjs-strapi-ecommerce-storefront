import Banner from "@/components/Banner/Banner";
import Products from "@/components/Products/Products";

export default function Store() {
  return (
    <main className="w-full max-w-7xl">
      <article className="flex flex-col overflow-x-hidden">
        <Banner className="pt-10 lg:pt-16" />
        <Products className="pt-24" />
      </article>
    </main>
  );
}
