import React from "react";
import "./details-style.css";
import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";

const HeaderOrderDetails = () => {
  return (
    <>
      <div className="row d-flex justify-content-between px-3 top">
        <div className="d-flex header-bar">
          <h5>
            ORDER <span className="text-primary font-weight-bold">#1</span>
          </h5>
        </div>
        <div className="d-flex flex-column text-sm-right">
          <p className="mb-0">
            Fecha de entrega: <span>01/12/19</span>
          </p>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-12">
          <ul id="progressbar" className="text-center">
            <li className="active step0"></li>
            <li className="step0"></li>
            <li className="step0"></li>
            <li className="step0"></li>
          </ul>
        </div>
      </div>
      <div className="row justify-content-between top container-labels">
        <div className="row d-flex icon-content icon-container">
          {" "}
          <img className="icon" src={step1} />
          <div className="d-flex flex-column text-container">
            <p className="font-weight-bold text-label">
              Orden
              <br />
              Pendiente
            </p>
          </div>
        </div>
        <div className="row d-flex icon-content icon-container">
          {" "}
          <img className="icon" src={step2} />
          <div className="d-flex flex-column text-container">
            <p className="font-weight-bold text-label">
              Orden
              <br />
              Confirmada
            </p>
          </div>
        </div>
        <div className="row d-flex icon-content icon-container">
          {" "}
          <img className="icon" src={step3} />
          <div className="d-flex flex-column text-container">
            <p className="font-weight-bold text-label">
              Orden <br />
              En camino
            </p>
          </div>
        </div>
        <div className="row d-flex icon-content icon-container">
          {" "}
          <img className="icon" src={step4} />
          <div className="d-flex flex-column text-container">
            <p className="font-weight-bold text-label">
              Orden <br />
              Entregada
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderOrderDetails;
