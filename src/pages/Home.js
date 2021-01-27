import React from "react";
import CardUI from "../components/CardUI";

import historyImage from '../assets/history.jpg';
import logoutImage from '../assets/logout.jpg'
import paintingImage from '../assets/painting.jpg'

const Home = () => {
  return (
    <>
    <h1 className="text-center text-uppercase mt-4 mb-3">Home</h1>
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
        <div className="col-md-6">
          <CardUI imgSrc={paintingImage} title="Cuadros" option="Cuadros" url="paintings" description="Visualiza, edita y borra los cuadros disponibles."/>
        </div>
        <div className="col-md-6">
          <CardUI
            imgSrc={historyImage}
            title="Historial de pedidos"
            option="Historial"
            url="history"
            description="Visualiza y edita todos los pedidos realizados."
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
