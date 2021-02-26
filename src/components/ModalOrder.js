import React, { useState } from "react";
import Modal from "@trendmicro/react-modal";
import "@trendmicro/react-modal/dist/react-modal.css";
import SelectForm from "./SelectForm";
import { API_HOST, statuses } from "../utils/utils";
import axios from "axios";
import Swal from "sweetalert2";

const ModalOrder = ({ showModal, setShowModal, order }) => {
  const { id, status } = order;
  const text = `Actualizando orden #${id}`;
  const [newStatus, setNewStatus] = useState(null);

  const onSave = () => {
    const requestBody = {
      status: newStatus,
    };
    const idToken = localStorage.getItem('idToken');
    const authStr = 'Bearer '.concat(idToken);
    axios
      .put(`${API_HOST}/orders/status/${id}`, requestBody, {headers: {'authorization': authStr} })
      .then((res) => {
        console.log(res.data.message);
        setShowModal(false);
        if (res.data.message === "ERROR") {
          Swal.fire({
            title: "¡Oops! Algo ocurrió mal.",
            icon: "error",
            showConfirmButton: false,
            timer: 1200,
          });
        } else {
          Swal.fire({
            title: "¡Orden actualizada!.",
            icon: "success",
            showConfirmButton: false,
            timer: 1200,
          });
          setTimeout(() => {
            window.location.reload(false);
          }, 1500);
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "¡Oh no! Ocurrió un error.",
          icon: "error",
          showConfirmButton: false,
          timer: 1200,
        });
      });
  };

  return (
    <Modal show={showModal} onClose={() => setShowModal(false)}>
      <Modal.Header>
        <Modal.Title>{text}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <SelectForm
            options={statuses}
            placeholder="Selecciona el estado"
            noOptionsMessage="No se encontró ningún estado"
            onChange={(value) => setNewStatus(value.value)}
            name="status"
            label="Estado"
            error={false}
            errorMessage="Selecciona el estado del cuadro"
            className="custom-form-row"
            value={{ value: `${status}`, label: `${status}` }}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="cancel-button" onClick={() => setShowModal(false)}>
          Cancel
        </button>
        <button className="save-button" onClick={onSave}>
          Save
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalOrder;
