import { map } from 'lodash'
import React, { useEffect, useState } from 'react'

import { cabecerasPaintings } from '../utils/utils'
import './Navbar.css';
import RowPaintings from './RowPaintings';

const TablePaintings = ({ paintingsArray }) => {
  return (
    <div className="table-paintings table-responsive">
      <table className="table">
        <thead className="table-light 0">
          <tr>
            {map(cabecerasPaintings, (cabecera, index) => (
              <th key={index}>{cabecera}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {map(paintingsArray, (painting) => (
            <RowPaintings key={painting.id} painting={painting} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TablePaintings
