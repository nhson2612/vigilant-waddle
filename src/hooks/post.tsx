import {useMutation} from "@tanstack/react-query";
import {toast} from "react-toastify";
import {type CreatePostPayload, createPostRequest} from "./api/post.ts";
import {useNavigate} from "react-router-dom";
import {useSetRecoilState} from "recoil";
import {postToRender} from "../states/createPostState.ts";

export const useCreatePost = ()=> {
    const navigate = useNavigate();
    const setValue = useSetRecoilState(postToRender);

    return useMutation({
        mutationFn: async (payload: CreatePostPayload) => {
            return await createPostRequest(payload);
        },
        onSuccess: (data) => {
            setValue(data);
            toast.success('Thành công ✅');
            navigate("/");
        },
        onError: (error: any) => {
            toast.error(error.response?.data?.message || 'Đã có lỗi sảy ra ❌');
        },
    });
}