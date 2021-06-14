import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../_actions/user_action";

function LandingPage(props) {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(logoutUser()).then((res) => {
      if (res.payload.success) {
        props.history.push("/login");
      } else {
        alert("로그인을 해주세요");
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
      <h2>시작 페이지</h2>
      <button onClick={onClickHandler}>로그아웃</button>
    </div>
  );
}

export default LandingPage;
