import { useNavigate } from "react-router-dom";

export const Register = () => {
    const navigate = useNavigate();
    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center bg-background-light  group/design-root overflow-x-hidden p-4">
            <div className="absolute top-4 left-4 text-[#3db319] opacity-20 -rotate-12">
                <span className="material-symbols-outlined !text-9xl">potted_plant</span>
            </div>
            <div className="absolute bottom-4 right-4 text-[#3db319] opacity-20 rotate-12">
                <span className="material-symbols-outlined !text-9xl">spa</span>
            </div>
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-5 space-y-6">
                <div className="text-center">
                    <p className="text-3xl font-black text-[#3db319] leading-tight">Grow together with the community 🌿</p>
                    <p className="text-[#6c8764] text-base font-normal mt-2">Create your account to get started.</p>
                </div>
                <form className="space-y-4">
                    <div>
                        <label className="flex flex-col">
                            <p className="text-[#3db319] text-base font-medium pb-2">Name</p>
                            <input
                                className="w-full rounded-lg border border-[#dee5dc]  bg-white text-[#131711]  p-4 text-base focus:outline-none focus:ring-2 focus:ring-[#3db319]/50 focus:border-[#3db319] h-12 transition-all duration-300 placeholder-[#6c8764] "
                                placeholder="Enter your name"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="flex flex-col">
                            <p className="text-[#3db319] text-base font-medium pb-2">Email</p>
                            <input
                                className="w-full rounded-lg border border-[#dee5dc]  bg-white text-[#131711]  p-4 text-base focus:outline-none focus:ring-2 focus:ring-[#3db319]/50 focus:border-[#3db319] h-12 transition-all duration-300 placeholder-[#6c8764] "
                                placeholder="Enter your email"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="flex flex-col">
                            <p className="text-[#3db319] text-base font-medium pb-2">Password</p>
                            <div className="flex w-full items-stretch rounded-lg border border-[#dee5dc] ">
                                <input
                                    className="h-full w-full rounded-l-lg bg-white text-[#131711]  p-4 text-base focus:outline-none focus:ring-2 focus:ring-[#3db319]/50 focus:border-[#3db319] h-12 transition-all duration-300 placeholder-[#6c8764] "
                                    placeholder="Enter your password"
                                    type="password"
                                />
                                <div className="flex items-center justify-center rounded-r-lg bg-white border-l border-[#dee5dc]  text-[#6c8764]  p-4">
                                    <span className="material-symbols-outlined">visibility</span>
                                </div>
                            </div>
                        </label>
                    </div>
                    <button
                        className="w-full h-12 rounded-lg bg-[#3db319] text-white font-bold text-base hover:bg-[#3db319]/90 transition-colors duration-300 cursor-pointer"
                        type="submit"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="flex items-center">
                    <hr className="flex-grow border-t border-[#dee5dc] "/>
                    <span className="px-4 text-[#6c8764]  text-sm">or continue with</span>
                    <hr className="flex-grow border-t border-[#dee5dc] "/>
                </div>
                <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#dee5dc] bg-white h-12 hover:bg-gray-50 transition-colors duration-300 cursor-pointer">
                    <svg className="h-5 w-5" viewBox="0 0 533.5 544.3">
                        <path fill="#4285F4" d="M533.5 278.4c0-18.7-1.6-36.8-4.7-54.4H272v102.9h146.9c-6.4 34.6-25.6 63.9-54.7 83.5v69.4h88.3c51.6-47.5 81.9-117.7 81.9-201.4z"/>
                        <path fill="#34A853" d="M272 544.3c73.8 0 135.7-24.5 180.9-66.7l-88.3-69.4c-24.5 16.4-55.8 26-92.6 26-71.2 0-131.6-48-153.2-112.2H30.4v70.4c45.4 90.1 138.3 151.9 241.6 151.9z"/>
                        <path fill="#FBBC05" d="M118.8 324.4c-5.4-16.4-8.5-33.9-8.5-51.9s3.1-35.5 8.5-51.9v-70.4H30.4c-20.9 41.7-32.9 88.5-32.9 142.3s12 100.6 32.9 142.3l88.4-70.4z"/>
                        <path fill="#EA4335" d="M272 107.1c39.7 0 75.3 13.7 103.4 40.6l77.5-77.5C407.7 24.5 345.8 0 272 0 168.7 0 75.8 61.8 30.4 151.9l88.4 70.4c21.6-64.2 82-112.2 153.2-112.2z"/>
                    </svg>
                    <span className="text-[#3db319] text-base font-medium">Sign up with Google</span>
                </button>
                <p className="text-center text-[#6c8764]  text-base cursor-pointer">
                    Already have an account? <a className="font-medium text-[#3db319] hover:underline" onClick={() => navigate("/login")}>Sign in</a>
                </p>
            </div>
        </div>
    );
}