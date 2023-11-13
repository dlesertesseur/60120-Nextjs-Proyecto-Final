import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductCounter from "../ProductCounter";

const Table = ({ columns, rows, onDelete = null, onUpdate = null }) => {
  const createField = (value, type) => {
    let field = null;
    switch (type) {
      case "image":
        field = <Image src={value} width={32} height={32} alt={""} />;
        break;

      case "quantity":
        field = <ProductCounter/>;
        break;
      default:
        field = value;
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
              {createField(row[c.field], c.type)}
            </td>
          );
        })}

        {onUpdate ? (
          <td className="px-6 py-4">
            <Link
              href={`/product/edit/`}
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </Link>
          </td>
        ) : null}

        {onDelete ? (
          <td className="px-6 py-4">
            <Link
              href={`/product/delete/`}
              className="font-medium text-red-600 dark:text-red-500 hover:underline"
            >
              Delete
            </Link>
          </td>
        ) : null}
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
