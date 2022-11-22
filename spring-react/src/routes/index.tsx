import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";

const RoutesApp = () => {
    return(
        <Routes>
            <Route path="login" element={<Login />} />
        </Routes>
    )
}

export default RoutesApp;