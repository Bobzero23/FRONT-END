import { Button, TextField } from "@mui/material";
import React from "react";

const Signup = () => {
  return (
    <div className="flex items-center justify-center h-screen px-3">
      <div>
        <h1 className="text-lg font-bold text-center pb-8">SIGN UP</h1>
        <form className="space-y-3">
          <TextField fullWidth name="username" label="username" />
          <TextField fullWidth name="email" label="email" type="email" />
          <TextField
            fullWidth
            name="password"
            label="password"
            type="password"
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
