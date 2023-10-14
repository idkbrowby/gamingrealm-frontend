import type { App } from './app';
import type { RequestEvent } from '@sveltejs/kit';
interface UserLocals extends RequestEvent {
	locals: {
		user: App.Locals['user'] | null;
	};
}

/** @type {import('@sveltejs/kit').Handle} */
export const handle = ({ event, resolve }) => {
	const user = event.cookies.get('user');
	(event as UserLocals).locals.user = user ? JSON.parse(atob(user)) : null;
	return resolve(event);
};
