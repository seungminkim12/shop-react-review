import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";

//option -> null(아무나 출입 가능), true(로그인 유저만 가능), false(로그인 유저는 불가능)
export default function (SpecificComponent, option, adminRoute = null) {
  function AuthenticationCheck(props) {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).then((res) => {
        //로그인 하지 않은 상태
        if (!res.payload.isAuth) {
          if (option) {
            props.history.push("/login");
          }
        } else {
          //로그인 한 상태
          if (adminRoute && !res.payload.isAdmin) {
            props.history.push("/");
          } else {
            if (!option) {
              props.history.push("/");
            }
          }
        }
      });
    }, []);

    //props를 같이 return 해주면 하위 컴포넌트에서 사용 가능
    return <SpecificComponent {...props} />;
  }

  return AuthenticationCheck;
}
