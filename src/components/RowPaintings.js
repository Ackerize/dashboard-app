import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { API_HOST } from "../utils/utils";
import Button from "./Button";


const RowPaintings = ({ painting }) => {
  const { id, image_url, name, description, stock, active } = painting;

  let history = useHistory();

  const onEdit = () => {
    history.push(`/paintings/edit/${id}`);
  }

  const onDelete = () => {
    const idToken = localStorage.getItem('idToken');
    const authStr = 'Bearer '.concat(idToken);
    axios.delete(`${API_HOST}/paintings/${id}`, {headers: {'authorization': authStr} })
    .then((res) => {
      const { error, message } = res.data;
      if(error){
        Swal.fire({
          title: "¡Oh no!.",
          text: `${message}`,
          icon: "error",
        });
      }else{
        Swal.fire({
          title: "¡Cuadro eliminado!.",
          text: "Has eliminado correctamente el cuadro",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
         window.location.reload(false);
        }, 1500);
      }
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
