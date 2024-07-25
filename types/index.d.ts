export interface NavLink {
  label: string;
  href: string;
  icon?: string;
}

export interface Product {
  image: string;
  _id: string;
  name: string;
  price: number;
  rating: number;
  stock: number;
  imageUrls: string[];
  category: string;
  quantity?: number;
  description?: string;
}
