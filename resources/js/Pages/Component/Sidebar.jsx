import React from 'react';
import SimpleBar from 'simplebar-react';
import cn from "../Utils/cn.jsx";
import 'simplebar-react/dist/simplebar.min.css';
import {SidebarMenu} from "../Sidebar/SidebarMenu.jsx";
import {Link} from "@inertiajs/react";
const Sidebar = ({className}) => {
    return (
        <div>
            <aside
                className={cn(
                    'fixed bottom-0 start-0 z-50 h-full w-[270px] border-e-2 border-gray-100 bg-white dark:bg-gray-100/50 2xl:w-72',
                    className
                )}
            >
                <div className="sticky top-0 z-40 bg-gray-0/10 px-6 pb-5 pt-5 dark:bg-gray-100/5 2xl:px-8 2xl:pt-6">
                    <p>Logo</p>
                    {/*<Link*/}
                    {/*    href={'/'}*/}
                    {/*    aria-label="Site Logo"*/}
                    {/*    className="text-gray-800 hover:text-gray-900"*/}
                    {/*>*/}
                    {/*    <Logo className="max-w-[155px]"/>*/}
                    {/*</Link>*/}
                </div>

                <SimpleBar className="h-[calc(100%-80px)]">
                    <SidebarMenu/>
                </SimpleBar>
            </aside>
        </div>
    )
}

export default Sidebar
