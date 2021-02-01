import axios from 'axios';
import React from 'react'
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { API_HOST } from '../utils/utils';
import Button from './Button';

const RowZone = ({ zone }) => {

  const {id, name, delivery_cost, active} = zone;
  const history = useHistory();

  const onEdit = () => {
    console.log("EDITAR ZONA DE ENVIO");
    localStorage.setItem('actualZone', JSON.stringify(zone));
    history.push('delivery-zones/edit');
  }

  const onDelete = () => {
    console.log("BORRAR ZONA");
    axios.delete(`${API_HOST}/delivery-zones/${id}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
      Swal.fire({
        title: "¡Zona de entrega borrada!",
        text: "Has borrado una zona de entrega exitosamente",
        icon: "success",
        showConfirmButton: false,
        timer: 1400,
      });
      setTimeout(() => {
        window.location.reload(false);
      }, 1500);
    })
    .catch((err) => {
      Swal.fire({
        title: "¡Oops!",
        text: "Ocurrió un error",
        icon: "error",
      });
    })
  }

  return (
    <tr className="align-middle text-center">
      <th scope="row">
        {id}
      </th>
      <td>{name}</td>
      <td>{`$ ${delivery_cost}`}</td>
      <td>{active ? "Si" : "No"}</td>
      <td colSpan="2" className="col-1">
        <div className="cell-container">
          <Button type="edit" onClick={onEdit} />
          <Button type="delete" onClick={onDelete} />
        </div>
      </td>
    </tr>
  )
}

export default RowZone
