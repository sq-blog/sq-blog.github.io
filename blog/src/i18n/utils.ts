import { getRelativeLocaleUrl } from 'astro:i18n';
import { defaultLang, ui, type Lang, type UiKey } from './ui';

// Ubah Astro.currentLocale menjadi kode bahasa yang kita kenal.
export function getLang(locale: string | undefined): Lang {
	return locale && locale in ui ? (locale as Lang) : defaultLang;
}

// Penerjemah: const t = useTranslations(lang); t('nav.about')
export function useTranslations(lang: Lang) {
	return (key: UiKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

// Tautan sadar bahasa: localePath('en-GB', 'about') -> /en/about/
export function localePath(lang: Lang, path = ''): string {
	return getRelativeLocaleUrl(lang, path);
}

// Mengganti bahasa di halaman yang sama (dipakai pemilih bahasa di Fase 3)
export function switchLangPath(currentPathname: string, from: Lang, to: Lang): string {
	const prefixFrom = from === defaultLang ? '' : '/en';
	const rest = prefixFrom && currentPathname.startsWith(prefixFrom)
		? currentPathname.slice(prefixFrom.length) || '/'
		: currentPathname;
	return localePath(to, rest.replace(/^\//, ''));
}