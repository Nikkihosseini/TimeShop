// src/types.ts

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  image: string;
  prePrice?: number;
  isLiked: boolean;
}
