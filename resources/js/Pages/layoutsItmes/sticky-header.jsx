'use client';

import cn from '../Utils/cn.jsx';
import { useIsMounted } from '../hooks/useIsMounted.jsx';
import { useWindowScroll } from '../hooks/useWindowScroll.jsx';
export default function StickyHeader({
                                         offset = 2,
                                         className,
                                         children,
                                     }) {
    const isMounted = useIsMounted();
    const windowScroll = useWindowScroll();
    return (
        <header
            className={cn(
                'sticky top-0 z-[9999] flex items-center bg-gray-0/80 p-4 backdrop-blur-xl dark:bg-gray-50/50 md:px-5 lg:px-6',
                ((isMounted && windowScroll.y)) > offset ? 'card-shadow' : '',
                className
                )}
        >
            {children}
        </header>
    );
}
