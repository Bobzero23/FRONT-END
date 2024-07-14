import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function ProtectedRoutes({ children }) {
  const token = localStorage.getItem("jwt");
  console.log(token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || token === "undefined") {
      navigate("/Signin");
    }
  }, [navigate, token]);
  return <div>{children}</div>;
}
