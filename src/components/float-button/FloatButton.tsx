import React from 'react';

interface FloatButtonProps {
    onClick: () => void;
    totalBadgeCount: number;
}

const FloatButton: React.FC<FloatButtonProps> = ({ onClick, totalBadgeCount }) => {
    return (
        <button
            onClick={onClick}
            className="
        fixed left-6 bottom-6 w-14 h-14
        bg-moss-green text-white
        rounded-full shadow-2xl
        flex items-center justify-center
        hover:scale-110 hover:shadow-3xl
        active:scale-95
        transition-all duration-300
        z-50
        border-2 border-white
        animate-bounce
      "
            title="Open Menu"
        >
            {/* Menu Icon */}
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>

            {/* Badge */}
            {totalBadgeCount > 0 && (
                <span
                    className="
            absolute -top-2 -right-2
            bg-red-500 text-white text-xs
            font-bold rounded-full
            min-w-[20px] h-5 flex items-center
            justify-center px-1.5
            animate-pulse border-2 border-white
          "
                >
          {totalBadgeCount > 99 ? '99+' : totalBadgeCount}
        </span>
            )}
        </button>
    );
};

export default FloatButton;