import * as api from '../../lib/api';
import { fail, redirect } from '@sveltejs/kit';
import { MAX_COOKIE_AGE } from '../../lib/constants.ts';

export async function load({ locals }) {
	if (locals.user) {
		throw redirect(300, '/');
	}
}
export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const username = data.get('username')?.toString();
		const password = data.get('password')?.toString();

		if (!username || !password) {
			return fail(400, { username, password });
		}
		const res = await api.login(username, password);
		const responseData = res;

		if (responseData.error) {
			const errorDetail = responseData.error.detail ? responseData.error.detail : 'Unknown error';
			return fail(400, { message: errorDetail });
		} else {
			if (responseData.data) {
				const value = btoa(JSON.stringify(responseData));
				cookies.set('user', value, { path: '/', maxAge: MAX_COOKIE_AGE });
				throw redirect(300, '/');
			} else {
				return fail(400, { message: 'Response data is undefined' });
			}
		}
	}
};
