import React from "react";

const CustomerInfo = ({ order }) => {
  const {
    customer_name,
    delivery_address,
    email,
    delivery_zone,
    customer_phone
  } = order;

  const { name:delivery_zone_name} = delivery_zone;

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
          <p>{customer_name}</p>
          <p>{email}</p>
          <p>{`+503 ${customer_phone}`}</p>
          <p>{delivery_address}</p>
          <p>{delivery_zone_name}</p>
        </div>
      </div>
    </>
  );
};

export default CustomerInfo;
