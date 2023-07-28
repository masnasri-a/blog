"use client";

import React from "react";
import { Button, Spacer } from "@nextui-org/react";

const ButtonAuth = (props:any) => {
  return (
    <div>
    <Spacer y={1} />
      <button className="buttonAuth">{props.label}</button>
    </div>
  );
};

export default ButtonAuth;
