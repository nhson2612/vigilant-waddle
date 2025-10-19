import SyntaxCardMasonry from "../../components/syntax/syntax-layout/SyntaxCardMasonry.tsx";

const cardsData = [
    {
        id: "1",
        imageUrl: "https://i.pinimg.com/474x/c2/4f/76/c24f767f89975c3944b5fb1f54f2ef9b.jpg",
        title: "Beautiful Landscape Photography",
        description: "Stunning mountain landscape with beautiful sunset colors and dramatic clouds.",
        userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
        userName: "john_photo",
        likes: 245,
        onSave: () => {},
        onShare: () => {},
    },
    {
        id: "2",
        imageUrl: "https://i.pinimg.com/474x/93/ff/ca/93ffca24f7e6f7ddcaf0949f95359581.jpg",
        title: "Modern Interior Design",
        description: "Minimalist living room design with natural lighting and contemporary furniture. Perfect for modern homes.",
        userAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80",
        userName: "design_lover",
        likes: 189,
        onSave: () => {},
        onShare: () => {},
    },
    {
        id: "3",
        imageUrl: "https://i.pinimg.com/736x/29/cf/1e/29cf1e4aa5d46bb4bf50ef27558f8956.jpg",
        title: "Delicious Food Recipes",
        description: "Homemade pancakes with fresh berries and maple syrup - perfect breakfast idea!",
        userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
        userName: "foodie_adventures",
        likes: 312,
        onSave: () => {},
        onShare: () => {},
    },
    {
        id: "4",
        imageUrl: "https://i.pinimg.com/1200x/07/82/eb/0782eb37149c91b6b4ccedac00e1b518.jpg",
        title: "Mountain Adventure",
        description: "Epic hiking trails and outdoor adventures in the mountains.",
        userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
        userName: "adventure_seek",
        likes: 428,
        onSave: () => {},
        onShare: () => {},
    },
    {
        id: "5",
        imageUrl: "https://i.pinimg.com/736x/4b/bb/6e/4bbb6ea020b1360a3438050e974d0669.jpg",
        title: "Fashion Trends 2025",
        description: "Latest fashion trends and style inspiration for the modern wardrobe.",
        userAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
        userName: "style_icon",
        likes: 567,
        onSave: () => {},
        onShare: () => {},
    },
    {
        id: "6",
        imageUrl: "https://i.pinimg.com/736x/0b/9f/6e/0b9f6ebb132db3a64e709023658ccb13.jpg",
        title: "Healthy Breakfast Bowl",
        description: "Nutritious and colorful breakfast bowl recipe.",
        userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
        userName: "health_guru",
        likes: 234,
        onSave: () => {},
        onShare: () => {},
    },
    {
        id: "7",
        imageUrl: "https://i.pinimg.com/736x/53/4f/c6/534fc6feb16eda6a507da8a17e48b132.jpg",
        title: "Ocean Sunset Views",
        description: "Breathtaking sunset over the ocean with vibrant colors painting the sky in shades of orange and pink.",
        userAvatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&q=80",
        userName: "sunset_chaser",
        likes: 891,
        onSave: () => {},
        onShare: () => {},
    },
    {
        id: "8",
        imageUrl: "https://i.pinimg.com/736x/55/9f/b6/559fb65f011132bbd1beef255addf885.jpg",
        title: "Workspace Inspiration",
        description: "Minimal and productive home office setup ideas.",
        userAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80",
        userName: "workspace_pro",
        likes: 345,
        onSave: () => {},
        onShare: () => {},
    },
    {
        id: "9",
        imageUrl: "https://i.pinimg.com/736x/0f/9d/36/0f9d366819629bdc721bbbc7dd212ac1.jpg",
        title: "Urban Street Fashion",
        description: "Street style photography capturing the essence of urban fashion culture.",
        userAvatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=80",
        userName: "urban_style",
        likes: 623,
        onSave: () => {},
        onShare: () => {},
    },
    {
        id: "10",
        imageUrl: "https://i.pinimg.com/736x/67/0a/33/670a332ff6d5eff3614d12c987d2b599.jpg",
        title: "Gourmet Cooking Tips",
        description: "Professional cooking techniques for home chefs.",
        userAvatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&q=80",
        userName: "chef_master",
        likes: 445,
        onSave: () => {},
        onShare: () => {},
    },
    {
        id: "11",
        imageUrl: "https://i.pinimg.com/736x/72/00/1c/72001cec81237dd3b22133db4aec2f13.jpg",
        title: "Nature Photography",
        description: "Capturing the beauty of nature through the lens.",
        userAvatar: "https://images.unsplash.com/photo-1502764613149-7f1d229e230f?w=100&q=80",
        userName: "nature_lover",
        likes: 778,
        onSave: () => {},
        onShare: () => {},
    },
    {
        id: "12",
        imageUrl: "https://i.pinimg.com/474x/7e/0a/fc/7e0afcb163a5977aaa9417e6d0f970e8.jpg",
        title: "Cozy Home Decor",
        description: "Create a warm and inviting atmosphere in your living space with these simple decor tips.",
        userAvatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80",
        userName: "home_cozy",
        likes: 512,
        onSave: () => {},
        onShare: () => {},
    },
];

export const Home = () => {
    const handleSave = (id: string) => {
        console.log(`Card ${id} saved!`);
        // Bạn có thể cập nhật trạng thái toàn cục, gọi API, v.v.
    };

    const handleShare = (id: string) => {
        console.log(`Card ${id} shared!`);
        // Xử lý chia sẻ
    };

    // Cập nhật dữ liệu để truyền hàm thực tế vào mỗi card
    const cardsWithHandlers = cardsData.map(card => ({
        ...card,
        onSave: () => handleSave(card.id),
        onShare: () => handleShare(card.id),
    }));
    return (
        <div className="p-6 bg-white min-h-screen">
            <SyntaxCardMasonry cards={cardsWithHandlers} />
        </div>
    );
}