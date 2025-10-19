import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div className="min-h-screen bg-[#e2bfa2] flex items-center justify-center">
            <Outlet />
        </div>
    );
}
