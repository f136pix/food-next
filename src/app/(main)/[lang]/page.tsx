import {getTranslations} from "@/lib/i18n/dictionaries";

type PageProps = {
    params: {
        lang: string;
    };
};

const Page = async ({params}: PageProps) => {
    const {lang} = await params
    const t = await getTranslations(lang);

    return (
        <>
            <h1>{t("menu.home")}</h1>
        </>
    );
}

export async function generateStaticParams() {
    return [{lang: 'en'}, {lang: 'pt'}]
}

export default Page;