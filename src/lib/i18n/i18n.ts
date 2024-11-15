export type Lang = 'pt' | 'en';

export const LANGS: Lang[] = ['pt', 'en'];

export const otherLang = (lang: Lang) => lang === 'pt' ? 'en' : 'pt';

export type Dict = {
    [key: string]: string | Dict
}

export const getOtherLanguages = (langs: Lang) => {
    return LANGS.filter((lang) => lang != langs)
}

function getFromDictionary(keys: string[], dict: Dict | string): Dict | string {
    if (typeof dict == "string") {
        return dict;
    }
    
    if (!dict) return "";

    if (keys.length == 0) return "";

    const key = keys.shift() || "";
    
    return getFromDictionary(keys, dict[key]);
}

export const _t = (key: string, dict: Dict): string => {
    if (!key) return "";

    const keys = key.split(".");
    
    const ret = getFromDictionary(keys, dict);

    if (!ret) return key;

    if (typeof ret !== 'string') {
        console.error('getFromDict returned a ' + (typeof ret))
        return key;
    }

    return ret;
}