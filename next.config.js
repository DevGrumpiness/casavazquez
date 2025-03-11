/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["eajjoxnhxrvluvseqmud.supabase.co", "*.supabase.co"],
	},
	i18n: {
	  locales: ['en-US', 'fr', 'nl-NL'],
	  defaultLocale: 'en-US',
	},
};

module.exports = nextConfig;
