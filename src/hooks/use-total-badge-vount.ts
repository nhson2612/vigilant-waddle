import { useMemo } from 'react';
import { mainNavItems, bottomNavItem } from "../utils/constants.tsx";

export const useTotalBadgeCount = () => {
    return useMemo(() => {
        const mainBadges = mainNavItems
            .filter(item => item.badge && item.badge > 0)
            .reduce((sum, item) => sum + (item.badge || 0), 0);

        const bottomBadge = bottomNavItem.badge || 0;

        return mainBadges + bottomBadge;
    }, [mainNavItems, bottomNavItem]);
};