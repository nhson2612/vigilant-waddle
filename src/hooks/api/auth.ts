import axiosInstance from "../../libs/axios.ts";
import {LOGIN} from "./URLs.ts";

export interface LoginPayload {
    email: string;
    password: string;
}

export const loginRequest = async (payload: LoginPayload) => {
    const response = await axiosInstance.post(LOGIN, payload, { withCredentials: true });
    return response.data;
};