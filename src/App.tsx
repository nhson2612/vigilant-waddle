import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import {Home} from "./pages/home/Home.tsx";
import {Login} from "./pages/login/Login.tsx";
import {Register} from "./pages/register/Register.tsx";

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Các route có NAV */}
                {/*Sử dụng Recoil trong mainLayout*/}
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                </Route>

                {/* Các route KHÔNG có NAV */}
                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;