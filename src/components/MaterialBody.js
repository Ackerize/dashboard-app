import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { API_HOST } from "./../utils/utils";
import Swal from "sweetalert2";

const MaterialBody = ({ btnText }) => {
  const history = useHistory();
  let id,
    name,
    active = true,
    textBtn = btnText;
  const material = JSON.parse(localStorage.getItem("actualMaterial"));

  if (material) {
    id = material.id;
    name = material.name;
    active = material.active;
    textBtn = "Actualizar material";
  }

  const { register, handleSubmit, errors, setValue } = useForm();

  const onSubmitData = (data) => {
    console.log(data);
    if (material) {
      axios
        .put(`${API_HOST}/materials/${id}`, data)
        .then((res) => {
          console.log(res);
          console.log(res.data);
          Swal.fire({
            title: "¡Material actualizado!",
            text: "Has actualizado un material exitosamente",
            icon: "success",
            showConfirmButton: false,
            timer: 1400,
          });
          setTimeout(() => {
            history.push('/materials')
          }, 1500);
        })
        .catch((err) => {
          Swal.fire({
            title: "¡Oops!",
            text: "Ocurrió un error",
            icon: "error",
          });
          console.log(err);
        });
    } else {
      axios
        .post(`${API_HOST}/materials`,  data )
        .then((res) => {
          console.log(res);
          console.log(res.data);
          Swal.fire({
            title: "¡Material creado!",
            text: "Has creado un material exitosamente",
            icon: "success",
            showConfirmButton: false,
            timer: 1400,
          });
          setTimeout(() => {
            history.push('/materials')
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            title: "¡Oops!",
            text: "Ocurrió un error",
            icon: "error",
          });
        });
    }
  };

  const onCancel = () => {
    localStorage.removeItem("actualMaterial");
    history.push("/materials");
  };

  useEffect(() => {
    register({ name: "name" }, { required: true });
    if (active) {
      register({ name: "active" });
      setValue("active", active);
    } else {
      register({ name: "active" }, { required: true });
      setValue("active", true);
    }
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
                <div className="error">Ingresa el nombre del material</div>
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
};

export default MaterialBody;
