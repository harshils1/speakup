import "./Login.css";
import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import {useStateValue} from "../StateProvider";
import {actionTypes} from "../reducer";

function Login() {

  const [{}, dispatch] = useStateValue();
  
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        dispatch({
          type: actionTypes.set_user,
          user: result.user
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login_container">
        <img alt="logo" />

        <div className="login_text">
          <h1>Sign In</h1>
        </div>

        <Button type="submit" onClick={signIn}>
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
