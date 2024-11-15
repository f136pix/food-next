"use client"
import HeaderText from "@/components/HeaderText";
import {ChevronDoubleDownIcon,} from "@heroicons/react/24/outline";

import React, {useState} from "react";
import HeaderList from "@/app/(main)/[lang]/auth/[type]/_components/HeaderList";
import {_t, Dict,} from "@/lib/i18n/i18n";
import {cn} from "@/lib/utils/cn";

type AuthHeaderProps = {
    // t: AsyncTranslator,
    lang: string,
    dict: Dict
    type: string,
};

function Header({type, dict}: AuthHeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const handleMenuClick = () => setIsMenuOpen(!isMenuOpen);

    // A version of t built on client components so it can be called without problems
    const t = (key: string) => _t(key, dict);

    return (
        <header
            className={cn(isMenuOpen ? 'fixed h-[32rem] md:h-24' : 'h-24', 'w-screen bg-amber-300 flex flex-col items-center px-24 pt-3 pb-3 transition-all duration-700 ' +
                'md:flex-row md:justify-between')}>
            <HeaderText/>
            <HeaderList t={t} type={type}
                        cls={isMenuOpen ? "h-[80%] transition-all duration-700'" : "hidden md:flex md:flex-row"}/>
            <ChevronDoubleDownIcon
                className={cn(isMenuOpen ? "rotate-180 text-black mt-[28rem]" : "mt-24 text-white", 'w-7 h-7 cursor-pointer md:hidden absolute transition-all duration-700')}
                onClick={handleMenuClick}/>
        </header>
    );
}

export default Header;