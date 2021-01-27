import React from "react";
import CustomerInfo from "../components/CustomerInfo";
import HeaderOrderDetails from "../components/HeaderOrderDetails";
import SummaryOrder from "../components/SummaryOrder";
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
          <TableDetails />
        </div>
        <div>
          <SummaryOrder />
        </div>
      </div>
    </div>
  );
};

export default Details;
