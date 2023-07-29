import React,{ useState, } from "react";
import { firestore } from "../firebase";

function Reservas() {

    const [reserva, setReserva] = useState("");

    const aggReserva = (r) => {
        //agg a firestore por ahora es solo texto como p mostrar
    }

    return (
        <div>
            <form onSubmit={aggReserva}>
                <input
                    type="text"
                    placeholder="Agregar una reserva"
                    value={reserva}
                    onChange={(r) => aggReserva(r.target.value)}
                ></input>
                <button type="submit">Agregar Reserva</button>
            </form>
        </div>
    );
  }
  
  export default Reservas;