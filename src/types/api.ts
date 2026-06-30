export type Category = {
  id: number;
  name: string;
  slug: string;
  description?: string | null;
};

export type ProductImage = {
  id: number;
  url: string;
  alt_text?: string | null;
  is_primary: boolean;
  sort_order: number;
};

export type ProductColor = {
  id: number;
  name: string;
  hex_code?: string | null;
  sort_order: number;
};

export type ProductSize = {
  id: number;
  name: string;
  sort_order: number;
};

export type ProductVariant = {
  id: number;
  sku?: string | null;
  stock_quantity: number;
  color?: ProductColor;
  size?: ProductSize;
};

export type Product = {
  id: number;
  name: string;
  slug: string;
  description?: string | null;
  category?: Category;
  product_type?: string | null;
  cost_price?: number;
  selling_price: number;
  profit_per_unit?: number;
  stock_quantity: number;
  low_stock_threshold: number;
  is_low_stock: boolean;
  status: 'active' | 'inactive';
  featured: boolean;
  images?: ProductImage[];
  colors?: ProductColor[];
  sizes?: ProductSize[];
  variants?: ProductVariant[];
};

export type WebsiteSettings = {
  brand_name?: string;
  primary_color?: string;
  secondary_color?: string;
  slogans?: string[];
  instagram?: string;
  instagram_url?: string;
  whatsapp_phone?: string;
  cart_status_message?: string;
};

export type PaginatedResponse<T> = {
  data: T[];
  links?: unknown;
  meta?: unknown;
};

export type SingleResponse<T> = {
  data: T;
};
