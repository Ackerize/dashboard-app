import React from 'react'
import { useHistory } from 'react-router-dom';
import Button from './Button';

const RowTheme = ({ theme }) => {
  const {id, name, active, image_url} = theme;
  const history = useHistory();

  const onEdit = () => {
    console.log("EDITAR CUADRO");
    localStorage.setItem('actualTheme', JSON.stringify(theme));
    history.push('themes/edit');
  }
  
  const onDelete = () => {
    console.log("BORRAR MATERIAL");
  }

  return (
    <tr className="align-middle text-center">
      <th scope="row">
        {id}
      </th>
      <td>
        <img src={image_url} alt={`Tema-${id}`} className="img-display" />
      </td>
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

export default RowTheme
