import React from "react";
import { Input } from "@nextui-org/react";

const AuthInput = (props: any) => {
  const onChangeHandler = (value: any) => {
    props.value(value);
  };

  return (
    <>
      {props.types == "text" ? (
        <Input
          clearable
          className="inputField"
          size="lg"
          width="500px"
          placeholder={props.placeholder ? props.placeholder : ""}
          color="primary"
          contentLeft={props.icons ? props.icons : ""}
          aria-label="email field"
          onChange={(e)=>onChangeHandler(e.target.value)}
        />
      ) : (
        <Input.Password
          clearable
          className="inputField"
          size="lg"
          width="500px"
          placeholder={props.placeholder ? props.placeholder : ""}
          color="primary"
          contentLeft={props.icons ? props.icons : ""}
          aria-label="email field"
          onChange={(e)=>onChangeHandler(e.target.value)}
        />
      )}
    </>
  );
};

export default AuthInput;
