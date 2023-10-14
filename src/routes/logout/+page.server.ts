import * as api from '$lib/api';
import { redirect } from '@sveltejs/kit';

export async function load({ cookies, locals }) {
	if (locals) {
		const user = locals.user ? JSON.parse(atob(cookies.get('user'))) : null;
		const sessionid = user.data ? user.data['session-id'] : null;
		const response = await api.logout(sessionid);
		cookies.delete('user');
		locals.user = null;
		if (response.error) {
			console.log(response.error);
			throw redirect(307, '/');
		}
		console.log(response.data);
		throw redirect(307, '/');
	}
	cookies.delete('user');
	locals.user = null;
	throw redirect(307, '/');
}
