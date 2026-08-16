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

  const products = productsData.map((item: ProductData) => {
    return new Product(
      item.id,
      item.title,
      item.category,
      item.price,
      item.discountPercentage,
    );
  });
  displayProducts(products);
}
mainFunction();

export function displayProducts(products: Product[]) {
  products.forEach((product) => {
    const details = product.displayDetails();
    console.log(details);
  });
}
