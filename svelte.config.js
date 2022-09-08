import adapter from '@sveltejs/adapter-auto';
import autoprefixer from 'autoprefixer';
import preprocess from 'svelte-preprocess';
import tailwind from 'tailwindcss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess:[
		preprocess({
			postcss: {
				plugins: [tailwind, autoprefixer]
			}
		})
	],
	kit: {
		adapter: adapter(),
		files: {
			lib: 'src'
		}
	}
};

export default config;
