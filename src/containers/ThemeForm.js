import React from 'react'
import CardHeading from '../components/CardHeading'
import ThemeBody from '../components/ThemeBody'

const ThemeForm = () => {
  return (
    <div className="page-wrapper p-t-45 p-b-50">
      <div className="wrapper wrapper--w790">
        <div className="card card-5 card-painting">
          <CardHeading title="Crear nuevo tema" />
          <ThemeBody btnText="Crear tema" />
        </div>
      </div>
    </div>
  )
}

export default ThemeForm
