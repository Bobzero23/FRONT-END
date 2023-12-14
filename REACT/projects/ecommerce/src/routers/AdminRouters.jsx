import { Route, Routes } from "react-router-dom";
import Admin from "../admin/component/Admin";

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
