import React from "react";
import CardHeading from "../components/CardHeading";
import MaterialBody from "../components/MaterialBody";

const MaterialForm = () => {
  return (
    <div className="page-wrapper p-t-45 p-b-50">
      <div className="wrapper wrapper--w790">
        <div className="card card-5 card-painting">
          <CardHeading title="Crear nuevo material" />
          <MaterialBody btnText="Crear material" />
        </div>
      </div>
    </div>
  );
};

export default MaterialForm;
