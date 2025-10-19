import {Outlet, useNavigate} from "react-router-dom";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar.tsx";
import {CreateForm} from "../components/dialogs/CreateForm.tsx";
import type {CreatePostPayload} from "../hooks/api/post.ts";
import {useCreatePost} from "../hooks/post.tsx";
import {useRecoilState} from "recoil";
import {isOpenCreateForm} from "../states/createPostState.ts";
import {useTotalBadgeCount} from "../hooks/use-total-badge-vount.ts";
import {useState} from "react";
import FloatButton from "../components/float-button/FloatButton.tsx";

export default function MainLayout() {
    const navigate = useNavigate();
    const createPostMutation = useCreatePost();
    const [isCreateFormOpen, setCreateForm] = useRecoilState(isOpenCreateForm);
    const totalBadgeCount = useTotalBadgeCount();
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    const closeSidebar = () => {
        setSidebarVisible(false);
    };

    const handleSubmitForm = (data: CreatePostPayload) => {
        createPostMutation.mutate(data);
        setCreateForm(false);
    };
    return (
        <div>
            <Header />
            <div className="flex">
                <Sidebar
                    onNavigate={(path) => {
                        navigate(path);
                        closeSidebar();
                    }}
                    isVisible={isSidebarVisible}
                    onClose={closeSidebar}
                />
                {/* Main content với padding-left để tránh sidebar */}
                <main className="flex-1">
                    <Outlet /> {/* Nơi render các trang con */}
                </main>
            </div>
            <FloatButton
                onClick={toggleSidebar}
                totalBadgeCount={totalBadgeCount}
            />
            <CreateForm
                isOpen={isCreateFormOpen}
                onClose={() => setCreateForm(false)}
                onSubmit={handleSubmitForm}
            />
        </div>
    );
}
