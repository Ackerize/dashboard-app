import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getOrderById, getOrderDetail } from "../api/orders";
import Button from "../components/Button";
import CustomerInfo from "../components/CustomerInfo";
import HeaderOrderDetails from "../components/HeaderOrderDetails";
import SummaryOrder from "../components/SummaryOrder";
import TableDetails from "../components/TableDetails";
import { formatFloat } from "../utils/utils";
import "./details-container.css";

const Details = (props) => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [order, setOrder] = useState(null);
  const history = useHistory();

  useEffect(() => {
    getOrderDetail(id).then((response) => setDetails(response.order_detail));
  }, []);

  useEffect(() => {
    getOrderById(id).then((response) => setOrder(response));
  }, []);

  if (!order) return null;
  if (!details) return null;

  const { total_amount, delivery_zone } = order;
  const { delivery_cost } = delivery_zone;
  const total = formatFloat(total_amount);
  const deliveryCost = formatFloat(delivery_cost);
  const subtotal = formatFloat(total_amount - delivery_cost);

  const onBack = () => {
    history.push("/history");
  }

  return (
    <div className="container px-1 px-md-4 py-5 mx-auto">
      <div className="card card-container-delivery">
        <HeaderOrderDetails order={order} />
        <hr className="hr-order-details" />
        <CustomerInfo order={order} />
        <div>
          <TableDetails details={details} />
        </div>
        <div className="footer-details">
          <SummaryOrder
            subtotal={subtotal}
            delivery_cost={deliveryCost}
            total={total}
          />
          <Button type="back" onClick={onBack} />
        </div>
      </div>
    </div>
  );
};

export default Details;
