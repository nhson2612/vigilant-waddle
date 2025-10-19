import React from 'react';
import clsx from 'clsx';
import './button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Hiển thị trạng thái loading */
    loading?: boolean;
    /** Màu / kiểu hiển thị */
    variant?: 'primary' | 'secondary' | 'outline' | 'danger';
    /** Kích thước nút */
    size?: 'sm' | 'md' | 'lg';
    /** Biểu tượng (optional) */
    icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
                                                  children,
                                                  loading = false,
                                                  disabled,
                                                  variant = 'primary',
                                                  size = 'md',
                                                  icon,
                                                  className,
                                                  ...props
                                              }) => {
    const baseStyles =
        'w-full flex items-center justify-center font-bold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 relative overflow-hidden';

    const variantStyles = {
        primary:
            'bg-moss-green text-white hover:bg-dark-moss-green focus:ring-moss-green',
        secondary:
            'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-300',
        outline:
            'border border-moss-green text-moss-green hover:bg-moss-green hover:text-white focus:ring-moss-green',
        danger:
            'bg-red-600 text-white hover:bg-red-700 focus:ring-red-600',
    };

    const sizeStyles = {
        sm: 'px-3 py-1.5 text-sm h-9',
        md: 'px-4 py-2 text-base h-11',
        lg: 'px-5 py-3 text-lg h-12',
    };

    return (
        <button
            disabled={disabled || loading}
            className={clsx(
                baseStyles,
                variantStyles[variant],
                sizeStyles[size],
                {
                    'opacity-60 cursor-not-allowed': disabled || loading,
                },
                className
            )}
            {...props}
        >
            {/* Loading shimmer effect */}
            {loading && (
                <div className="absolute inset-0 overflow-hidden">
                    <div className="loading-shimmer" />
                </div>
            )}

            {/* Loading pulse effect */}
            {loading && (
                <div className="absolute inset-0">
                    <div className="loading-pulse" />
                </div>
            )}

            {/* Content */}
            <div className={clsx('relative z-10 flex items-center gap-2', {
                'animate-pulse': loading
            })}>
                {loading ? (
                    <>
                        {/* Spinner với nhiều dots xoay tròn */}
                        <div className="relative w-5 h-5">
                            <div className="loading-spinner">
                                <div className="spinner-dot" style={{ '--i': 0 } as React.CSSProperties} />
                                <div className="spinner-dot" style={{ '--i': 1 } as React.CSSProperties} />
                                <div className="spinner-dot" style={{ '--i': 2 } as React.CSSProperties} />
                                <div className="spinner-dot" style={{ '--i': 3 } as React.CSSProperties} />
                            </div>
                        </div>
                        <span className="animate-fade">Đang xử lý...</span>
                    </>
                ) : (
                    <>
                        {icon && <span className="transition-transform hover:scale-110">{icon}</span>}
                        {children}
                    </>
                )}
            </div>
        </button>
    );
};