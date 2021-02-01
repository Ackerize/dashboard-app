import React, { useEffect, useState } from "react";
import './App.css';
import Auth from "./pages/Auth";
import Login from "./pages/Login";
import firebase from './firebase/firebase'
import 'firebase/auth';
import Swal from "sweetalert2";

export const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) => {
      if(response){
        if(response.uid === 'XGR2R7uy4nXn01kk7BNqTPPY3mT2'){
          setUser(response);
        }else{
          firebase.auth().signOut();
          Swal.fire({
            title: "¡Oops!",
            text:
              "No tienes acceso al dashboard",
            icon: "error"
          });
          setUser(null);
        }
      }else{
        setUser(null);
      }
    })
  }, []);

  return (
    <>
      {user ? (
        <Auth />
      ) : (
        <Login />
      )}
    </>
  );
};
