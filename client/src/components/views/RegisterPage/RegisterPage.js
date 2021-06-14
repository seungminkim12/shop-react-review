import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_action";

function RegisterPage(props) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onChangeHandler = (event) => {
    const { target } = event;
    // if (target.name === "email") {
    //   setEmail(target.value);
    // } else if (target.name === "password") {
    //   setPassword(target.value);
    // } else if (target.name === "name") {
    //   setName(target.value);
    // } else {
    //   setConfirmPasswrod(target.value);
    // }
    switch (target.name) {
      case "email":
        setEmail(target.value);
        break;
      case "name":
        setName(target.value);
        break;
      case "password":
        setPassword(target.value);
        break;
      default:
        setConfirmPassword(target.value);
        break;
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return alert("비밀번호를 확인하세요");
    }

    let body = {
      email,
      password,
      name,
      confirmPassword,
    };

    dispatch(registerUser(body)).then((res) => {
      if (res.payload.success) {
        props.history.push("/login");
      } else {
        alert("Falied to sign up");
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
        <input
          type="email"
          value={email}
          name="email"
          onChange={onChangeHandler}
        />

        <label>Name</label>
        <input
          type="text"
          value={name}
          name="name"
          onChange={onChangeHandler}
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          name="password"
          onChange={onChangeHandler}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChangeHandler}
        />

        <br />
        <button>register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
