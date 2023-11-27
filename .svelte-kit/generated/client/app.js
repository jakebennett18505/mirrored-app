export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11')
];

export const server_loads = [0];

export const dictionary = {
		"/": [3],
		"/artist/[artistId]": [6,[2]],
		"/artist/[artistId]/bio": [7,[2]],
		"/artist/[artistId]/gallery": [8,[2]],
		"/art": [4],
		"/art/[artId]": [5],
		"/auth/login": [9],
		"/auth/register": [10],
		"/inputs": [11]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';