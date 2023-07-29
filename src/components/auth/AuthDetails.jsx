import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState} from "react";
import { auth } from "../../firebase";
import Home from "../Home";

/*
Acá arriba va codigo de javascript de lo que quieras o necesites para que funcione la pagina
ej: acá hay una funcion para cerrar sesion y otra que te indica si estas logueado o no
(y que usuario sos en caso de estarlo. ese 'user' es el ID de firebase, despues cuando quieras 
armar la parte de reservar las canchas, etc vas a tener que pasar la logica de compararlo en la sesion a algo que lo compare en la db

en la pag de firebase tenes que activar las funcionalidades que quieras y vas importando lo que necesites, ej acá solo importo el modulo de auth
la base de datos "default" es la firestore.
despues tienen otro de realtime, etc, dependiendo cual uses es como le guardas info, eso vas a tener que ver la documentacion del que sea que elijas (o si usas supra lo mismo)

supongo que con la firestore db alcanza para esto ya que no hay mucho trafico pero en cualquier caso tienen tambien la 'realtime database' (supongo será mas enrosque y/o de pago)

trabaja con documentos, depende de como la quieras estructurar vas a tener las reservas asignadas al usuario o a la cancha

No cambia mucho de una planilla de excel

un ejemplo, dependiendo de como lo hagas puede quedar algo que nada que ver con esto

await setDoc(nombreDoc(nombreDb, "canchas", "cancha1"), {
  nombre: "user.getName()",
  horario: horario (no se como lo sacas del calendario ese que importaste),
  alquilaPaletas: true
});

https://firebase.google.com/docs/firestore/manage-data/add-data?hl=es-419

abajo en el return es donde escribis el html de toda la vida, lo que tiene de bueno (pero puede ser confuso) React es que te deja mezclarlo bastante

la mayoria de los return estan escritos como

return {condicion ? (op1;) : (op2;)} es un operador ternario, es lo mismo que escribirlo asi

if(condicion){
  return op1;
} else{
  return op2;
}

pero corre mas rapido por temas de como está implementado, en esto que van a entrar como mucho 20 personas al dia escribilo como te quede mas comodo

si lo haces con 'if' siempre intenta dejar un caso base fuera de los if por cualquier cosa que pueda pasar, que no retorne un numero vacio de algun lugar de memoria que no sabes que tiene almacenado

ej lo de arriba sería mejor:

if(condicion) return op1;
return op2; -> por defecto
*/

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

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
