export class Product {
  id: number;
  title: string;
  category: string;
  price: number;
  discountPercentage: number;

  constructor(
    id: number,
    title: string,
    category: string,
    price: number,
    discountPercentage: number,
  ) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.price = price;
    this.discountPercentage = discountPercentage;
  }
}
