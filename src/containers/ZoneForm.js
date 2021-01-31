import React from 'react'
import CardHeading from '../components/CardHeading'
import ZoneBody from '../components/ZoneBody'

const ZoneForm = () => {
  return (
    <div className="page-wrapper p-t-45 p-b-50">
      <div className="wrapper wrapper--w790">
        <div className="card card-5 card-painting">
          <CardHeading title="Crear nueva zona" />
          <ZoneBody btnText="Crear zona" />
        </div>
      </div>
    </div>
  )
}

export default ZoneForm
