import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
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
    console.log("form data: ", formData);
  };

  return (
    <div className="flex items-center justify-center h-screen px-3">
      <div>
        <h1 className="text-lg font-bold text-center pb-8">SIGN UP</h1>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            name="username"
            label="username"
            value={formData.username}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            name="email"
            label="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            name="password"
            label="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          <div>
            <Button fullWidth type="submit" variant="contained">
              REGISTER
            </Button>
          </div>
        </form>
        <div>
          <span>Already have an account? </span>
          <Button>signin</Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
