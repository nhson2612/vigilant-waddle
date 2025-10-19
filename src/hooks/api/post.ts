import axiosInstance from "../../libs/axios.ts";
import {CREATE_POST} from "./URLs.ts";


export interface CreatePostPayload {
    title: string;
    content: string;
    code: string;
}

export interface CreatePostResponse {
    id: string;
    title: string;
    content: string;
    code: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    previewImage: string;
    fullCodeImage: string;
}

export const createPostRequest = async (
    payload: CreatePostPayload
): Promise<CreatePostResponse> => {
    const response = await axiosInstance.post<CreatePostResponse>(
        CREATE_POST,
        payload,
        { withCredentials: true }
    );
    return response.data;
};