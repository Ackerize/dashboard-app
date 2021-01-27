import moment from "moment";
import React from "react";
import { useHistory } from "react-router-dom";
import { getOrderDetail } from "../api/orders";
import { findStatus } from "../utils/utils";
import Button from "./Button";

const RowOrders = ({ order, setShowModal, setActualOrder }) => {
  const {
    id,
    customer_name,
    order_date,
    delivery_date,
    delivery_zone,
    status,
    total_amount,
  } = order;

  const { name } = delivery_zone;
  const history = useHistory();

  const orderDate = moment(order_date).format("DD/MM/YYYY hh:mm");
  const deliveryDate = moment(delivery_date).format("DD/MM/YYYY hh:mm");

  const onEdit = () => {
    setActualOrder(order);
    setShowModal(true);
  };

  const onView = () => {
    history.push({
      pathname: `/order/view/${id}`,
    });
  };

  return (
    <>
      <tr className="align-middle text-center">
        <th scope="row">{`Orden #${id}`}</th>
        <td>{customer_name}</td>
        <td>{orderDate}</td>
        <td>{deliveryDate}</td>
        <td>{name}</td>
        <td className={findStatus(status)}>{status}</td>
        <td>{`$ ${total_amount}`}</td>
        <td>
          <div className="cell-container">
            <Button type="view" onClick={onView} />
            <Button type="edit" onClick={onEdit} />
          </div>
        </td>
      </tr>
    </>
  );
};

export default RowOrders;
