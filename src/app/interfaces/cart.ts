import { Product } from './product';

export interface Cart {
  [key: string]: { item: Product; amount: number };
}
