import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import { API_HOST } from "../utils/utils";

const ZoneBody = ({ btnText }) => {
  const history = useHistory();
  let id, name, active = true, delivery_cost, textBtn = btnText;

  const zone = JSON.parse(localStorage.getItem('actualZone'));

  if(zone){
    id = zone.id;
    name = zone.name;
    active = zone.active;
    delivery_cost = zone.delivery_cost;
  }

  const { register, handleSubmit, errors, setValue } = useForm();

  const onSubmitData = (data) => {
    const idToken = localStorage.getItem('idToken');
    const authStr = 'Bearer '.concat(idToken);
    if (zone) {
      axios
        .put(`${API_HOST}/delivery-zones/${id}`, data, {headers: {'authorization': authStr} })
        .then((res) => {
          const {error, message} = res.data;
          if(error) {
            Swal.fire({
              title: "¡Oops!",
              text: `${message}`,
              icon: "error",
            });
          }else{
            Swal.fire({
              title: "¡Zona de entrega actualizada!",
              text: "Has actualizado una zona de entrega exitosamente",
              icon: "success",
              showConfirmButton: false,
              timer: 1400,
            });
            setTimeout(() => {
              history.push('/delivery-zones')
            }, 1500);
          }
        })
        .catch((err) => {
          Swal.fire({
            title: "¡Oops!",
            text: "Ocurrió un error",
            icon: "error",
          });
        });
    } else {
      axios
        .post(`${API_HOST}/delivery-zones`,  data, {headers: {'authorization': authStr} })
        .then((res) => {
          const {error, message} = res.data;
          if(error){
            Swal.fire({
              title: "¡Oops!",
              text: `${message}`,
              icon: "error",
            });
          }else{
            Swal.fire({
              title: "¡Zona de entrega creado!",
              text: "Has creado una zona de entrega exitosamente",
              icon: "success",
              showConfirmButton: false,
              timer: 1400,
            });
            setTimeout(() => {
              history.push('/delivery-zones')
            }, 1500);
          }
        })
        .catch((err) => {
          Swal.fire({
            title: "¡Oops!",
            text: "Ocurrió un error",
            icon: "error",
          });
        });
    }
  }

  const onCancel = () => {
    history.push('/delivery-zones');
    localStorage.clear();
  }

  useEffect(() => {
    register({ name: "name" }, { required: true });
    register({ name: "delivery_cost" }, { required: true });
    if(active){
      register({ name: "active" });
      setValue('active', active);
    }
    else register({name: "active"}, {required: true});
  }, []);

  return (
    <div className="card-body card-body-painting">
      <form onSubmit={handleSubmit(onSubmitData)}>
        <div className="form-row">
          <div className="name">Nombre: </div>
          <div className="value">
            <div className="input-group">
              <input
                className="input--style-5"
                type="text"
                name="name"
                ref={register({
                  required: true,
                })}
                defaultValue={name}
              />
              {errors.name && (
                <div className="error">Ingresa el nombre de la zona</div>
              )}
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="name">Precio: </div>
          <div className="value">
            <div className="input-group">
              <input
                className="input--style-5"
                type="text"
                name="delivery_cost"
                ref={register({
                  required: true,
                })}
                defaultValue={delivery_cost}
              />
              {errors.delivery_cost && (
                <div className="error">Ingresa el precio</div>
              )}
            </div>
          </div>
        </div>
        <div className="form-row">
          <label className="label label--block">Disponible?</label>
          <div className="input-group mt-4">
            <div className="form-check form-check-inline custom-check">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
                onChange={() => setValue("active", true)}
                defaultChecked={active === false ? false : true}
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Sí
              </label>
            </div>
            <div
              className="form-check form-check-inline custom-check"
              id="no-check"
            >
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
                onChange={() => setValue("active", false)}
                defaultChecked={!active}
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                No
              </label>
            </div>
          </div>
        </div>
        <div className="btn-custom-container" id="container-btn">
          <button className="btn btn--radius-2" type="submit" id="btn-submit">
            {textBtn}
          </button>
          <button
            type="button"
            className="btn btn--radius-2 btn-cancel"
            id="btn-cancel"
            onClick={onCancel}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default ZoneBody
