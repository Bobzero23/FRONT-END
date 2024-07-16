import { Button, TextField } from "@mui/material";
import { useState } from "react";
import Spinner from "../../components/Spinner";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../state/slice";

const Signin = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    console.log(formData);
    const { payload: response } = await dispatch(login(formData));
    console.log(response);
    setIsLoading(false);
    if (response.status === 200) {
      navigate("/");
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  };
  return (
    <>
      <Spinner isLoading={isLoading} />
      <div className="flex items-center justify-center h-screen">
        <div>
          <h1 className="text-lg font-bold text-center pb-8">SIGN IN</h1>
          <form className="space-y-3" onSubmit={handleSubmit}>
            <TextField
              onChange={handleChange}
              fullWidth
              name="email"
              label="email"
              type="email"
              value={formData.email}
            />
            <TextField
              onChange={handleChange}
              fullWidth
              name="password"
              label="password"
              type="password"
              value={formData.password}
            />
            <div>
              <Button fullWidth type="submit" variant="contained">
                SIGNIN
              </Button>
            </div>
          </form>
          <div>
            <span>Don't have an account? </span>
            <Button onClick={() => navigate("/signup")}>Sign Up </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
