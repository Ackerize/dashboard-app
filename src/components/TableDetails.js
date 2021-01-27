import { map } from "lodash";
import React from "react";
import RowDetails from "./RowDetails";

const TableDetails = ({ details }) => {
  return (
    <>
      <p className="title-info product-title">Información de productos</p>
      <div className="table-responsive">
        <table className="table table-details">
          <thead className="table-light text-center">
            <tr>
              <th scope="col">Producto</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {map(details, (item, index) => (
              <RowDetails key={index} order={item} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableDetails;
