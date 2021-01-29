import React from "react";
import "./details-style.css";
import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";
import { progressOrderBar } from "../utils/utils";
import moment from "moment";

const HeaderOrderDetails = ({ order }) => {
  const { status, id, delivery_date } = order;
  return (
    <>
      <div className="row d-flex justify-content-between px-3 top delivery">
        <div className="d-flex header-bar delivery">
          <h5>
            ORDER <span className="text-primary font-weight-bold">{`# ${id}`}</span>
          </h5>
        </div>
        <div className="d-flex flex-column text-sm-right delivery">
          <p className="mb-0">
            Fecha de entrega: <span>{moment(delivery_date).format("DD-MM-YYYY")}</span>
          </p>
        </div>
      </div>
      <div className="row d-flex justify-content-center delivery progress-column">
        <div className="col-12">
          <ul id="progressbar" className="text-center">
            {progressOrderBar(status)}
          </ul>
        </div>
      </div>
      <div className="row justify-content-between top container-labels delivery">
        <div className="row d-flex icon-content icon-container delivery">
          {" "}
          <img className="icon" src={step1} />
          <div className="d-flex flex-column text-container delivery">
            <p className="font-weight-bold text-label">
              Orden
              <br />
              Pendiente
            </p>
          </div>
        </div>
        <div className="row d-flex icon-content icon-container delivery">
          {" "}
          <img className="icon" src={step2} />
          <div className="d-flex flex-column text-container delivery">
            <p className="font-weight-bold text-label">
              Orden
              <br />
              Confirmada
            </p>
          </div>
        </div>
        <div className="row d-flex icon-content icon-container delivery">
          {" "}
          <img className="icon" src={step3} />
          <div className="d-flex flex-column text-container delivery">
            <p className="font-weight-bold text-label">
              Orden <br />
              En camino
            </p>
          </div>
        </div>
        <div className="row d-flex icon-content icon-container delivery">
          {" "}
          <img className="icon" src={step4} />
          <div className="d-flex flex-column text-container delivery">
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
