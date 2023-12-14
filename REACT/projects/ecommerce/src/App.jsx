import { Route, Routes } from "react-router-dom";
import "./App.css";
import CustomRouters from "./routers/CustomRouters";
import AdminRouters from "./routers/AdminRouters";

function App() {
  return (
    <>
      <div>
        <div className="">
          <Routes>
            <Route path="/*" element={<CustomRouters />}></Route>
            <Route path="/admin/*" element={<AdminRouters />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
