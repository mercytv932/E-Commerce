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
    return `This is ${this.title} ${this.category} for ${this.price} ${this.discountPercentage}`;
  }

  getPriceWithDiscount() {
    const discountAmount = this.price * (this.discountPercentage / 100); //20/100 = 0.2/20% * 200
    return Number((this.price - discountAmount).toFixed(2)); // this.price/original/180 - discount/40 = 120
  }
}
