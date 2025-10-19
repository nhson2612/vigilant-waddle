import { useState } from 'react';
import * as React from 'react';
import {Bookmark, Heart, Maximize2, Share2} from "lucide-react";
import {colorPairs} from "../../../utils/color.ts";
import './syntax-card.css';

type SyntaxCardProps = {
    imageUrl: string;
    title: string;
    description: string;
    userAvatar: string;
    userName: string;
    likes: number;
    onSave: () => void;
    onShare: () => void;
};

const SyntaxCard = ({
                        imageUrl,
                        title,
                        description,
                        userAvatar,
                        userName,
                        likes,
                        onSave,
                        onShare,
                    }: SyntaxCardProps) => {
    const colorKeys = Object.keys(colorPairs) as (keyof typeof colorPairs)[];
    const randomTheme =
        colorKeys[Math.floor(Math.random() * colorKeys.length)];
    const { bg, text } = colorPairs[randomTheme];    const [isSaved, setIsSaved] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const [likeAnimate] = useState(false);
    const [saveAnimate] = useState(false);

    const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setIsSaved(!isSaved);
        onSave();
    };

    const handleZoom = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        // Xử lý logic phóng to ảnh ở đây
        console.log('Zoom image');
    };

    const handleShare = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onShare();
    };

    const handleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setIsLiked(!isLiked);
    };


    return (
        <div
            className="group mb-8 w-full max-w-sm cursor-pointer rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out p-4 flex flex-col"
            style={{
                backgroundColor: bg,
                color: text,
            }}
        >
            <div className="relative rounded-lg overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Zoom */}
                <button
                    className="zoom-icon absolute top-3 right-3 h-10 w-10 flex items-center justify-center rounded-full bg-gray-800/60 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out hover:bg-gray-700/80 hover:scale-110"
                    onClick={handleZoom}
                >
                    <Maximize2 size={20} />
                </button>

                {/* Like / Share */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/20 backdrop-blur-md rounded-t-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                    <div className="flex items-center justify-between text-white">
                        <div className="flex items-center gap-2">
                            <button
                                className="flex items-center gap-1 hover:text-red-400 transition-colors"
                                onClick={handleLike}
                            >
                                <Heart
                                    size={20}
                                    className={`${isLiked ? "fill-red-400 text-red-400" : ""} ${likeAnimate ? "heart-animate" : ""}`}
                                />
                                <span className="text-sm font-medium">
                                    {isLiked ? likes + 1 : likes}
                                </span>
                            </button>
                            <button
                                className="hover:text-blue-300 transition-colors p-1"
                                onClick={handleShare}
                            >
                                <Share2 size={20} />
                            </button>
                            <button
                                className="hover:text-blue-300 transition-colors p-1"
                                onClick={handleSave}
                            >
                                <Bookmark
                                    size={20}
                                    className={`${isSaved ? "fill-current" : ""} ${saveAnimate ? "bookmark-animate" : ""}`}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Title / Description */}
            <div className="pt-4 flex-grow">
                <h3 className="text-lg font-bold" style={{ color: text }}>
                    {title}
                </h3>
            </div>

            {/* Author Info */}
            <div className="flex items-center mt-4">
                <div className="relative">
                    <img
                        alt="Author Avatar"
                        className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm hover:scale-110 transition-transform"
                        src={userAvatar}
                    />
                    <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-white"></span>
                </div>
                <div className="ml-3">
                    <p className="text-sm font-medium" style={{ color: text }}>
                        {userName}
                    </p>
                    <p className="text-xs opacity-80">Illustrator</p>
                </div>
            </div>
        </div>
    );
};


export default SyntaxCard;