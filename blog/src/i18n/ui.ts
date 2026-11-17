// Semua teks antarmuka (menu, tombol, label) ada di sini.
// Setiap bahasa wajib punya kunci yang sama dengan bahasa Indonesia.

const id = {
	'site.title': 'Meja Catatan',
	'site.description':
		'Catatan Syaoqi tentang eksperimen yang gagal, kode yang error, dan apa yang dipelajari dari keduanya.',
	'nav.archive': 'Arsip',
	'nav.about': 'Tentang',
	'nav.label': 'Navigasi utama',
	'theme.toDark': 'Gelap',
	'theme.toLight': 'Terang',
	'theme.aria': 'Ganti tema terang atau gelap',
	'lang.label': 'Bahasa',
	'home.identity': 'Syaoqi, dari fisika ke data dan software',
	'home.seeMenu': 'Lihat menunya',
	'home.menuTitle': 'Menu hari ini',
	'home.allNotes': 'Semua catatan',
	'home.empty': 'Belum ada menu hari ini.',
	'footer.credit': 'Ditulis oleh Syaoqi. Tulisan boleh dibaca bebas.',
} as const;

const enGB: Record<keyof typeof id, string> = {
	'site.title': 'The Notes Desk',
	'site.description':
		"Syaoqi's notes on failed experiments, broken code, and what came out of both.",
	'nav.archive': 'Archive',
	'nav.about': 'About',
	'nav.label': 'Main navigation',
	'theme.toDark': 'Dark',
	'theme.toLight': 'Light',
	'theme.aria': 'Switch between light and dark theme',
	'lang.label': 'Language',
	'home.identity': 'Syaoqi, from physics to data and software',
	'home.seeMenu': 'See the menu',
	'home.menuTitle': "Today's menu",
	'home.allNotes': 'All notes',
	'home.empty': 'Nothing on the menu yet.',
	'footer.credit': 'Written by Syaoqi. Free to read.',
};

export const ui = { id, 'en-GB': enGB } as const;
export type Lang = keyof typeof ui;
export type UiKey = keyof typeof id;
export const defaultLang: Lang = 'id';
export const languages: Record<Lang, string> = { id: 'Indonesia', 'en-GB': 'English' };