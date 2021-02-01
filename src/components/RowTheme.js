import axios from 'axios';
import React from 'react'
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { API_HOST } from '../utils/utils';
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
    console.log("BORRAR TEMA");
    axios.delete(`${API_HOST}/themes/${id}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
      Swal.fire({
        title: "¡Tema borrado!",
        text: "Has borrado un tema exitosamente",
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
