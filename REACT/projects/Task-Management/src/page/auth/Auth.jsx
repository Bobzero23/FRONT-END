import React, { useState } from "react";
import "./Auth.css";

const Auth = () => {
  const [isRegister, setIsRegister] = useState(true);

  const togglePanel = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="flex justify-center h-screen items-center overflow-hidden">
      <div className="box lg:max-w-4xl">
        <div className={`cover ${isRegister ? "rotete-active" : ""}`}>
          <div className="front">
            <img
              src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
              alt=""
            />
            <div className="text">
              <span className="text-1">
                Success is built upon well-organized tasks
              </span>
              <span className="text-2 text-xs">Let's get connected</span>
            </div>
          </div>
          <div className="back">
            <img
              src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nJTIwbWFufGVufDB8fDB8fHww"
              alt=""
            />
          </div>
        </div>
        <div className="forms h-full">
          <div className="form-content h-full">
            <div className="login-form">signin form</div>
            <div className="signup-form">signup form</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
