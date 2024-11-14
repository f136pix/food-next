import {LANGS} from "@/lib/i18n/i18n";

export async function generateStaticParams() {
    const types = ["restaurants",  "users"]; // Replace with actual types
    const params = LANGS.flatMap(lang =>
        types.map(type => ({ lang, type }))
    );
    return params;
}