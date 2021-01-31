import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import { getAllMaterials } from '../api/materials';
import { findMaterialById } from '../utils/utils';
import Button from './Button';

const RowMeasurements = ({ measurement, materialsArray }) => {
  const {id, height, width, price, material_id, active} = measurement;
  const history = useHistory();

  const onEdit = () => {
    console.log("EDITAR MEDIDAS");
    localStorage.setItem('actualMeasurement', JSON.stringify(measurement));
    history.push('measurements/edit');
  }

  const onDelete = () => {
    console.log("BORRAR MEDIDAS");
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
