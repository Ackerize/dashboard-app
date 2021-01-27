import React from "react";
import img1 from "../assets/step1.png";

const TableDetails = () => {
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
            <tr className="align-middle text-center">
              <th scope="row" width="40%">
                <div className="container-product-item principal-info">
                  <img className="product-img" src={img1} width="80px" />
                  <div className="text-container-product">
                    <p className="product-name">Cuadro 11</p>
                    <p className="description-product-item">Vinil</p>
                    <p className="description-product-item">50x20</p>
                  </div>
                </div>
              </th>
              <td width="20%">$ 25.00</td>
              <td width="20%">2</td>
              <td width="20%">$ 50.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableDetails;
