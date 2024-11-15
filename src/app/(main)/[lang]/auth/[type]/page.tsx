import React from 'react';
import {getTranslations} from "@/lib/i18n/dictionaries";
import RegisterPage from "@/app/(main)/[lang]/auth/[type]/RegisterPage";
import {LangProps, TypeProps} from "@/app/(main)/props";

type AuthPageProps = {
    params: {
        lang: LangProps,
        type: TypeProps
    };
};

export async function generateMetadata({params}: AuthPageProps) {
    const {lang, type} = await params
    const t = await getTranslations(lang);

    return {
        title: t(`auth.${type}.metadata_title`),
        description: t(`auth.${type}.metadata_description`),
    }
}

const Page = async ({params}: AuthPageProps) => {
    const {lang, type} = await params
    const t = await getTranslations(lang);

    return <RegisterPage type={type} t={t}/>;
}

export {generateStaticParams} from "./generateStaticParams"

export default Page;
