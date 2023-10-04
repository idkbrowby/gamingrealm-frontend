import type { App } from './app';

/** @type {import('@sveltejs/kit').Handle} */
export const handle = ({ event, resolve }) => {
	const user = event.cookies.get('user');
	event.locals.user = user ? JSON.parse(atob(user)) : null;
	return resolve(event);
};
