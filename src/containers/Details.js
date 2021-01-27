import React from "react";
import CustomerInfo from "../components/CustomerInfo";
import HeaderOrderDetails from "../components/HeaderOrderDetails";
import TableDetails from "../components/TableDetails";
import "./details-container.css";

const Details = () => {
  return (
    <div className="container px-1 px-md-4 py-5 mx-auto">
      <div className="card card-container-delivery">
        <HeaderOrderDetails />
        <hr className="hr-order-details" />
        <CustomerInfo />
        <div>
          <p className="title-info product-title">Información de productos</p>
          <TableDetails />
        </div>
      </div>
    </div>
  );
};

export default Details;
