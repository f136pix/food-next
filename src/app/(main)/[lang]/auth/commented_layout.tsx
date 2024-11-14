import Header from "@/app/(main)/[lang]/auth/[type]/_components/Header";
import {getTranslations} from "@/lib/i18n/dictionaries";

export default async function AuthLayout({children, params}: {
    children: React.ReactNode,
    params: { lang: string, type: string }
}) {
    const {lang} = await params;
    const {type} = await params;
    console.log(type)
    const t = await getTranslations(lang);
    return (
        <main>
            <Header lang={t} type={type}/>
            {children}
        </main>
    );
}
