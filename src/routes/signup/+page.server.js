import * as api from '../../lib/api';
import { redirect, fail } from '@sveltejs/kit';
import { MAX_COOKIE_AGE } from '$lib/constants';

export async function load({ locals }) {
	if (locals.user) {
		throw redirect(307, '/');
	}
}
export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get('email')?.toString();
		const username = data.get('username')?.toString();
		const password = data.get('password')?.toString();

		if (!email || !username || !password) {
			return fail(400, { email, username, password });
		}
		const res = await api.signup(username, password, email);
		const responseData = res;

		if (responseData.error) {
			const errorDetail = responseData.error.detail ? responseData.error.detail : 'Unknown error';
			const errorMessage = Array.isArray(errorDetail) ? errorDetail[0].msg : errorDetail;
			console.log('error detail is ', errorMessage);
			throw fail(400, { message: errorMessage });
		}
		const value = btoa(JSON.stringify(responseData));
		cookies.set('user', value, { path: '/', maxAge: MAX_COOKIE_AGE });
		throw redirect(300, '/');
	}
};
