import type { Product, WebsiteSettings } from '../types/api';

export const fallbackSettings: Required<WebsiteSettings> = {
  brand_name: 'Aurigin',
  primary_color: '#75723d',
  secondary_color: '#212117',
  slogans: ['Build your Legacy', 'Every Legacy Has An Origin'],
  instagram: 'aurigin.fit',
  instagram_url: 'https://www.instagram.com/aurigin.fit',
  whatsapp_phone: '+963958261912',
  cart_status_message: 'Cart sharing will be available soon',
};

export const fallbackProducts: Product[] = [
  {
    id: 1,
    name: 'Legacy Straight Fit Sport Shirt',
    slug: 'legacy-straight-fit-sport-shirt',
    description: 'A structured sport shirt made for clean athletic-casual outfits.',
    category: { id: 1, name: 'Straight Fit Sport Shirts', slug: 'straight-fit-sport-shirts' },
    product_type: 'Sport Shirt',
    selling_price: 24,
    stock_quantity: 15,
    low_stock_threshold: 5,
    is_low_stock: false,
    status: 'active',
    featured: true,
    images: [],
    variants: [
      { id: 1, stock_quantity: 8, color: { id: 1, name: 'Black', hex_code: '#212117', sort_order: 1 }, size: { id: 1, name: 'S', sort_order: 1 } },
      { id: 2, stock_quantity: 7, color: { id: 2, name: 'Olive', hex_code: '#75723d', sort_order: 2 }, size: { id: 2, name: 'M', sort_order: 2 } },
    ],
    colors: [
      { id: 1, name: 'Black', hex_code: '#212117', sort_order: 1 },
      { id: 2, name: 'Olive', hex_code: '#75723d', sort_order: 2 },
      { id: 3, name: 'White', hex_code: '#ffffff', sort_order: 3 },
    ],
    sizes: [
      { id: 1, name: 'S', sort_order: 1 },
      { id: 2, name: 'M', sort_order: 2 },
      { id: 3, name: 'L', sort_order: 3 },
      { id: 4, name: 'XL', sort_order: 4 },
    ],
  },
  {
    id: 2,
    name: 'Origin Oversized Shirt',
    slug: 'origin-oversized-shirt',
    description: 'A relaxed oversized shirt with sport-inspired Aurigin styling.',
    category: { id: 2, name: 'Oversized Shirts', slug: 'oversized-shirts' },
    product_type: 'Oversized Sport Casual',
    selling_price: 22,
    stock_quantity: 11,
    low_stock_threshold: 5,
    is_low_stock: false,
    status: 'active',
    featured: true,
    images: [],
    variants: [
      { id: 3, stock_quantity: 6, color: { id: 4, name: 'Sand', hex_code: '#d9c7a1', sort_order: 1 }, size: { id: 5, name: 'M', sort_order: 1 } },
      { id: 4, stock_quantity: 5, color: { id: 5, name: 'Charcoal', hex_code: '#333333', sort_order: 2 }, size: { id: 6, name: 'L', sort_order: 2 } },
    ],
    colors: [
      { id: 4, name: 'Sand', hex_code: '#d9c7a1', sort_order: 1 },
      { id: 5, name: 'Charcoal', hex_code: '#333333', sort_order: 2 },
    ],
    sizes: [
      { id: 5, name: 'M', sort_order: 1 },
      { id: 6, name: 'L', sort_order: 2 },
      { id: 7, name: 'XL', sort_order: 3 },
    ],
  },
];
