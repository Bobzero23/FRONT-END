import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../../reduxToolkit/AuthSlice";

const Signin = ({ togglePanel }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
    console.log("login form: ", formData);
  };

  return (
    <div>
      <h1 className="text-lg font-bold text-center pb-8">LOGIN</h1>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <TextField
          fullWidth
          label="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        <div>
          <Button
            type="submit"
            fullWidth
            sx={{
              padding: "0.9rem",
              color: "white",
              backgroundImage: "linear-gradient(150deg, #c24dd0, #7a72fa)",
            }}
          >
            LOGIN
          </Button>
        </div>
      </form>
      <div className="mt-5 flex items-center gap-2 py-5 justify-center">
        <span>Don't have and account?</span>
        <Button onClick={togglePanel}>signup</Button>
      </div>
    </div>
  );
};

export default Signin;
