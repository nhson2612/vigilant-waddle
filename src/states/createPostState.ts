import {atom} from "recoil";
import type {CreatePostResponse} from "../hooks/api/post.ts";
import {POST_TO_RENDER_KEY} from "../utils/constants.ts";

export const postToRender = atom<CreatePostResponse>({
    key: POST_TO_RENDER_KEY,
    default: {
        id: '',
        title: '',
        content: '',
        code: '',
        createdAt: '',
        updatedAt: '',
        deletedAt: '',
        previewImage: '',
        fullCodeImage: ''
    }
});

export const isOpenCreateForm = atom<boolean>({
    key: 'isOpenCreateForm',
    default: false,
})

export const isOpenNotifications = atom<boolean>({
    key: 'isOpenNotifications',
    default: false,
})

export const isOpenMessages = atom<boolean>({
    key: 'isOpenMessages',
    default: false,
})

export const isOpenSettings = atom<boolean>({
    key: 'isOpenSettings',
    default: false,
})