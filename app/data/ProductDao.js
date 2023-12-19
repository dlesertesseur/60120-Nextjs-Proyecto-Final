import { db } from "@/firebase/config";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";

const collName = "products";

export async function getProductBySlug(slug) {
  const coll = collection(db, collName);
  const q = query(coll, where("slug", "==", slug));
  const querySnapshot = await getDocs(q);
  const documents = querySnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return documents[0];
}

export async function getProductById(id) {
  let document = null;
  const docRef = doc(db, collName, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    document = docSnap.data();
    document = {
      ...document,
      id: id,
    };
  }

  return document;
}

export async function getAllProductsByCategory(category) {
  const coll = collection(db, collName);
  const q = query(coll, where("category", "==", category.toUpperCase()));
  const querySnapshot = await getDocs(q);
  const documents = querySnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return documents;
}

export async function getAllProducts(params) {
  const coll = collection(db, collName);
  const sectionsQueryRef = query(coll, orderBy("description"));
  const querySnapshot = await getDocs(sectionsQueryRef);
  const documents = querySnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return documents;
}

export async function getAllProductsBySituation(situation) {
  const coll = collection(db, collName);
  const q = query(coll, where("situation", "==", situation));

  const querySnapshot = await getDocs(q);
  const documents = querySnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return documents;
}

export async function getAllBrandsByCategory(category) {
  const brands = new Set();

  const coll = collection(db, collName);

  const q = query(coll, where("category", "==", category.toUpperCase()));

  const querySnapshot = await getDocs(q);

  querySnapshot.docs.forEach((doc) => {
    brands.add(doc.data().brand);
  });

  const ret = Array.from(brands);
  ret.sort();

  return ret;
}

export async function getAllProductsByCategoryAndBrand(category, brand) {
  const coll = collection(db, collName);

  const q = query(
    coll,
    where("category", "==", category.toUpperCase()),
    where("brand", "==", brand)
  );

  const querySnapshot = await getDocs(q);

  const documents = querySnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return documents;
}

// export function getItemsInCart() {
//   const ret = [];
//   const num = 5;

//   for (let index = 0; index < num; index++) {
//     const item = products[Math.floor(Math.random() * products.length)];
//     ret.push(item);
//   }

//   return ret;
// }
