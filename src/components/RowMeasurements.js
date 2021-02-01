import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { getAllMaterials } from '../api/materials';
import { API_HOST, findMaterialById } from '../utils/utils';
import Button from './Button';

const RowMeasurements = ({ measurement, materialsArray }) => {
  const {id, height, width, price, material_id, active} = measurement;
  const history = useHistory();

  const onEdit = () => {
    localStorage.setItem('actualMeasurement', JSON.stringify(measurement));
    history.push('/measurements/edit');
  }

  const onDelete = () => {
    axios.delete(`${API_HOST}/measurements/${id}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
      Swal.fire({
        title: "¡Medidas borradas!",
        text: "Has borrado las medidas exitosamente",
        icon: "success",
        showConfirmButton: false,
        timer: 1400,
      });
      setTimeout(() => {
        window.location.reload(false);
      }, 1500);
    })
  }

  const material_name = findMaterialById(materialsArray, material_id);

  return (
    <tr className="align-middle text-center">
      <th scope="row">
        {id}
      </th>
      <td>{`${width} m`}</td>
      <td>{`${height} m`}</td>
      <td>{`$ ${price}`}</td>
      <td>{material_name}</td>
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

export default RowMeasurements
