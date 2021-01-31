import React from 'react'
import { map } from 'lodash'
import { cabecerasMeasurements } from '../utils/utils'
import RowMeasurements from './RowMeasurements'

const TableMeasurements = ({ measurementsArray, materialsArray }) => {
  return (
    <div className="table-responsive">
      <table className="table table-zones">
        <thead className="table-light text-center">
          <tr>
            {map(cabecerasMeasurements, (cabecera, index) => (
              <th key={index}>{cabecera}</th>
            ))}
          </tr>
        </thead>
        <tbody className="tbody-materials font">
            {map(measurementsArray, (measurement) => (
              <RowMeasurements key={measurement.id} measurement={measurement} materialsArray={materialsArray} />
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableMeasurements
