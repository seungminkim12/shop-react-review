import React, { useState } from "react";

function LoginPage() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onChangeHandler = (event) => {
    const { target } = event;
    if (target.type == "email") {
      setEmail(target.value);
    } else {
      setPassword(target.value);
    }
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
      <form style={{ display: "flex", flexDirection: "column" }}>
        <label>Email</label>
        <input type="email" value={Email} onChange={onChangeHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onChangeHandler} />
        <button>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
