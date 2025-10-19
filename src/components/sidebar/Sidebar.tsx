// components/sidebar/Sidebar.tsx
import React, { useState, useEffect } from 'react';
import { mainNavItems, bottomNavItem, type NavItem } from "../../utils/constants.tsx";
import { useRecoilState } from "recoil";
import {
    isOpenCreateForm,
    isOpenMessages,
    isOpenNotifications,
    isOpenSettings
} from "../../states/createPostState.ts";

interface SidebarProps {
    onNavigate?: (path: string) => void;
    isVisible?: boolean;
    onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
                                             onNavigate,
                                             isVisible = false,
                                             onClose
                                         }) => {
    const [activeItem, setActiveItem] = useState('home');
    const [isCreateFormOpen, setCreateForm] = useRecoilState(isOpenCreateForm);
    const [isNotificationsOpen, setOpenNotifications] = useRecoilState(isOpenNotifications);
    const [isMessagesOpen, setOpenMessages] = useRecoilState(isOpenMessages);
    const [isSettingsOpen, setOpenSettings] = useRecoilState(isOpenSettings);

    // Hiệu ứng khi sidebar xuất hiện
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (isVisible) {
            setIsMounted(true);
        } else {
            const timer = setTimeout(() => setIsMounted(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    const handleItemClick = (item: NavItem) => {
        setActiveItem(item.id);

        // Đóng sidebar sau khi click (trên mobile)
        if (window.innerWidth < 768 && onClose) {
            onClose();
        }

        if (onNavigate && item.path) {
            onNavigate(item.path);
        } else {
            switch(item.id){
                case 'add':
                    setCreateForm(!isCreateFormOpen);
                    break;
                case 'notifications':
                    setOpenNotifications(!isNotificationsOpen);
                    break;
                case 'messages':
                    setOpenMessages(!isMessagesOpen);
                    break;
                case 'settings':
                    setOpenSettings(!isSettingsOpen);
                    break;
                default:
                    break;
            }
        }
    };

    const renderNavButton = (item: NavItem) => {
        const isActive = activeItem === item.id;

        return (
            <button
                key={item.id}
                onClick={() => handleItemClick(item)}
                className={`
          relative w-full py-4 flex items-center justify-center
          rounded-xl transition-all duration-200 group cursor-pointer
          ${isActive
                    ? 'text-moss-green scale-110'
                    : 'text-gray-500 hover:text-moss-green hover:bg-gray-100'
                }
          transform transition-transform duration-300
        `}
                title={item.label}
            >
                {/* Icon + badge */}
                <div className="relative">
                    {item.icon}
                    {item.badge && item.badge > 0 && (
                        <span
                            className="absolute -top-2 -right-2 bg-red-500 text-white text-xs
                font-bold rounded-full min-w-[20px] h-5 flex items-center
                justify-center px-1.5 animate-pulse"
                        >
              {item.badge > 99 ? '99+' : item.badge}
            </span>
                    )}
                </div>

                {/* Tooltip */}
                <div
                    className="absolute left-full ml-4 px-3 py-2 bg-gray-900 text-white text-sm
            rounded-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100
            group-hover:visible transition-all duration-200 pointer-events-none z-50"
                >
                    {item.label}
                    <div
                        className="absolute right-full top-1/2 -translate-y-1/2 border-8
              border-transparent border-r-gray-900"
                    ></div>
                </div>

                {/* Active indicator */}
                {isActive && (
                    <div
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8
              bg-moss-green rounded-r-full"
                    ></div>
                )}
            </button>
        );
    };

    if (!isVisible && !isMounted) return null;

    return (
        <>
            {/* Overlay */}
            {isVisible && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:bg-transparent"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
          fixed left-3 top-20 w-24
          bg-white/95 backdrop-blur-md
          border-2 rounded-xl
          mb-3
          flex flex-col items-center py-4 gap-4
          shadow-lg z-40
          transition-all duration-300
          ${isVisible
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-full opacity-0'
                }
        `}
                style={{ borderColor: 'var(--moss-green)' }}
            >
                {/* Close button for mobile */}
                <button
                    onClick={onClose}
                    className="md:hidden absolute -right-3 -top-3 w-8 h-8 bg-red-500
            text-white rounded-full flex items-center justify-center
            shadow-lg hover:scale-110 transition-transform"
                >
                    ✕
                </button>

                {/* Main Navigation */}
                <nav className="flex-1 w-full px-1 space-y-2">
                    {mainNavItems.map(item => renderNavButton(item))}
                </nav>

                {/* Bottom Navigation */}
                <div className="w-full px-2 mt-auto">
                    <div className="border-t border-gray-200 pt-4 mb-2">
                        {renderNavButton(bottomNavItem)}
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;