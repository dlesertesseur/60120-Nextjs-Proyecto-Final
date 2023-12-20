"use client";
import ProductPanel from "@/app/components/product/ProductPanel";
import { storage } from "@/firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CrudPanel = ({ categories, slug, situations }) => {
  const router = useRouter();
  const [product, setProduct] = useState(null);

  const getData = async () => {
    const url = `/api/products/${slug}`;
    const res = await fetch(url, { cache: "no-store" });
    const ret = await res.json();
    setProduct(ret);
  };

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const onAction = async (id, values, file) => {

    let fileURL = null;

    if(file){
      const storageRef = ref(storage, id)
      const fileSnapshot = await uploadBytes(storageRef, file)
      fileURL = await getDownloadURL( fileSnapshot.ref )
    }

    const product = {
      id: id,
      sku: values.sku,
      category: values.category,
      ean: values.ean,
      stock: values.stock,
      slug: values.slug,
      price: values.price,
      description: values.description,
      brand: values.brand,
      situation: values.situation,
      image:fileURL
    };

    const body = JSON.stringify(product);

    const url = `/api/products`;

    const res = await fetch(url, {
      method: "PUT",
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
      title={"Update product"}
      categories={categories}
      situations={situations}
      onAction={onAction}
    />
  );
};

export default CrudPanel;
