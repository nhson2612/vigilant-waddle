import {Search, Hash, Users, Zap, Bell, MessageCircle, Plus, Home, Settings} from 'lucide-react';
import React from 'react';

export interface SearchResult {
    id: number;
    icon: React.ReactNode;
    label: string;
    shortcut?: string;
    action: () => void;
}

export interface NavItem {
    id: string;
    icon: React.ReactNode;
    label: string;
    path?: string;
    badge?: number;
}

export const defaultSearchResults: SearchResult[] = [
    {
        id: 1,
        icon: <Hash className="w-4 h-4 text-gray-500" />,
        label: 'Tìm kiếm thẻ',
        shortcut: '⌘ + K',
        action: () => console.log('Search tags'),
    },
    {
        id: 2,
        icon: <Users className="w-4 h-4 text-gray-500" />,
        label: 'Tìm kiếm người dùng',
        shortcut: '⌘ + U',
        action: () => console.log('Search users'),
    },
    {
        id: 3,
        icon: <Zap className="w-4 h-4 text-gray-500" />,
        label: 'Hành động',
        shortcut: '⌘ + J',
        action: () => console.log('Actions'),
    },
    {
        id: 4,
        icon: <Search className="w-4 h-4 text-gray-500" />,
        label: 'Tìm kiếm nâng cao',
        shortcut: '⌘ + /',
        action: () => console.log('Advanced search'),
    },
];
export const mainNavItems: NavItem[] = [
    {
        id: 'home',
        icon: <Home className="w-6 h-6" />,
        label: 'Trang chủ',
        path: '/'
    },
    {
        id: 'add',
        icon: <Plus className="w-6 h-6" />,
        label: 'Tạo mới',
    },
    {
        id: 'notifications',
        icon: <Bell className="w-6 h-6" />,
        label: 'Thông báo',
        badge: 5
    },
    {
        id: 'messages',
        icon: <MessageCircle className="w-6 h-6" />,
        label: 'Tin nhắn',
        badge: 3
    }
];

export const bottomNavItem: NavItem = {
    id: 'settings',
    icon: <Settings className="w-6 h-6" />,
    label: 'Cài đặt',
    path: '/settings'
};