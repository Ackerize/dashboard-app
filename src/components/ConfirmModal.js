import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import "./Navbar.css";

export const submit = ({
  title,
  subtitle,
  btnYesText,
  btnNoText,
  btnYesId,
  btnNoId,
  onClick
}) => {
  confirmAlert({
    customUI: ({ onClose }) => (
      <div className="react-confirm-alert-body">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div
          className="react-confirm-alert-button-group"
          id="btn-modal-container"
        >
          <button
            onClick={() => {
              onClose();
            }}
            id={btnNoId}
          >
            {btnNoText}
          </button>
          <button
            onClick={() => {
              onClick();
              onClose();
            }}
            id={btnYesId}
          >
            {btnYesText}
          </button>
        </div>
      </div>
    ),
    closeOnEscape: true,
    closeOnClickOutside: true,
  });
};
