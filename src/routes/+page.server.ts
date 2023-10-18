import type { App } from '../app';

export async function load({ locals }: { locals: App.Locals }) {
	if (locals && locals.user) {
		const user = locals.user.data.user;
		return {
			user: user
		};
	}
}
