import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { signUp } from "../../services/apiServices";
import Spinner from "../../components/Spinner";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
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
    const response = await signUp(formData);
    setIsLoading(false);
    console.log(response.data.status);
    if (response.data.status === 201) {
      toast.success(response.data.message);
      navigate("/");
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <>
      <Spinner isLoading={isLoading} />
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
            <Button onClick={() => navigate("/signin")}>signin</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
