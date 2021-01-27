import React from "react";

const TableDetails = () => {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Cuadro 11</th>
            <td>$ 25.00</td>
            <td>2</td>
            <td>$ 50.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableDetails;
