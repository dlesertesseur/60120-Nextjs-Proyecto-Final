"use client";
import ProductPanel from "@/app/components/product/ProductPanel";
import { useUserContext } from "@/app/context/UserContext";
import { storage } from "@/firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';
import React from "react";

const CrudPanel = ({ categories, product, situations }) => {
  const { user } = useUserContext();
  const router = useRouter();

  const onAction = async (id, values, file) => {

    const pid = uuidv4();
    
    const storageRef = ref(storage, pid)
    const fileSnapshot = await uploadBytes(storageRef, file)
    const fileURL = await getDownloadURL( fileSnapshot.ref )

    const newProduct = {
      id:pid,
      sku: values.sku,
      category: values.category,
      ean: values.ean,
      stock: values.stock,
      slug: values.slug,
      currency: "PESOS",
      price: values.price,
      description: values.description,
      brand: values.brand,
      owner: user.uid,
      situation: values.situation,
      image:fileURL
    };

    const body = JSON.stringify(newProduct);

    const url = `/api/products`;

    const res = await fetch(url, {
      method: "POST",
      body: body,
    });

    const ret = await res.json();

    if (ret.error) {
    } else {
      router.replace(`/admin`);
    }
  };

  return (
    <ProductPanel
      product={product}
      title={"New product"}
      categories={categories}
      situations={situations}
      onAction={onAction}
    />
  );
};

export default CrudPanel;
