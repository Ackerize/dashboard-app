import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { getAllThemes } from "../api/themes";
import { getAllMaterials } from '../api/materials';
import { filterObject, formatArray } from "../utils/utils";
import { submit } from "./ConfirmModal";
import SelectForm from "./SelectForm";
import Upload from "./Upload";

const CardBody = ({ btnText }) => {
  const [themes, setThemes] = useState(null);
  const [materials, setMaterials] = useState(null);
  const [dimensions, setDimensions] = useState({
    ancho: 0,
    alto: 0,
  });
  const [customErrors, setCustomErrors] = useState({
    ancho: false,
    alto: false,
    material: false,
    theme: false,
  });
  const { register, handleSubmit, errors, setValue } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    register({ name: "materialId" }, { required: true });
    register({ name: "measurements" }, { required: true });
    register({ name: "themeId" }, { required: true });
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

  const onChangeDimensions = (e) => {
    const { name, value } = e.target;
    setDimensions({
      ...dimensions,
      [name]: value,
    });
    const { ancho, alto } = dimensions;
    if (ancho !== "") {
      setCustomErrors({ ...customErrors, ancho: false });
    } else {
      setCustomErrors({ ...customErrors, ancho: true });
    }
    if (alto !== "") {
      setCustomErrors({ ...customErrors, alto: false });
    } else {
      setCustomErrors({ ...customErrors, alto: true });
    }
    if (ancho !== "" && alto !== "") {
      setValue("measurements", `${ancho}x${alto}`);
    }
  };

  const handleChange = (selectedOption, type) => {
    if (type === "materialId") {
      setValue("materialId", filterObject(selectedOption));
      setCustomErrors({ ...customErrors, material: false });
    } else {
      setValue("themeId", filterObject(selectedOption));
      setCustomErrors({ ...customErrors, theme: false });
    }
  };

  return (
    <div className="card-body">
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <div className="name">Precio: </div>
          <div className="value">
            <div className="input-group">
              <input
                className="input--style-5"
                type="number"
                step="any"
                min="0"
                name="price"
                ref={register({ required: true, valueAsNumber: true })}
              />
              {errors.price && (
                <div className="error">Ingresa el precio del cuadro</div>
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
                <div className="error">Ingresa el precio del cuadro</div>
              )}
            </div>
          </div>
        </div>
        <div className="form-row m-b-55">
          <div className="name">Dimensiones</div>
          <div className="value">
            <div className="row row-space">
              <div className="col-2">
                <div className="input-group-desc">
                  <input
                    className="input--style-5"
                    type="text"
                    onChange={onChangeDimensions}
                    name="ancho"
                  />
                  <label className="label--desc">ancho</label>
                  {customErrors.ancho && (
                    <div className="error-custom">
                      Ingresa el ancho del cuadro
                    </div>
                  )}
                </div>
              </div>
              <div className="col-2">
                <div className="input-group-desc">
                  <input
                    className="input--style-5"
                    type="text"
                    onChange={onChangeDimensions}
                    name="alto"
                  />
                  <label className="label--desc">altura</label>
                  {customErrors.alto && (
                    <div className="error-custom">
                      Ingresa la altura del cuadro
                    </div>
                  )}
                </div>
              </div>
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
          name="materialId"
          label="Material"
          error={customErrors.material}
          errorMessage='Selecciona el material del cuadro'
        />
        
        <SelectForm
          options={themes}
          placeholder="Selecciona los temas"
          noOptionsMessage="No se encontró ningún tema"
          onChange={handleChange}
          name="themeId"
          label="Tema"
          error={customErrors.theme}
          errorMessage='Selecciona el tema del cuadro'
        />
        <div className="form-row">
          <div className="name">Foto</div>
          <div className="value">
            <Upload setValue={setValue} />
          </div>
        </div>
        <div className="btn-custom-container" id="container-btn">
          <button
            className="btn btn--radius-2"
            type="submit"
            id="btn-submit"
          >
            {btnText}
          </button>
          <button
            className="btn btn--radius-2 btn-cancel"
            id="btn-cancel"
            onClick={submit}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CardBody;
