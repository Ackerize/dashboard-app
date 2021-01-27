import React from "react";

const SummaryOrder = ({ subtotal, delivery_cost, total }) => {
  return (
    <div>
      <p className="title-info summary-text">Resumen</p>
      <div className="summary-container">
        <p className="text-summary-desc">
          Subtotal: <span className="subtotal-cost">{`$ ${subtotal}`}</span>
        </p>
        <p className="text-summary-desc">
          Envío: <span className="delivery-cost">{`$ ${delivery_cost}`}</span>
        </p>
        <hr />
        <p className="text-summary-desc total-text">
          Total: <span className="total-cost">{`$ ${total}`}</span>
        </p>
      </div>
    </div>
  );
};

export default SummaryOrder;
