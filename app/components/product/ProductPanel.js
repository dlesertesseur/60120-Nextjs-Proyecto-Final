"use client";
import React, { useEffect, useState } from "react";
import InputText from "../commons/InputText";
import InputSelect from "../commons/InputSelect";
import InputImage from "../commons/InputImage";
import { useRouter } from "next/navigation";

const ProductPanel = ({
  title,
  product = null,
  categories,
  situations,
  disabled = false,
  onAction = null,
}) => {
  const route = useRouter();
  const [state, setState] = useState({ slug: "" });

  useEffect(() => {
    if (product) {
      setState(product);
    }
  }, [product]);

  function createField(label, field) {
    return (
      <div className="mt-5 w-full">
        <InputText
          disabled={disabled}
          label={label}
          name={field}
          setValue={(e) => {
            const obj = { ...state };
            obj[field] = e.currentTarget.value;
            setState(obj);
          }}
          value={state[field]}
        />
      </div>
    );
  }

  function createSelect(label, field, items) {
    return (
      <div className="mt-5 w-full">
        <InputSelect
          disabled={disabled}
          label={label}
          name={field}
          setValue={(e) => {
            const obj = { ...state };
            obj[field] = e.currentTarget.value;
            setState(obj);
          }}
          value={state[field]}
          items={items}
        />
      </div>
    );
  }

  function createImage(label, field, items) {
    return (
      <div className="mt-5 w-full">
        <InputImage
          disabled={disabled}
          label={label}
          name={field}
          setValue={(e) => {
            const obj = { ...state };
            obj[field] = e.currentTarget.value;
            setState(obj);
          }}
          value={state[field]}
          items={items}
        />
      </div>
    );
  }

  async function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (onAction) {
      onAction(product?.id, formData);
    }
  }

  return (
    <div className="flex-col px-2">
      <form onSubmit={submitForm} method="POST" action={"#"}>
        <div className={"flex w-full justify-center"}>
          <div
            className={"flex-col lg:w-1/2 md:w-3/4 sm:w-full lg:px-0 sm:px-2"}
          >
            <div
              className={"flex w-full text-base font-semibold text-left mb-3"}
            >
              {title}
            </div>
            {createField("Slug", "slug")}
            {createField("Description", "description")}
            <div className={"flex gap-3"}>
              {createField("Price", "price")}
              {createField("Stock", "stock")}
            </div>
            <div className={"flex gap-3"}>
              {createField("Sku", "sku")}
              {createField("Ean", "ean")}
            </div>
            {createField("Brand", "brand")}
            <div className={"flex gap-3"}>
              {createSelect("Category", "category", categories)}
              {createSelect("Situation", "situation", situations)}
            </div>
            {createImage("Image", "image")}
            
            <div className={"flex my-5 justify-end gap-2"}>
              <button
                type="submit"
                className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Accept
              </button>

              <button
                className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={(e) => {
                  e.preventDefault();
                  route.back();
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductPanel;
