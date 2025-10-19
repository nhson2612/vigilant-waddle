import React, { useEffect } from 'react';
import { defaultSearchResults } from '../../utils/constants.tsx';

export const useKeyboardShortcuts = (inputRef: React.RefObject<HTMLInputElement | null>) => {
    useEffect(() => {
        const isMac = navigator.platform.toUpperCase().includes('MAC');

        const handleKeyDown = (e: KeyboardEvent) => {
            const target = e.target as HTMLElement;

            // Bỏ qua khi đang gõ trong input/textarea
            if (['INPUT', 'TEXTAREA'].includes(target.tagName)) return;

            const shortcuts = [
                { key: 'k', action: defaultSearchResults[0].action }, // ⌘ + K
                { key: 'u', action: defaultSearchResults[1].action }, // ⌘ + U
                { key: 'j', action: defaultSearchResults[2].action }, // ⌘ + J
                { key: '/', action: defaultSearchResults[3].action }, // ⌘ + /
            ];

            const match = shortcuts.find((s) => e.key.toLowerCase() === s.key);

            if (match && ((isMac && e.metaKey) || (!isMac && e.ctrlKey))) {
                e.preventDefault();
                e.stopPropagation();

                // 🔥 Focus vào ô input
                inputRef.current?.focus();
                inputRef.current?.select(); // (optional) chọn sẵn text để gõ lại nhanh

                // Gọi hành động tương ứng
                match.action();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [inputRef]);
};