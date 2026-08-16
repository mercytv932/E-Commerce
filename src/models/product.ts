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

  displayDetails() {
    return `|${this.title}| ${this.category}| price:$${this.price} 
    |${this.discountPercentage} % discount| $${this.getPriceWithDiscount()} after discount `;
  }

  getPriceWithDiscount() {
    const discountAmount = this.price * (this.discountPercentage / 100); //20/100 = 0.2/20% * 200
    return Number((this.price - discountAmount).toFixed(2)); // this.price/original/180 - discount/40 = 120
  }
}
