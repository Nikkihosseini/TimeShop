import type { CSSProperties } from 'react';

export interface ButtonProps {
  text: string;
  style?: CSSProperties;
}

export interface ProductType  {
  id: string;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  image: string;
  prePrice?: number;
  isLiked: boolean;
}
