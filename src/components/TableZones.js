import React from 'react'
import { map } from 'lodash'
import { cabecerasZones } from '../utils/utils'
import RowZone from './RowZone'

const TableZones = ({ zonesArray }) => {
  return (
    <div className="table-responsive">
      <table className="table table-zones">
        <thead className="table-light text-center">
          <tr>
            {map(cabecerasZones, (cabecera, index) => (
              <th key={index}>{cabecera}</th>
            ))}
          </tr>
        </thead>
        <tbody className="tbody-materials font">
            {map(zonesArray, (zone) => (
              <RowZone key={zone.id} zone={zone} />
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableZones
