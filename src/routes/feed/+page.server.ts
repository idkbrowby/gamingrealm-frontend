import type { App } from '../../app';
export async function load({ locals }: { locals: App.Locals }) {
	if (locals && locals.user) {
		return {
			user: locals.user.data.user
		};
	} else {
		// throw redirect(307, '/');
	}
}
