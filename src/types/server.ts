export interface Products {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface ProductsRating {
  rate: number;
  count: number;
}
