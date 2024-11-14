import 'server-only'

import {_t, Dict, Lang, LANGS} from "@/lib/i18n/i18n";

type IDictionaries = {
    [key in Lang]: () => Promise<Dict>
}

const dictionaries: IDictionaries = {
    en: () => import('../../dictionaries/en.json').then((m) => m.default),
    pt: () => import('../../dictionaries/pt.json').then((m) => m.default)
}

export const getDictionary = async (locale: string) => {
    if (!LANGS.includes(locale)) {
        console.error(`Locale ${locale} not found in LANGS`)
        return await dictionaries['en']();
    }

    const dict = await dictionaries[locale as keyof IDictionaries]();

    // return dict ?? dict['en'];
    return dict;
}

export type Translator = (key: string) => string
export const getTranslations = async (lang: string): Promise<Translator> => {
    "use server"
    const dict = await getDictionary(lang)

    // Returns a callback that provides the translations
    const callback = (key: string) => {
        return _t(key, dict)
    };

    return callback;
}

// This function provides a dictionary block to the component, useful when passing translations down to client components.
// export type DictProvider = (key: string) => Promise<string>
// export const DictProvider = async (lang: string): Promise<DictProvider> => {
// }