import React from 'react'
import { useHistory } from 'react-router-dom';
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
    console.log("BORRAR ZONA DE ENVIO");
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
