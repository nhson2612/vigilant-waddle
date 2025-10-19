import React, {useState} from 'react';
import {Edit, Eye, X} from 'lucide-react';
import './create-form.css';
import type {CreatePostPayload} from "../../hooks/api/post.ts";

interface CreateFormProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit?: (data: CreatePostPayload) => void;
}

type TabType = 'form' | 'review';

export const CreateForm: React.FC<CreateFormProps> = ({isOpen, onClose, onSubmit}) => {
    const [activeTab, setActiveTab] = useState<TabType>('form');
    const [formData, setFormData] = useState<CreatePostPayload>({
        title: '',
        content: '',
        code: ''
    });

    if (!isOpen) return null;

    const handleInputChange = (field: keyof CreatePostPayload, value: string) => {
        setFormData(prev => ({...prev, [field]: value}));
    };

    const handleSubmit = () => {
        if (onSubmit) {
            onSubmit(formData);
        }
        handleClose();
    };

    const handleClose = () => {
        setFormData({title: '', content: '', code: ''});
        setActiveTab('form');
        onClose();
    };

    const handleContinue = () => {
        if (activeTab === 'form') {
            setActiveTab('review');
        } else {
            handleSubmit();
        }
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fadeIn"
            onClick={handleBackdropClick}
        >
            <div
                className="relative w-full max-w-3xl transform rounded-2xl bg-white shadow-2xl animate-scaleIn overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="relative px-8 pt-6 pb-4 border-b border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900">
                        {activeTab === 'form' ? 'Tạo bài viết mới' : 'Xem lại bài viết'}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        {activeTab === 'form'
                            ? 'Điền thông tin để tạo bài viết của bạn'
                            : 'Kiểm tra lại thông tin trước khi đăng'
                        }
                    </p>

                    {/* Close Button */}
                    <button
                        onClick={handleClose}
                        className="absolute right-6 top-6 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-all hover:rotate-90 duration-300"
                    >
                        <X className="w-5 h-5"/>
                    </button>
                </div>

                {/* Tabs */}
                <div className="px-8 pt-4">
                    <div className="flex gap-1 bg-gray-50 p-1 rounded-lg">
                        <button
                            onClick={() => setActiveTab('form')}
                            className={`flex-1 px-4 py-2.5 text-sm font-semibold rounded-md transition-all duration-200 ${
                                activeTab === 'form'
                                    ? 'bg-white text-moss-green shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                            }`}
                        >
                            <span className="flex justify-center gap-1">
                                <Edit className="w-6 h-6"/> Tạo bài viết
                            </span>
                        </button>
                        <button
                            onClick={() => setActiveTab('review')}
                            className={`flex-1 px-4 py-2.5 text-sm font-semibold rounded-md transition-all duration-200 ${
                                activeTab === 'review'
                                    ? 'bg-white text-moss-green shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                            }`}
                        >
                            <span className="flex justify-center gap-1">
                                <Eye className="w-6 h-6"/> Xem trước
                            </span>
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="px-8 py-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
                    {/* Form Content */}
                    {activeTab === 'form' && (
                        <div className="animate-fadeIn">
                            <div className="space-y-6">
                                {/* Title Input */}
                                <div>
                                    <label className="block">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-sm font-semibold text-gray-700">
                                                Tiêu đề
                                            </span>
                                            <span className="text-red-500 text-sm">*</span>
                                        </div>
                                        <input
                                            type="text"
                                            value={formData.title}
                                            onChange={(e) => handleInputChange('title', e.target.value)}
                                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-moss-green focus:bg-white focus:outline-none transition-all duration-200"
                                            placeholder="Nhập tiêu đề hấp dẫn..."
                                        />
                                    </label>
                                </div>

                                {/* Content Textarea */}
                                <div>
                                    <label className="block">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-sm font-semibold text-gray-700">
                                                Nội dung
                                            </span>
                                            <span className="text-red-500 text-sm">*</span>
                                        </div>
                                        <textarea
                                            value={formData.content}
                                            onChange={(e) => handleInputChange('content', e.target.value)}
                                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-moss-green focus:bg-white focus:outline-none transition-all duration-200 resize-none"
                                            placeholder="Mô tả chi tiết về nội dung của bạn..."
                                            rows={6}
                                        />
                                        <div className="flex items-center justify-between mt-2">
                                            <span className="text-xs text-gray-500">
                                                Tối thiểu 10 ký tự
                                            </span>
                                            <span className="text-xs text-gray-500">
                                                {formData.content.length} ký tự
                                            </span>
                                        </div>
                                    </label>
                                </div>

                                {/* Code Textarea */}
                                <div>
                                    <label className="block">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-sm font-semibold text-gray-700">
                                                Code
                                            </span>
                                            <span className="text-xs text-gray-500 font-normal">
                                                (Không bắt buộc)
                                            </span>
                                        </div>
                                        <textarea
                                            value={formData.code}
                                            onChange={(e) => handleInputChange('code', e.target.value)}
                                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-moss-green focus:bg-white focus:outline-none transition-all duration-200 resize-none font-mono text-sm"
                                            placeholder="// Dán code của bạn vào đây..."
                                            rows={10}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Review Content */}
                    {activeTab === 'review' && (
                        <div className="animate-fadeIn">
                            <div className="space-y-6">
                                {/* Title Preview */}
                                <div
                                    className="bg-gradient-to-br from-moss-green/5 to-moss-green/10 rounded-xl p-5 border border-moss-green/20">
                                    <h3 className="text-xs font-semibold text-moss-green uppercase tracking-wider mb-3">
                                        📌 Tiêu đề
                                    </h3>
                                    {formData.title ? (
                                        <p className="text-xl font-bold text-gray-900">
                                            {formData.title}
                                        </p>
                                    ) : (
                                        <p className="text-gray-400 italic">Chưa có tiêu đề</p>
                                    )}
                                </div>

                                {/* Content Preview */}
                                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                                    <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-3">
                                        📄 Nội dung
                                    </h3>
                                    {formData.content ? (
                                        <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">
                                            {formData.content}
                                        </p>
                                    ) : (
                                        <p className="text-gray-400 italic">Chưa có nội dung</p>
                                    )}
                                </div>

                                {/* Code Preview */}
                                {formData.code && (
                                    <div className="bg-gray-900 rounded-xl p-5 border border-gray-700">
                                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                                            💻 Code
                                        </h3>
                                        <pre
                                            className="font-mono text-sm text-gray-100 overflow-x-auto custom-scrollbar">
                                            <code>{formData.code}</code>
                                        </pre>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="px-8 py-5 bg-gray-50 border-t border-gray-100">
                    <div className="flex items-center justify-between gap-4">
                        <button
                            onClick={handleClose}
                            className="px-5 py-2.5 text-sm font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
                        >
                            Hủy bỏ
                        </button>

                        <div className="flex items-center gap-3">
                            {activeTab === 'review' && (
                                <button
                                    onClick={() => setActiveTab('form')}
                                    className="px-5 py-2.5 text-sm font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
                                >
                                    ← Quay lại
                                </button>
                            )}

                            <button
                                onClick={handleContinue}
                                disabled={!formData.title || !formData.content}
                                className="px-6 py-2.5 text-sm font-semibold text-white bg-moss-green rounded-lg hover:bg-dark-moss-green disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-moss-green transition-all duration-200 shadow-lg shadow-moss-green/30 hover:shadow-xl hover:shadow-moss-green/40 hover:-translate-y-0.5"
                            >
                                {activeTab === 'form' ? 'Tiếp tục →' : '✨ Đăng bài'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};