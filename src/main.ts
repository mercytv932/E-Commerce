import { fetchProduct } from "./services/apiService";
import { Product } from "./models/product";
import { calculateDiscount } from "./utils/disocuntCalculator";
import { taxCalculator } from "./utils/taxCalculator";
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

    const tax = taxCalculator(product.price, product.category);
    const discount = calculateDiscount(
      product.price,
      product.discountPercentage,
    );
    console.log(
      `${details} | tax $${tax.toFixed(2)} | discount: $${discount.toFixed(2)}`,
    );
  });
}
