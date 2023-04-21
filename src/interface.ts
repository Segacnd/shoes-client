export interface SingleSneakers {
  brand_name: string;
  category: string[];
  color: string;
  gender: string[];
  id: number;
  pucture: string;
  name: string;
  retail_price_cents: number;
  size_range: number[];
  story: null | string;
}
export interface AllProduct {
  products: SingleSneakers[];

}
export interface DataObj {
  result: SingleSneakers[];
  brands: string[];
  sizes: number[];
  totalCount: Number;
  isFetching: boolean;
  error: Error | null;
}

export interface singleProduct {
  singleProduct: SingleSneakers | null;
  isFetching: boolean;
  error: Error | null;
}

export interface Card {
  card: SingleSneakers[];
  isFetching: boolean;
  error: Error | null;
  totalPrice: number;
  totalCount: number;
}
export interface Wish {
  wishList: number[];
  isFetching: boolean;
  error: Error | null;

}
export interface Limit {
  limitItems: SingleSneakers[];
  isFetching: boolean;
  error: Error | null;
}
export interface QueryParams {
  limit: number;
  page: number;
  sortBy: string;
  brand: string[];
  name: string;
  priceRange: number[];
}
