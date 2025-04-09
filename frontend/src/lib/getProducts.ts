import { Product } from "@/types/product.types";

export async function getProducts(): Promise<Product[]> {
  try {
    let allProducts: Product[] = [];
    let page = 1;
    const limit = 1;
    let hasMore = true;

    while (hasMore) {
      const res = await fetch(`http://localhost:3001/api/products?page=${page}&limit=${limit}`, {
        cache: "no-store",
      });

      if (!res.ok) {
        console.error(`❌ Failed to fetch page ${page}:`, res.statusText);
        break;
      }

      const json = await res.json();

      if (!json.docs || !Array.isArray(json.docs)) {
        console.error("❌ Invalid product data structure on page", page);
        break;
      }

      const products: Product[] = json.docs.map((p: any) => {
        // ✅ Use Cloudinary URL from text field or fallback
        const imageUrl = p.cloudImageUrl || "/images/default.webp";

        return {
          id: p.id,
          title: p.title,
          srcUrl: imageUrl,
          gallery:
            p.gallery?.map((g: any) =>
              g?.url ? g.url : "/images/default.webp"
            ) ?? [],
          price: p.price,
          discount: {
            amount: p.discount?.amount || 0,
            percentage: p.discount?.percentage || 0,
          },
          rating: p.rating || 0,
        };
      });

      allProducts.push(...products);

      // Exit loop if no more pages
      hasMore = json.hasNextPage ?? json.docs.length === limit;
      page++;
    }

    console.log("✅ All mapped products:", allProducts);
    return allProducts;
  } catch (error) {
    console.error("❌ Error fetching products:", error);
    return [];
  }
}
