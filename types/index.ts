export interface ProductTypes {
  id: number | string;
  title: string;
  price: number;
  category: string;
  image: string;
}

export interface CartItem {
  item: ProductTypes;
  quantity: number;
}
