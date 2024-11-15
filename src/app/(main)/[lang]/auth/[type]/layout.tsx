import Header from "@/app/(main)/[lang]/auth/[type]/_components/Header";
import {getDictionary} from "@/lib/i18n/dictionaries";
import {LangProps, TypeProps} from "@/app/(main)/props";

export default async function AuthLayout({children, params}: {
    children: React.ReactNode,
    params: { lang: LangProps, type: TypeProps }
}) {
    const {lang, type} = await params;
    const dict = await getDictionary(lang);
    
    return (
        <main>
            <Header lang={lang} dict={dict} type={type}/>
            {children}
        </main>
    );
}

// Layout static params generation
export {generateStaticParams} from "./generateStaticParams"