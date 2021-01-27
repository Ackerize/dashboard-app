import React from "react";

const SummaryOrder = () => {
  return (
    <>
      <p className="title-info summary-text">Resumen</p>
      <div className="summary-container">
        <p className="text-summary-desc">
          Subtotal: <span className="subtotal-cost">$ 50.00</span>
        </p>
        <p className="text-summary-desc">
          Envío: <span className="delivery-cost">$ 3.00</span>
        </p>
        <hr />
        <p className="text-summary-desc total-text">
          Total: <span className="total-cost">$ 53.00</span>
        </p>
      </div>
    </>
  );
};

export default SummaryOrder;
