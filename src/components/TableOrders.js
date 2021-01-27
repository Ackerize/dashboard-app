import { map } from "lodash";
import React, { useState } from "react";
import { cabecerasOrders } from "../utils/utils";
import ModalOrder from "./ModalOrder";
import RowOrders from "./RowOrders";

const TableOrders = ({ orders }) => {
  const [showModal, setShowModal] = useState(false);
  const [actualOrder, setActualOrder] = useState(null);

  return (
    <div className="table-container">
      {showModal && (
        <ModalOrder showModal={showModal} setShowModal={setShowModal} order={actualOrder} />
      )}
      <table className="table w-auto">
        <thead className="table-light text-center">
          <tr>
            {map(cabecerasOrders, (cabecera, index) => (
              <th key={index}>{cabecera}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {map(orders, (order) => (
            <RowOrders
              key={order.id}
              order={order}
              setShowModal={setShowModal}
              setActualOrder={setActualOrder}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableOrders;
