import React from 'react'
import Button from './Button';
import { useHistory } from "react-router-dom";

const RowMaterials = ({ material }) => {
  const {id, name, active} = material;
  const history = useHistory();

  const onEdit = () => {
    console.log("EDITAR MATERIAL");
    localStorage.setItem('actualMaterial', JSON.stringify(material));
    history.push('/materials/edit')
  }

  const onDelete = () => {
    console.log("BORRAR MATERIAL");
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
