import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { defaultSearchResults } from '../../utils/constants.tsx';
import {Search} from "lucide-react";
import {useKeyboardShortcuts} from "./utils.ts";
import logo from '../../assets/logo.png';

const Header = () => {
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const searchRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);

    // Mock user data
    const user = {
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
        name: 'Nguyễn Văn A'
    };


    // ✅ Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsSearchFocused(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // ✅ Handle keyboard shortcuts (⌘ + K)
    useKeyboardShortcuts(inputRef);

    return (
        <header className="sticky top-0 z-50 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-8">
                        <img
                            src={logo}
                            alt="Logo"
                            className="py-1 h-16 w-16 object-contain cursor-pointer"
                            onClick={()=> navigate('/')}
                        />
                    </div>
                    {/* Search Bar */}
                    <div className="flex-1 max-w-2xl mx-8 relative" ref={searchRef}>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                ref={inputRef}
                                type="text"
                                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg
                         focus:ring-2 focus:ring-moss-green focus:border-transparent
                         placeholder-gray-400 text-sm transition-all duration-200"
                                placeholder="Tìm kiếm mọi thứ"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                onFocus={() => setIsSearchFocused(true)}
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100 border border-gray-300 rounded">
                                    ⌘K
                                </kbd>
                            </div>
                        </div>

                        {/* Search Dropdown */}
                        {isSearchFocused && searchValue === '' && (
                            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden animate-fadeIn">
                                <div className="py-2">
                                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Phím tắt
                                    </div>
                                    {defaultSearchResults.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => {
                                                item.action();
                                                setIsSearchFocused(false);
                                            }}
                                            className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50
                               transition-colors duration-150 group"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="text-moss-green group-hover:scale-110 transition-transform">
                                                    {item.icon}
                                                </div>
                                                <span className="text-sm font-medium text-gray-700">
                          {item.label}
                        </span>
                                            </div>
                                            <kbd className="px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100
                                    border border-gray-300 rounded group-hover:bg-gray-200">
                                                {item.shortcut}
                                            </kbd>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Profile */}
                    <div className="flex items-center gap-4 rounded">
                        <button
                            onClick={() => navigate('/me')}
                            className="relative group"
                            title={user.name}
                        >
                            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-transparent
                            group-hover:ring-moss-green transition-all duration-200
                            group-hover:scale-105">
                                <img
                                    src={user.avatar}
                                    alt={user.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Online indicator */}
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full
                            border-2 border-white"></div>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;