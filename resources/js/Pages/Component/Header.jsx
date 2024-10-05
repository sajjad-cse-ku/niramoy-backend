

import Sidebar from '../Component/Sidebar.jsx';
import HeaderMenuRight from '../layoutsItmes/header-menu-right.jsx';
import HamburgerButton from '../Utils/HamburgerButton.jsx';
import StickyHeader from '../layoutsItmes/sticky-header.jsx';
import SearchWidget from "../Search/SearchWidgets.jsx";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <StickyHeader className="z-[990] 2xl:py-5 3xl:px-8 4xl:px-10">
            <div className="flex w-full max-w-2xl items-center">
                <HamburgerButton
                    view={<Sidebar className="static w-full 2xl:w-full" />}
                />
                {/*<Link*/}
                {/*    href={'/'}*/}
                {/*    aria-label="Site Logo"*/}
                {/*    className="me-4 w-9 shrink-0 text-gray-800 hover:text-gray-900 lg:me-5 xl:hidden"*/}
                {/*>*/}
                {/*    <Logo iconOnly={true} />*/}
                {/*</Link>*/}
                <p className="me-4 w-9 shrink-0 text-gray-800 hover:text-gray-900 lg:me-5 xl:hidden">logo</p>

                <SearchWidget />
            </div>

            <HeaderMenuRight />
        </StickyHeader>
    );
}
