import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './home.css'
import {useSignInWithEmailPassword} from "../../hooks/auth.tsx";
import {Button} from "../../components/button/Button.tsx";

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { mutate: signIn, isPending } = useSignInWithEmailPassword();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: logic xác thực email/password
        signIn({email,password});
    };

    return (
        <div className="app relative flex min-h-screen w-full flex-col items-center justify-center bg-[#e2bfa2] p-4">
            {/* Background SVG */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-20">
                <svg fill="none" height="400" viewBox="0 0 200 400" width="200" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M100 400C100 344.772 144.772 300 200 300V250C117.157 250 50 182.843 50 100H0C0 202.406 82.0253 284.432 100 400Z"
                        fill="#55775a"></path>
                    <path d="M50 100C50 44.7715 94.7715 0 150 0V50C122.386 50 100 72.3858 100 100H50Z"
                          fill="#55775a"></path>
                </svg>
            </div>

            {/* Form */}
            <div className="relative w-full max-w-md bg-white rounded-t-xl shadow-lg" style={{ borderRadius: "6rem 6rem 0 0" }}>
                <div className="px-8 py-12 sm:px-12">
                    <div className="flex flex-col items-center">
                        <div className="flex flex-wrap justify-center gap-3 p-4">
                            <p className="text-moss-green text-4xl font-bold leading-tight">Đăng nhập</p>
                        </div>
                        <form className="w-full mt-8 space-y-6" onSubmit={handleLogin}>
                            <label className="flex flex-col w-full">
                                <p className="text-moss-green text-base font-medium pb-2">Email</p>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Nhập email"
                                    className="w-full rounded-lg border border-gray-300 bg-white text-moss-green p-4 text-base focus:outline-none focus:ring-2 focus:ring-moss-green focus:border-moss-green h-14"
                                />
                            </label>
                            <label className="flex flex-col w-full">
                                <p className="text-moss-green text-base font-medium pb-2">Mật khẩu</p>
                                <div className="flex w-full items-stretch rounded-lg border border-gray-300">
                                    <input
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Nhập mật khẩu"
                                        type="password"
                                        className="w-full rounded-l-lg bg-white text-moss-green p-4 text-base focus:outline-none focus:ring-2 focus:ring-moss-green focus:border-moss-green h-14"
                                    />
                                    <div className="flex items-center justify-center rounded-r-lg bg-white border-l border-gray-300 text-gray-400 p-4">
                                        <span className="material-symbols-outlined">visibility</span>
                                    </div>
                                </div>
                            </label>
                            <Button type="submit" variant="primary" loading={isPending}>
                                Đăng nhập
                            </Button>
                        </form>

                        {/* Continue with Google */}
                        <p className="text-moss-green text-base font-normal leading-normal py-6 text-center w-full relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-1/3 before:h-px before:bg-gray-300 after:content-[''] after:absolute after:right-0 after:top-1/2 after:w-1/3 after:h-px after:bg-gray-300">hoặc</p>
                        <button
                            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white h-12 hover:bg-moss-green/10 text-base font-medium"
                            onClick={() => alert("Login with Google logic")}
                        >
                            <svg className="h-5 w-5" viewBox="0 0 533.5 544.3">
                                    <path fill="#4285F4" d="M533.5 278.4c0-18.7-1.6-36.8-4.7-54.4H272v102.9h146.9c-6.4 34.6-25.6 63.9-54.7 83.5v69.4h88.3c51.6-47.5 81.9-117.7 81.9-201.4z"/>
                                    <path fill="#34A853" d="M272 544.3c73.8 0 135.7-24.5 180.9-66.7l-88.3-69.4c-24.5 16.4-55.8 26-92.6 26-71.2 0-131.6-48-153.2-112.2H30.4v70.4c45.4 90.1 138.3 151.9 241.6 151.9z"/>
                                    <path fill="#FBBC05" d="M118.8 324.4c-5.4-16.4-8.5-33.9-8.5-51.9s3.1-35.5 8.5-51.9v-70.4H30.4c-20.9 41.7-32.9 88.5-32.9 142.3s12 100.6 32.9 142.3l88.4-70.4z"/>
                                    <path fill="#EA4335" d="M272 107.1c39.7 0 75.3 13.7 103.4 40.6l77.5-77.5C407.7 24.5 345.8 0 272 0 168.7 0 75.8 61.8 30.4 151.9l88.4 70.4c21.6-64.2 82-112.2 153.2-112.2z"/>
                            </svg>
                            <span className="px-2">Đăng nhập với Google</span>
                        </button>

                        {/* Chuyển trang sang đăng ký */}
                        <p className="text-moss-green text-base font-normal leading-normal py-6 text-center">
                            Chưa có tài khoản?{" "}
                            <span
                                className="font-medium text-moss-green hover:underline cursor-pointer"
                                onClick={() => navigate("/register")}
                            >
                Đăng ký
              </span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="text-center mt-12">
                <p className="text-moss-green text-sm font-light">© 2025 Syntax Share — Chúng tôi chia sẻ tri thức, kết nối đam mê.</p>
            </div>
        </div>
    );
};
