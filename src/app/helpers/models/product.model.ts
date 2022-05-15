export interface Product {
  id:string;
  name:string;
  price: number;
  stock: number;
  image: string;
  orders: Orders;
}
export interface Orders
{
  count: number;
  price: number;

}
export interface Cart {
  totalOrders:number;
  records:Product[];
  items:Product[];
}
