"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/../public/ice-logo.svg";
import HomeBanner from "@/../public/home-banner.webp";
import AuthInput from "@/components/authInput";
import { FaEnvelope, FaFingerprint } from "react-icons/fa";
import { Checkbox, Spacer } from "@nextui-org/react";
import ButtonAuth from "@/components/buttonAuth";

const Page = () => {
  const [inputEmail, setInputEmail] = useState<string>();
  const [inputPassword, setInputPassword] = useState<string>();

  return (
    <body>
      <div className="loginMainPage">
        <div className="row">
          <div className="left">
            <div className="wrapper">
              <Image
                className="logo"
                src={HomeBanner}
                sizes="max"
                alt="IceLogo"
              />
              <p>
                Tingkatin <span>Promosi Brand</span> dengan Creator Pilihanmu!
              </p>
            </div>
          </div>
          <div className="right">
            <div className="wrapper">
              <div className="logoRight">
                <Image src={Logo} alt="logo" />
                <p>Helloo! Welcome Back</p>
              </div>
              <div className="colums">
                <div>
                  <AuthInput
                    types="text"
                    placeholder="Input Your Email Address"
                    icons={<FaEnvelope className={"icons"} />}
                    value={setInputEmail}
                  />
                </div>
                <Spacer y={1} />
                <div>
                  <AuthInput
                    types="password"
                    placeholder="Input Your Password"
                    icons={<FaFingerprint className={"icons"} />}
                    value={setInputPassword}
                  />
                </div>
              </div>
              <Spacer y={1} />

              <div className="afterInput">
                <Checkbox size="sm">
                  <div className="remember">Remember Me</div>
                </Checkbox>
                <span>Forget Password</span>
              </div>
              <Spacer y={1} />

              <p></p>
              <ButtonAuth className="buttonAuth" label="Sign In" />
              <div className="registerSpan">
                  <p>Dont have an account? <span>Create Account</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Page;
