"use client";
import ProductPanel from "@/app/components/product/ProductPanel";
import { storage } from "@/firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useRouter } from "next/navigation";

const CrudPanel = ({ categories, product, situations }) => {
  const router = useRouter();

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
