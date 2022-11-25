import { Route, Routes, Navigate } from "react-router-dom";
import EnterLogin from "../pages/enterLogin";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

const RoutesApp = () => {
    return(
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="enterLogin" element={<EnterLogin />} />
            <Route path="enterHome" element={<Home />} />
            <Route path="*" element={<Navigate to={'/login'} />} />
        </Routes>
    )
}

export default RoutesApp;