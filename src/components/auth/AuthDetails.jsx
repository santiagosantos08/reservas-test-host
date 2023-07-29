import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState} from "react";
import { auth } from "../../firebase";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Home from "../Home";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("funciona bien el cerrar sesion - debug borrar");
      })
      .catch((error) => console.log(error));
  };

  //asigname className a los div para el css
  return (
    <div>
      {authUser ? (
        <>
          <p>{`Sesión iniciada como ${authUser.email}`}</p>
          <button onClick={userSignOut}>Cerrar Sesión</button>
          <br />
          <p>Resto de la pag que ya armaste, entra acá como un componente</p>
          <p> lo llamas con el tag de html directamente ej. "<homeScreen />" </p>
        </>
      ) : (
        <Home />
      )}
    </div>
  );
};

export default AuthDetails;