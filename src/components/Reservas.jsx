import React,{ useState, } from "react";
import { auth } from "../firebase";
import { db } from "../firebase";

//sin terminar

function Reservas() {

    const [reserva, setReserva] = useState("");

    const aggReserva = (r) => {
        console.log("agregando reserva..");
        //agg a firestore por ahora es solo texto como p mostrar
    }

    return (
        <div>
            <form onSubmit={aggReserva}>
                <input
                    type="text"
                    placeholder="Agregar una reserva"
                    value={reserva}
                    onChange={(r) => setReserva(r.target.value)}
                ></input>
                <button type="submit">Agregar Reserva</button>
            </form>
        </div>
    );
  }
  
  export default Reservas;