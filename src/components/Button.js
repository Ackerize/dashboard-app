import React from "react";
import * as BiIcon from "react-icons/bi";
import * as TiIcon from "react-icons/ti";
import * as AiIcon from "react-icons/ai";
import * as IoIcon from "react-icons/io";
import { useHistory } from "react-router-dom";
import "./Navbar.css";
import { submit } from "./ConfirmModal";
import { dataDelete } from "../utils/utils";

const Button = ({ type, onClick }) => {
  const history = useHistory();
  const handleClick = () => history.push('/paintings/form');

  switch (type) {
    case "edit":
      return (
        <button type="button" className="btn btn-container" onClick={onClick}>
          <BiIcon.BiEditAlt style={{ marginTop: 5, fontSize: 22 }} />
          <p className="btn-text">Editar</p>
        </button>
      );
    case "delete":
      return (
        <button type="button" className="btn btn-container btn-delete" onClick={() => submit(dataDelete)}>
          <TiIcon.TiDeleteOutline style={{ marginTop: 5, fontSize: 22 }} />
          <p className="btn-text">Borrar</p>
        </button>
      );
    case "add":
      return (
        <button type="button" className="btn btn-add" onClick={handleClick}>
          <BiIcon.BiImageAdd style={{ marginTop: 5, fontSize: 22 }} />
          <p className="btn-text">Agregar</p>
        </button>
      );
    case "view":
      return (
        <button type="button" className="btn btn-container btn-view" onClick={onClick}>
          <AiIcon.AiOutlineEye style={{ marginTop: 5, fontSize: 22 }} />
          <p className="btn-text">Ver</p>
        </button>
      )
    case "back":
      return (
        <button type="button" className="btn btn-container btn-back" onClick={onClick}>
          <IoIcon.IoMdArrowBack style={{ marginTop: 5, fontSize: 22 }} />
          <p className="btn-text">Regresar</p>
        </button>
      )
    default:
      return null;
  }
};

export default Button;
