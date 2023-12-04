import Image from "next/image";
import React from "react";
import ProductCounter from "../ProductCounter";
import DeleteButton from "../DeleteButton";
import UpdateButton from "../UpdateButton";
import ImagesButton from "../ImagesButton";

const Table = ({
  columns,
  rows,
  onDelete = null,
  onUpdate = null,
  onImages = null,
  compact = true,
}) => {
  const createField = (obj, col, type) => {
    let field = null;
    switch (type) {
      case "image":
        field = (
          <Image
            src={obj[col] ? obj[col] : "/noPicture.jpg"}
            width={32}
            height={32}
            alt={""}
          />
        );
        break;

      case "price":
        field = `$ ${obj[col]}`;
        break;

      case "subTotal":
        field = `$ ${obj["price"] * obj["quantity"]}`;
        break;

      case "quantity":
        field = (
          <ProductCounter
            setValue={(value) => {
              onUpdate(obj, value);
            }}
            value={obj.quantity}
          />
        );
        break;
      case "delete":
        field = (
          <DeleteButton
            compact
            text={"Delete"}
            onClick={() => {
              onDelete(obj);
            }}
          ></DeleteButton>
        );
        break;

      case "update":
        field = (
          <UpdateButton
            compact
            text={"Update"}
            onClick={() => {
              onUpdate(obj);
            }}
          ></UpdateButton>
        );
        break;

      case "images":
        field = (
          <ImagesButton
            compact
            text={"Images"}
            onClick={() => {
              onImages(obj);
            }}
          ></ImagesButton>
        );
        break;
      default:
        field = obj[col];
        break;
    }
    return field;
  };

  const createRow = (columns, row) => {
    const fields = Object.entries(row);

    const ret = (
      <tr
        key={row.id}
        className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
      >
        {columns.map((c, index) => {
          return (
            <td key={index} className="px-6 py-4">
              {createField(row, c.field, c.type)}
            </td>
          );
        })}
      </tr>
    );

    return ret;
  };

  return (
    <div className="relative overflow-x-auto mb-3">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns?.map((c, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{rows?.map((v) => createRow(columns, v))}</tbody>
      </table>
    </div>
  );
};

export default Table;
