import { Button, TextField } from "@mui/material";
import React from "react";

const Signin = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <h1 className="text-lg font-bold text-center pb-8">SIGN IN</h1>
        <form className="space-y-3">
          <TextField fullWidth name="username" label="username or email" />
          <TextField
            fullWidth
            name="password"
            label="password"
            type="password"
          />
          <div>
            <Button fullWidth type="submit" variant="contained">
              SIGNIN
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
