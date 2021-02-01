import { map } from 'lodash'
import React from 'react'
import { cabecerasMaterials } from '../utils/utils'
import RowMaterials from './RowMaterials'

const TableMaterials = ({ materialsArray }) => {
  return (
    <div className="table-paintings table-responsive">
      <table className="table table-materials">
        <thead className="table-light text-center">
          <tr>
            {map(cabecerasMaterials, (cabecera, index) => (
              <th key={index}>{cabecera}</th>
            ))}
          </tr>
        </thead>
        <tbody className="tbody-materials font">
            {map(materialsArray, (material) => (
              <RowMaterials key={material.id} material={material} />
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableMaterials
