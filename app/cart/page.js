import React from "react";
import { getItemsInCart } from "../data/ProductDao";
import Table from "../components/commons/table/Table";
import PaymentPanel from "../components/product/PaymentPanel";
import { APP_DESCRIPTION, APP_NAME } from "../data/consfig";

export const metadata = {
  title: `${APP_NAME} - Cart`,
  description: `${APP_DESCRIPTION}`,
};

const Cart = () => {
  const items = getItemsInCart();
  const onDelete = () => {};

  const columns = [
    { field: "image", label: "Foto", type: "image" },
    { field: "description", label: "Descripcion" },
    { field: "price", label: "Precio" },
    { field: "stock", label: "Stock" },
    { field: "brand", label: "Marca" },
    { field: "category", label: "Categoria" },
    { field: "quantity", label: "Cantidad", type: "quantity" },
  ];
  return (
    <div className="container m-auto">
      <div className="flex justify-center mt-2 mb-4">
        <div className="text-lg font-semibold">{"Productos en el carrito"}</div>
      </div>
      <div div className="grid grid-cols-4 gap-2 p-2">
        <div className="col-span-3">
          <Table columns={columns} rows={items} onDelete={onDelete} />
        </div>
        <div className="col-span-1">
          <PaymentPanel/>
        </div>
      </div>
    </div>
  );
};

export default Cart;
