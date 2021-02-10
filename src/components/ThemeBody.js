import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { storage } from "../firebase/firebase";
import Upload from "./Upload";
import axios from "axios";
import { API_HOST } from "./../utils/utils";
import Swal from "sweetalert2";

const ThemeBody = ({ btnText }) => {
  const history = useHistory();
  let id,
    name,
    active = true,
    image_url,
    textBtn = btnText;
  const [url, setUrl] = useState(null);

  const theme = JSON.parse(localStorage.getItem("actualTheme"));
  console.log(theme);

  if (theme) {
    id = theme.id;
    name = theme.name;
    active = theme.active;
    image_url = theme.image_url;
    textBtn = "Actualizar tema";
  }

  const { register, handleSubmit, errors, setValue } = useForm();

  const onSubmitData = (data) => {
    const idToken = localStorage.getItem('idToken');
    const authStr = 'Bearer '.concat(idToken);
    if (theme) {
      axios
        .put(`${API_HOST}/themes/${id}`, data, {headers: {'authorization': authStr} })
        .then((res) => {
          const { error, message } = res.data;
          if (error) {
            Swal.fire({
              title: "¡Oops!",
              text: `${message}`,
              icon: "error",
            });
          } else {
            Swal.fire({
              title: "¡Tema actualizado!",
              text: "Has actualizado un tema exitosamente",
              icon: "success",
              showConfirmButton: false,
              timer: 1400,
            });
            setTimeout(() => {
              history.push("/themes");
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
        .post(`${API_HOST}/themes`, data, {headers: {'authorization': authStr} })
        .then((res) => {
          const { error, message } = res.data;
          if (error) {
            Swal.fire({
              title: "¡Oops!",
              text: `${message}`,
              icon: "error",
            });
          } else {
            Swal.fire({
              title: "¡Tema creado!",
              text: "Has creado un tema exitosamente",
              icon: "success",
              showConfirmButton: false,
              timer: 1400,
            });
            setTimeout(() => {
              history.push("/themes");
            }, 1500);
          }
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
    if (url) {
      storage
        .ref("/")
        .child(url)
        .delete()
        .then(() => {
          localStorage.removeItem("actualTheme");
          history.push("/themes");
        })
        .catch(() => console.log("Error"));
    } else {
      localStorage.removeItem("actualTheme");
      history.push("/themes");
    }
  };

  useEffect(() => {
    register({ name: "name" }, { required: true });
    if (image_url) {
      register({ name: "image_url" });
      setValue("image_url", image_url);
    } else {
      register({ name: "image_url" }, { required: true });
    }
    if (active) {
      register({ name: "active" });
      setValue("active", active);
    } else register({ name: "active" }, { required: true });
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
                <div className="error">Ingresa el nombre del tema</div>
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
        <div className="form-row">
          <div className="name">Foto</div>
          <div className="value">
            <Upload
              setValue={setValue}
              setUrlImg={setUrl}
              error={errors.image_url}
              image_url={image_url}
            />
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

export default ThemeBody;
