import { config } from "../config";
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
  const url = `${config.APP_DOMAIN}/api/products/${slug}`;
  const ret = await fetch(url, { cache: "no-store" });
  const data = await ret.json();
  return data;
}

export async function getAllProductsByCategory(category) {
  const url = `${config.APP_DOMAIN}/api/products/categories/${category}`;
  const ret = await fetch(url, { cache: "no-store" });
  const data = await ret.json();
  return data;
}

export async function getAllProducts() {
  const url = `${config.APP_DOMAIN}/api/products`;
  const ret = await fetch(url, { cache: "no-store" });
  const data = await ret.json();
  return data;
}

export async function getAllProductsByOwner(ownerId) {
  const url = `${config.APP_DOMAIN}/api/products/users/${ownerId}`;
  const ret = await fetch(url, { cache: "no-store" });
  const data = await ret.json();
  return data;
}

export async function getAllProductsBySituation(situation) {
  const url = `${config.APP_DOMAIN}/api/products/situations/${situation}`;
  const ret = await fetch(url, { cache: "no-store" });
  const data = await ret.json();
  return data;
}

export async function getAllBrandsByCategory(category) {
  const url = `${config.APP_DOMAIN}/api/products/categories/${category}/brands`;
  const ret = await fetch(url, { cache: "no-store" });
  const data = await ret.json();
  return data;
}

export async function getAllProductsByCategoryAndBrand(category, brand) {
  const url = `${config.APP_DOMAIN}/api/products/categories/${category}/brands/${brand}`;
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
