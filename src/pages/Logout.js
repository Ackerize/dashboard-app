import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../firebase/firebase";
import Swal from "sweetalert2";

const Logout = () => {
  const history = useHistory();
  useEffect(() => {
    firebase.auth().signOut();
    Swal.fire({
      title: "¡Adiós!",
      text: 'Has cerrado sesión exitosamente',
      icon: "success",
      showConfirmButton: false,
      timer: 1500
    });
    localStorage.clear();
    history.push("/");
  }, []);
  return <></>;
};

export default Logout;
