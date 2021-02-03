import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { getAllThemes } from "../api/themes";
import { getAllMaterials } from "../api/materials";
import {
  API_HOST,
  filterArray,
  filterMeasurements,
  filterObject,
  formatArray,
  formatArrayMeasurements,
  onValidatePairs,
} from "../utils/utils";
import SelectForm from "./SelectForm";
import Upload from "./Upload";
import { getAllMeasurements } from "../api/measurements";
import { storage } from "../firebase/firebase";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const CardBody = ({ btnText }) => {
  const [themes, setThemes] = useState(null);
  const [materials, setMaterials] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState([]);
  const [selectedMeasurement, setSelectedMeasurement] = useState([]);
  const [measurementsOptions, setMeasurementsOptions] = useState([]);
  const [urlImg, setUrlImg] = useState(null);
  const [measurements, setMeasurements] = useState([]);

  const history = useHistory();

  const { register, handleSubmit, errors, setValue } = useForm();

  const onSubmitData = (data) => {
    const flag = onValidatePairs(
      selectedMaterial,
      selectedMeasurement,
      measurements
    );

    if (flag) {
      axios.post(`${API_HOST}/paintings`, data).then((response) => {
        const { error, message } = response.data;
        if (error) {
          Swal.fire({
            title: "¡Oops!",
            text: `${message}`,
            icon: "error",
          });
        } else {
          Swal.fire({
            title: "¡Cuadro creado!.",
            text: "Has creado un cuadro exitosamente",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(() => {
            history.push("/paintings");
          }, 1500);
        }
      });
    } else {
      Swal.fire({
        title: "¡Oops!",
        text:
          "Revisa que tus medidas coincidan con los materiales seleccionados",
        icon: "warning",
      });
    }
  };

  useEffect(() => {
    register({ name: "materials" }, { required: true });
    register({ name: "measurements" }, { required: true });
    register({ name: "theme_id" }, { required: true });
    register({ name: "active" }, { required: true });
    register({ name: "image_url" }, { required: true });
    setValue("active", true);
  }, []);

  useEffect(() => {
    getAllThemes().then((response) => {
      setThemes(formatArray(response.themes));
    });
  }, []);

  useEffect(() => {
    getAllMaterials().then((response) => {
      setMaterials(formatArray(response.materials));
    });
  }, []);

  useEffect(() => {
    getAllMeasurements().then((response) => {
      setMeasurements(response);
      let resultArray = [];
      for (var i = 0; i < selectedMaterial.length; i++) {
        let formatMeasurements = formatArrayMeasurements(
          filterMeasurements(response, selectedMaterial[i]),
          materials
        );
        resultArray = resultArray.concat(formatMeasurements);
      }
      setMeasurementsOptions(resultArray);
    });
  }, [selectedMaterial]);

  const handleChange = (selectedOption, type) => {
    if (type === "materials") {
      const arrayIds = filterArray(selectedOption);
      setSelectedMaterial(arrayIds);
      setValue("materials", arrayIds);
    } else if (type === "measurements") {
      const arrayIds = filterArray(selectedOption);
      setSelectedMeasurement(arrayIds);
      setValue("measurements", arrayIds);
    } else {
      setValue("theme_id", filterObject(selectedOption));
    }
  };

  const onCancel = () => {
    if (urlImg) {
      storage
        .ref("/")
        .child(urlImg)
        .delete()
        .then(() => history.push("/paintings"))
        .catch(() => console.log("Error"));
    } else {
      history.push("/paintings");
    }
  };

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
              />
              {errors.name && (
                <div className="error">Ingresa el nombre del cuadro</div>
              )}
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="name">Descripción: </div>
          <div className="value">
            <div className="input-group">
              <input
                className="input--style-5"
                type="text"
                name="description"
                ref={register({ required: true })}
              />
              {errors.description && (
                <div className="error">Ingresa la descripción del cuadro</div>
              )}
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="name">Existencias: </div>
          <div className="value">
            <div className="input-group">
              <input
                className="input--style-5"
                type="number"
                step="1"
                min="0"
                name="stock"
                ref={register({ required: true, valueAsNumber: true })}
              />
              {errors.stock && (
                <div className="error">Ingresa el stock del cuadro</div>
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
                defaultChecked
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
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                No
              </label>
            </div>
          </div>
        </div>
        <SelectForm
          options={materials}
          placeholder="Selecciona el material"
          noOptionsMessage="No se encontró ningún material"
          onChange={handleChange}
          name="materials"
          label="Material"
          error={errors.materials}
          errorMessage="Selecciona el material del cuadro"
          isMulti={true}
        />

        <SelectForm
          options={measurementsOptions}
          placeholder="Selecciona las medidas"
          noOptionsMessage="No se encontró ninguna dimensión"
          onChange={handleChange}
          name="measurements"
          label="Medidas"
          error={errors.measurements}
          errorMessage="Selecciona las medidas del cuadro"
          isMulti={true}
        />

        <SelectForm
          options={themes}
          placeholder="Selecciona los temas"
          noOptionsMessage="No se encontró ningún tema"
          onChange={handleChange}
          name="theme_id"
          label="Tema"
          error={errors.theme_id}
          errorMessage="Selecciona el tema del cuadro"
          isMulti={false}
        />

        <div className="form-row">
          <div className="name">Foto</div>
          <div className="value">
            <Upload
              setValue={setValue}
              setUrlImg={setUrlImg}
              error={errors.image_url}
            />
          </div>
        </div>
        <div className="btn-custom-container" id="container-btn">
          <button className="btn btn--radius-2" type="submit" id="btn-submit">
            {btnText}
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

export default CardBody;
