import React from "react";
import CardUI from "../components/CardUI";

import historyImage from "../assets/history.jpg";
import paintingImage from "../assets/painting.jpg";
import measurementsImage from '../assets/measurement.jpg'
import materialImage from '../assets/material.jpg';
import themeImage from '../assets/theme.jpg';
import deliveryImage from '../assets/delivery.jpg';

const Home = () => {
  return (
    <>
      <h1 className="text-center text-uppercase mt-4 mb-3">Home</h1>
      <div className="container-fluid d-flex justify-content-center">
        <div className="row row-home-cards">
          <div className="col-md-4">
            <CardUI
              imgSrc={paintingImage}
              title="Cuadros"
              option="Cuadros"
              url="paintings"
              description="Visualiza y edita los cuadros disponibles."
            />
          </div>
          <div className="col-md-4">
            <CardUI
              imgSrc={measurementsImage}
              title="Medidas"
              option="Medidas"
              url="measurements"
              description="Visualiza y edita las medidas disponibles."
            />
          </div>
          <div className="col-md-4">
            <CardUI
              imgSrc={materialImage}
              title="Materiales"
              option="Materiales"
              url="materials"
              description="Visualiza y edita los materiales."
            />
          </div>
        </div>
        <div className="row row-home-cards">
          <div className="col-md-4">
            <CardUI
              imgSrc={themeImage}
              title="Temas"
              option="Temas"
              url="themes"
              description="Visualiza y edita los temas disponibles."
            />
          </div>
          <div className="col-md-4">
            <CardUI
              imgSrc={deliveryImage}
              title="Zonas de entrega"
              option="Zonas"
              url="delivery-zones"
              description="Visualiza y edita las zonas disponibles."
            />
          </div>
          <div className="col-md-4">
            <CardUI
              imgSrc={historyImage}
              title="Historial de pedidos"
              option="Historial"
              url="history"
              description="Visualiza y edita los pedidos disponibles."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
