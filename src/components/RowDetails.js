import React, {useEffect, useState} from "react";
import { getAllMeasurements } from "../api/measurements";
import { findMeasurements } from "../utils/utils";

const RowDetails = ({ order }) => {
  const [measurements, setMeasurements] = useState(null);
  const {amount, measurements:idMeasurement, quantity, price, painting, material} = order;
  const {name:painting_name, image_url} = painting;
  const {name:material_name} = material;

  useEffect(() => {
    getAllMeasurements().then((response) => setMeasurements(response))
  }, [])

  if(!measurements) return null;

  let textMeasures;
  
  if(idMeasurement[0] == 'A'){
    textMeasures = idMeasurement;
  }else{
    textMeasures = findMeasurements(measurements, idMeasurement);
  }

  return (
    <tr className="align-middle text-center">
      <th scope="row" width="40%">
        <div className="container-product-item principal-info">
          <img className="product-img" src={image_url} width="80px" />
          <div className="text-container-product">
            <p className="product-name">{painting_name}</p>
            <p className="description-product-item material-name">{material_name}</p>
            <p className="description-product-item dimensions">{textMeasures}</p>
          </div>
        </div>
      </th>
      <td width="20%" className="row-price">{`$ ${price}`}</td>
      <td width="20%">{quantity}</td>
      <td width="20%">{`$ ${amount}`}</td>
    </tr>
  );
};

export default RowDetails;
