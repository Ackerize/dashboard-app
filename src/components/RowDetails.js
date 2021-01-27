import React from "react";

const RowDetails = ({ order }) => {
  console.log("ENTRE")
  const {amount, measurements, quantity, price, painting, material} = order;
  const {name:painting_name, image_url} = painting;
  const {name:material_name} = material;

  console.log(order)

  return (
    <tr className="align-middle text-center">
      <th scope="row" width="40%">
        <div className="container-product-item principal-info">
          <img className="product-img" src={image_url} width="80px" />
          <div className="text-container-product">
            <p className="product-name">{painting_name}</p>
            <p className="description-product-item material-name">{material_name}</p>
            <p className="description-product-item dimensions">{measurements}</p>
          </div>
        </div>
      </th>
      <td width="20%">{`$ ${price}`}</td>
      <td width="20%">{quantity}</td>
      <td width="20%">{`$ ${amount}`}</td>
    </tr>
  );
};

export default RowDetails;
