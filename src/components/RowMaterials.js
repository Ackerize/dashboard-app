import React from 'react'
import Button from './Button';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { API_HOST } from '../utils/utils';
import Swal from 'sweetalert2';

const RowMaterials = ({ material }) => {
  const {id, name, active} = material;
  const history = useHistory();

  const onEdit = () => {
    localStorage.setItem('actualMaterial', JSON.stringify(material));
    history.push('/materials/edit')
  }

  const onDelete = () => {
    axios.delete(`${API_HOST}/materials/${id}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
      Swal.fire({
        title: "¡Material borrado!",
        text: "Has borrado un material exitosamente",
        icon: "success",
        showConfirmButton: false,
        timer: 1400,
      });
      setTimeout(() => {
        window.location.reload(false);
      }, 1500);
    })
  }

  return (
    <tr className="align-middle text-center">
      <th scope="row">
        {id}
      </th>
      <td>{name}</td>
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

export default RowMaterials
