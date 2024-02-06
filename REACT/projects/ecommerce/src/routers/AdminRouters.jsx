import { Route, Routes, useNavigate } from "react-router-dom";
import Admin from "../admin/Admin";

const AdminRouters = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Admin />}></Route>
      </Routes>
    </div>
  );
};

export default AdminRouters;
