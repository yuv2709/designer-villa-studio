import { getProducts } from "@/lib/getProducts";
import ProductListSec from "@/components/common/ProductListSec";
import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct";
import Header from "@/components/product-page/Header";
// import Tabs from "@/components/product-page/Tabs";
import { notFound } from "next/navigation";
import { Product } from "@/types/product.types";

export default async function ProductPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const products = await getProducts();

  // Get product by ID from URL
  const product = products.find((p) => p.id === params.slug[0]);

  if (!product) {
    notFound(); // If not found, trigger 404
  }

  // Filter out current product for "related" section
  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4); // You can apply more intelligent filtering later

  return (
    <main>
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        <BreadcrumbProduct title={product.title} />
        <section className="mb-11">
          <Header data={product} />
        </section>
        {/* <Tabs /> */}
      </div>

      <div className="mb-[50px] sm:mb-20">
        <ProductListSec title="You might also like" data={relatedProducts} />
      </div>
    </main>
  );
}
