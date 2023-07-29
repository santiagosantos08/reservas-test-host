import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    //esto es lo que tenes que esconder

    // ============!!!!!!!!!!!!!!!!!!====================
    // lo mas facil es agregar este archivo al .gitignore
    // ( pero seguro te rompe el hosting en esa pagina )

  apiKey: "AIzaSyANiN8PTkZb7RRUqYYWLoncFO-8ZC0rdwk",
  authDomain: "cecreservas-1237e.firebaseapp.com",
  projectId: "cecreservas-1237e",
  storageBucket: "cecreservas-1237e.appspot.com",
  messagingSenderId: "852907542670",
  appId: "1:852907542670:web:3c4112a1038c4025c7a1df",
  measurementId: "G-PKFHWZKG09"
};

const app = initializeApp(firebaseConfig);
//export default del autenticado
export const firestore = getFirestore(app);
export const auth = getAuth(app);
