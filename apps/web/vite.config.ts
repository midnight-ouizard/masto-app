import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { searchForWorkspaceRoot } from 'vite';
import svg from '@poppanator/sveltekit-svg';

export default defineConfig({
	plugins: [sveltekit(), svg()],
	server: {
		host: true,
		fs: {
			allow: [searchForWorkspaceRoot(process.cwd()), '/packages/assets']
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
