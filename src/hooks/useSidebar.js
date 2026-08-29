import { useState, useEffect } from 'react';

export function useSidebar() {
    const [isCollapsed, setIsCollapsed] = useState(() => {
        return localStorage.getItem('sidebar_collapsed') === 'true';
    });

    useEffect(() => {
        const handleStorageChange = () => {
            setIsCollapsed(localStorage.getItem('sidebar_collapsed') === 'true');
        };
        window.addEventListener('sidebar_toggle', handleStorageChange);
        return () => window.removeEventListener('sidebar_toggle', handleStorageChange);
    }, []);

    const toggleSidebar = () => {
        const newValue = !isCollapsed;
        setIsCollapsed(newValue);
        localStorage.setItem('sidebar_collapsed', newValue.toString());
        window.dispatchEvent(new Event('sidebar_toggle'));
    };

    return { isCollapsed, toggleSidebar };
}
