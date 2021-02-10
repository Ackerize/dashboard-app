import React from 'react'
import BodyMeasurement from '../components/BodyMeasurement'
import CardHeading from '../components/CardHeading'

const MeasurementForm = () => {
  return (
    <div className="page-wrapper p-t-45 p-b-50">
      <div className="wrapper wrapper--w790">
        <div className="card card-5 card-painting">
          <CardHeading title="Crear nuevas medidas" />
          <BodyMeasurement btnText="Crear medidas" />
        </div>
      </div>
    </div>
  )
}

export default MeasurementForm
