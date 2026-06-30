import { apiGet } from './client';
import type { PaginatedResponse, Product, SingleResponse, WebsiteSettings } from '../types/api';

export async function getWebsiteSettings(): Promise<WebsiteSettings> {
  const response = await apiGet<SingleResponse<WebsiteSettings>>('/settings/public');
  return response.data;
}

export async function getProducts(): Promise<Product[]> {
  const response = await apiGet<PaginatedResponse<Product>>('/products?status=active&per_page=50');
  return response.data;
}
