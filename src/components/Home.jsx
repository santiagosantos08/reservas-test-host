import React from "react";
import AuthDetails from './auth/AuthDetails';
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";

function Home() {
    return (
        <div>
            <SignIn />
            <SignUp />
        </div>

    );
  }
  
  export default Home;