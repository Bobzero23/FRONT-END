import { Route, Routes, useNavigate } from "react-router-dom";
import Admin from "../admin/components/Admin";

const AdminRouters = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Admin />}></Route>
      </Routes>
    </div>
  );
};

export default AdminRouters;
