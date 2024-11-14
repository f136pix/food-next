import React from 'react';
import {getTranslations} from "@/lib/i18n/dictionaries";

type AuthPageProps = {
    params: {
        lang: string,
        type: string
    };
};

export async function generateMetadata({params}: AuthPageProps) {
    const {lang, type} = await params
    const t = await getTranslations(lang);
    
    return {
        title: t('auth.restaurant.metadata_title'),
        description : t('auth.restaurant.metadata_description'),
    }
} 

const Page = async ({params}: AuthPageProps) => {
    const {lang, type} = await params
    const t = await getTranslations(lang);
    
    return (
        <div>
            <h1>{t("auth.restaurant.header")}</h1>
            <h1>{type}</h1>
        </div>
    );
}

export {generateStaticParams} from "./generateStaticParams"

export default Page;
