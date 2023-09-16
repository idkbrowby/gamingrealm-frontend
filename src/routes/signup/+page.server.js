import * as api from '../../lib/api';
import { error, fail } from '@sveltejs/kit';
// export async function load({ cookies }) {
//     const { data, error } = await api.signup(cookies.username, cookies.password, cookies.email);
//     return { data, error };
// }

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
			throw error(400, { message: errorDetail.toString() });
		} else {
			if (responseData.data) {
				cookies.set('sessionid', responseData.data['session-id']?.toString());
			} else {
				throw error(400, { message: 'Response data is undefined' });
			}
		}

		console.log('response data is ', responseData);
	}
};
