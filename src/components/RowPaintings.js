import React from "react";
import Button from "./Button";


const RowPaintings = ({ painting }) => {
  const { id, image_url, name, description, measurements, price, stock, active } = painting;
  return (
    <tr className="align-middle text-center">
      <th scope="row">
        <img src={image_url} alt={`Cuadro-${id}`} className="img-display" />
      </th>
      <td>{name}</td>
      <td className="description-cell col-5">{description}</td>
      <td>{stock}</td>
      <td>{active ? "Si" : "No"}</td>
      <td colSpan="2" className="col-1">
        <div className="cell-container">
          <Button type="edit" />
          <Button type="delete" />
        </div>
      </td>
    </tr>
  );
};

export default RowPaintings;
