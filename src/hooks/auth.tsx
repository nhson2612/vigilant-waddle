import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import {type LoginPayload, loginRequest} from "./api/auth.ts";
import {setAccessToken} from "../libs/auth.ts";
import {useNavigate} from "react-router-dom";

export const useSignInWithEmailPassword = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: async (payload: LoginPayload) => {
            return await loginRequest(payload);
        },
        onSuccess: (data) => {
            setAccessToken(data.user.accessToken);
            toast.success('Đăng nhập thành công ✅');
            navigate("/");
        },
        onError: (error: any) => {
            toast.error(error.response?.data?.message || 'Đăng nhập thất bại ❌');
        },
    });
};
