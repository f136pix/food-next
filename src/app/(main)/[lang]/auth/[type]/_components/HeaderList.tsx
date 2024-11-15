import React, {useEffect, useState} from 'react';
import {cn} from "@/lib/utils/cn";
import {Translator} from "@/lib/i18n/dictionaries";
import {
    InformationCircleIcon,
    PhoneIcon,
    CodeBracketIcon,
    UserIcon,
    BuildingStorefrontIcon
} from "@heroicons/react/24/outline";
import {type} from "node:os";


type HeaderListProps = {
    t: Translator,
    type: string,
    cls?: string
}

type ItemOption = {
    name: string;
    icon: React.JSX.Element;
};

type Item = {
    name: string;
    icon: React.JSX.Element | string;
    options?: Record<string, ItemOption>;
};

const iconsStyle = "w-6 h-6 text-black";

const items = [
    {name: "about_us", icon: <InformationCircleIcon className={iconsStyle}/>},
    {name: "contact", icon: <PhoneIcon className={iconsStyle}/>},
    {name: "github", icon: <CodeBracketIcon className={iconsStyle}/>},
];

const userItem = {
    name: "login_user",
    icon: <UserIcon className={iconsStyle + "md:text-neutral-300"}/>,
}

const restaurantItem = {
    name: "login_restaurant",
    icon: <BuildingStorefrontIcon className={iconsStyle + "md:text-neutral-300"}/>,
}

function HeaderList({t, cls, type}: HeaderListProps) {
    const [listItems, setListItems] = useState<Item[]>([])
    useEffect(() => {
        const additionalItem = type == "users" ? restaurantItem : userItem;
        setListItems(items.concat(additionalItem));
    }, []);


    return (
        <nav
            className={cn("flex flex-col text-neutral-800 font-medium mt-6 md:w-1/2 md:space-y-0 md:mt-0 w-screen px-6", cls)}>
            {listItems.map((item, index) => {
                return (
                    <div key={index}
                         className={cn(
                             "flex justify-between mx-auto w-full text-lg md:justify-around md:w-fit items-center p-6 cursor-pointer hover:text-black ",
                             index == listItems.length - 1 ? "bg-neutral-800 rounded text-white hover:bg-neutral-950" : " ")}>
                        <a key={index + "1"}
                           className={cn("transition-all duration-700 mr-4", index == listItems.length - 1 )}>{t(`header.${item.name}`)}</a>
                        {item.icon}
                    </div>
                )
            })
            }
        </nav>
    );
}

export default HeaderList;