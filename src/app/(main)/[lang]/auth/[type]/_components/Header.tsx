"use client"
import HeaderText from "@/components/HeaderText";
import {ChevronDoubleDownIcon} from "@heroicons/react/24/outline";
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

function Header({lang, type, dict}: AuthHeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const handleMenuClick = () => setIsMenuOpen(!isMenuOpen);

    // A version of t built on client components so it can be called
    const t = (key: string) => _t(key, dict);

    return (
        <header className={'w-screen bg-amber-300 h-auto flex flex-col items-center px-24 pt-6 pb-4'}>
            <HeaderText/>
            <HeaderList t={t} cls={isMenuOpen ? "" : "hidden"}/>
            <ChevronDoubleDownIcon
                className={cn(isMenuOpen ? "rotate-180" : "", 'text-black w-8 h-8  md:hidden cursor-pointer')
                onClick={handleMenuClick}/>
        </header>
    );
}

export default Header;