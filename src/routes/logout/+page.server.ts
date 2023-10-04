import * as api from '$lib/api';
import { redirect } from '@sveltejs/kit';

export async function load({ cookies, locals }) {
	if (locals) {
		const user = locals.user ? JSON.parse(atob(cookies.get('user'))) : null;
		const sessionid = user.data ? user.data['session-id'] : null;
		const response = await api.logout(sessionid);
		if (response.error) {
			console.log(response.error);
			throw redirect(308, '/');
		}
		console.log(response.data);
		cookies.delete('user');
		locals.user = null;
		throw redirect(307, '/');
	}
	throw redirect(308, '/');
}
