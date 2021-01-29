import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { API_HOST } from "../utils/utils";
import Button from "./Button";


const RowPaintings = ({ painting }) => {
  const { id, image_url, name, description, measurements, price, stock, active } = painting;

  let history = useHistory();

  const onEdit = () => {
    history.push(`/edit/${id}`);
  }

  const onDelete = () => {
    /*axios.delete(`${API_HOST}/paintings/${id}`)
    .then((response) => {
      console.log(res);
      console.log(res.data);
    })*/
    Swal.fire({
      title: "¡Cuadro eliminado!.",
      text: "Aún no elimina, falta la validación",
      icon: "success",
      showConfirmButton: false,
      timer: 1200,
    });
  }

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
          <Button type="edit" onClick={onEdit} />
          <Button type="delete" onClick={onDelete} />
        </div>
      </td>
    </tr>
  );
};

export default RowPaintings;
