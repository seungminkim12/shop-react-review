import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";

function LoginPage(props) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeHandler = (event) => {
    const { target } = event;
    if (target.type === "email") {
      setEmail(target.value);
    } else {
      setPassword(target.value);
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      email,
      password,
    };

    dispatch(loginUser(body)).then((res) => {
      if (res.payload.loginSuccess) {
        props.history.push("/");
      } else {
        alert("Error");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={email} onChange={onChangeHandler} />
        <label>Password</label>
        <input type="password" value={password} onChange={onChangeHandler} />

        <br />
        <button>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
