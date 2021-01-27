import React from "react";

const CustomerInfo = () => {
  return (
    <>
      <p className="title-info">Información del cliente</p>
      <div className="address-container">
        <div className="address-delivery text">
          <p
            className="title-address"
            style={{ fontWeight: 700, paddingBottom: 8 }}
          >
            Dirrección de entrega:{" "}
          </p>
          <p>Cristian Mundo</p>
          <p>cmundo@gmail.com</p>
          <p>Colonia San Mauricio</p>
          <p>Santa Elena</p>
        </div>
      </div>
    </>
  );
};

export default CustomerInfo;
