import React, {useEffect, useState} from 'react';
import {cn} from "@/lib/utils/cn";

type HeaderListProps = {
    t: any,
    cls?: string
}

const items = [
    "about_us",
    "contact",
    "github",
    "login_user",
    "login_restaurant"
]

function HeaderList({t, cls}: HeaderListProps) {
    const [listItems, setListItems] = useState<string[]>([])
    useEffect(() => {
        setListItems(items)
    }, []);


    return (
        <nav className={cn("flex flex-col text-center", cls)}>
            {listItems.map((item, index) => {
                return (
                    // <a key={index}> olola</a>
                    <a key={index}>{t(`header.${item}`)}</a>
                )
            })
            }
        </nav>
    );
}

export default HeaderList;