import React from 'react';
import Masonry from 'react-masonry-css';
import SyntaxCard from "../syntax-card/SyntaxCard.tsx";
import  './syntax-layout.css';

type CardData = {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
    userAvatar: string;
    userName: string;
    likes: number;
    onSave: () => void;
    onShare: () => void;
};

type SyntaxCardMasonryProps = {
    cards: CardData[];
};

const SyntaxCardMasonry: React.FC<SyntaxCardMasonryProps> = ({ cards }) => {
    const handleSave = (id: string) => {
        console.log(`Save clicked for card ID: ${id}`);
    };

    const handleShare = (id: string) => {
        console.log(`Share clicked for card ID: ${id}`);
    };

    // Cấu hình layout cho từng breakpoint
    const breakpointColumnsObj = {
        default: 5, // 5 cột trên desktop
        1100: 3,    // 2 cột khi màn hình nhỏ hơn 1100px
        700: 2      // 1 cột khi màn hình nhỏ hơn 700px
    };

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
            {cards.map((card) => (
                <SyntaxCard
                    key={card.id}
                    imageUrl={card.imageUrl}
                    title={card.title}
                    description={card.description}
                    userAvatar={card.userAvatar}
                    userName={card.userName}
                    likes={card.likes}
                    onSave={() => handleSave(card.id)}
                    onShare={() => handleShare(card.id)}
                />
            ))}
        </Masonry>
    );
};

export default SyntaxCardMasonry;