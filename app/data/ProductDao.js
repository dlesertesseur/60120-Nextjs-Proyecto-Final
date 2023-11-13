import { products } from "./data";

export function getProductByEan(ean) {
  const product = products.find((p) => p.ean.toString() === ean);
  return product;
}

export function getProductBySlug(slug) {
  const product = products.find((p) => p.slug === slug);
  return product;
}

export function getOffers(num) {
  const ret = [];

  for (let index = 0; index < num; index++) {
    const item = products[Math.floor(Math.random() * products.length)];
    ret.push(item);
  }

  return ret;
}

export function getAllProductsByCategory(category) {
  const ret = products.filter((p) => p.category.toLowerCase() === category);
  return ret;
}

export function getAllProducts() {
  return products;
}

export function getAllProductsByUser(userId, num) {
  let ret = null;
  if (num !== undefined) {
    ret = products.slice(0, num);
  } else {
    ret = products;
  }
  return ret;
}

export function getAllBrandsByCategory(category) {
  const brands = new Set();
  const productsInCategory = products.filter(
    (p) => p.category.toLowerCase() === category
  );
  productsInCategory.forEach((p) => brands.add(p.brand));

  const list = Array.from(brands);
  list.sort((a, b) => {
    return a - b;
  });

  return list;
}

export function getAllProductsByCategoryAndBrand(category, brand) {
  const inCategory = products.filter(
    (p) => p.category.toLowerCase() === category
  );
  const withBrand = inCategory.filter((p) => p.brand === brand);
  return withBrand;
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
