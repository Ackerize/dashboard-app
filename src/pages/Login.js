import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import firebase from '../firebase/firebase'

const Login = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmitData = (data) => {
    firebase.auth().signInWithEmailAndPassword(data.email, data.password)
    .then((response) => {
      localStorage.setItem('loginSession', true);
      Swal.fire({
        title: "¡Bienvenido!",
        text: 'Has iniciado sesión exitosamente',
        icon: "success",
        showConfirmButton: false,
        timer: 1500
      });
    })
    .catch(() => {
      localStorage.setItem('loginSession', false);
      Swal.fire({
        title: "¡Oops!",
        text:
          "Credenciales incorrectas",
        icon: "error"
      });
    })
  };
  return (
    <>
      <div className="page-wrapper p-t-45 p-b-50">
        <div className="wrapper wrapper--w790">
          <div className="card card-5 card-painting">
            <div className="card-heading heading-login">
              <h2 className="title">Iniciar sesión</h2>
            </div>
            <div className="card-body card-body-painting">
              <form onSubmit={handleSubmit(onSubmitData)}>
                <div className="form-row">
                  <div className="name">Email: </div>
                  <div className="value">
                    <div className="input-group">
                      <input
                        className="input--style-5"
                        type="email"
                        name="email"
                        ref={register({
                          required: true,
                        })}
                      />
                      {errors.email && (
                        <div className="error">Ingresa el email</div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="name">Contraseña: </div>
                  <div className="value">
                    <div className="input-group">
                      <input
                        className="input--style-5"
                        type="password"
                        name="password"
                        ref={register({
                          required: true,
                        })}
                      />
                      {errors.password && (
                        <div className="error">Ingresa la contraseña</div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="btn-custom-container" id="container-btn">
                  <button
                    className="btn btn--radius-2"
                    type="submit"
                    id="btn-submit"
                  >
                    Iniciar sesión
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
