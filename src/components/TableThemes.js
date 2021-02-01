import React from 'react'
import { map } from 'lodash'
import { cabecerasThemes } from '../utils/utils'
import RowTheme from './RowTheme'

const TableThemes = ({ themesArray }) => {
  return (
    <div className="table-paintings table-responsive">
      <table className="table table-theme">
        <thead className="table-light text-center">
          <tr>
            {map(cabecerasThemes, (cabecera, index) => (
              <th key={index}>{cabecera}</th>
            ))}
          </tr>
        </thead>
        <tbody className="tbody-materials font">
            {map(themesArray, (theme) => (
              <RowTheme key={theme.id} theme={theme} />
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableThemes
