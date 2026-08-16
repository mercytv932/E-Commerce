import { fetchProduct } from "./services/apiService";
import { Product } from "./models/product";

async function mainFunction() {
  interface ProductData {
    id: number;
    title: string;
    category: string;
    price: number;
    discountPercentage: number;
  }

  const productsData = await fetchProduct();

  const displayProducts = productsData.map((item: ProductData) => {
    return new Product(
      item.id,
      item.title,
      item.category,
      item.price,
      item.discountPercentage,
    );
  });
  console.log(displayProducts);
}
mainFunction();
