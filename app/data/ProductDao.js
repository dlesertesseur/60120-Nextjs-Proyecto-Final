import { BASE_URL } from "./config";
import { products } from "./data";

export function getOffers(num) {
  const ret = [];

  for (let index = 0; index < num; index++) {
    const item = products[Math.floor(Math.random() * products.length)];
    ret.push(item);
  }

  return ret;
}

export async function getProductBySlug(slug) {
  const url = `${BASE_URL}/api/products/${slug}`;
  const ret = await fetch(url, { cache: "no-store" });
  const data = await ret.json();
  return data;
}

export async function getAllProductsByCategory(category) {
  const url = `${BASE_URL}/api/products/categories/${category}`;
  const ret = await fetch(url, { cache: "no-store" });
  const data = await ret.json();
  return data;
}

export async function getAllProducts() {
  const url = `${BASE_URL}/api/products`;
  const ret = await fetch(url, { cache: "no-store" });
  const data = await ret.json();
  return data;
}

export async function getAllProductsByOwner(ownerId) {
  const url = `${BASE_URL}/api/products/users/${ownerId}`;
  const ret = await fetch(url, { cache: "no-store" });
  const data = await ret.json();
  return data;
}

export async function getAllProductsBySituation(situation) {
  const url = `${BASE_URL}/api/products/situations/${situation}`;
  const ret = await fetch(url, { cache: "no-store" });
  const data = await ret.json();
  return data;
}

export async function getAllBrandsByCategory(category) {
  const url = `${BASE_URL}/api/products/categories/${category}/brands`;
  const ret = await fetch(url, { cache: "no-store" });
  const data = await ret.json();
  return data;
}

export async function getAllProductsByCategoryAndBrand(category, brand) {
  const url = `${BASE_URL}/api/products/categories/${category}/brands/${brand}`;
  const ret = await fetch(url, { cache: "no-store" });
  const data = await ret.json();
  return data;
}

export function getItemsInCart() {
  const ret = [];
  const num = 5;

  for (let index = 0; index < num; index++) {
    const item = products[Math.floor(Math.random() * products.length)];
    ret.push(item);
  }

  return ret;
}
