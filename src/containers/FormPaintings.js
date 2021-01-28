import React from "react";
import CardBody from "../components/CardBody";
import CardHeading from "../components/CardHeading";
import "./main.css";

const FormPaintings = () => {
  return (
    <div className="page-wrapper p-t-45 p-b-50">
      <div className="wrapper wrapper--w790">
        <div className="card card-5 card-painting">
          <CardHeading title="Crear nuevo cuadro" />
          <CardBody btnText="Crear Cuadro" />
        </div>
      </div>
    </div>
  );
};

export default FormPaintings;
