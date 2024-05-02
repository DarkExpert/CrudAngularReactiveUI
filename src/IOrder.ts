export interface IOrder {
  id: number;
  shopId: number;
  shopName: string;
  number: string;
  date: Date;
  title: string;
  description?: string;
  deliveryDate?: Date;
  owner: string;
  productId: number;
  productName: string;
  count: number;
  price: number;
  discount: number;
}
