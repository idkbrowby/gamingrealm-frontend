import { error } from '@sveltejs/kit';
import * as api from '$lib/api';
export async function load({ params, locals }) {
	if (
		/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(params.slug)
	) {
		if (locals) {
			const { session_id, user_id } = {
				session_id: locals.user.data['session-id'],
				user_id: params.slug
			};
			const res = await api.get_user(user_id, locals.session_id);
			if (res.error) {
				// throwing error for user not found
				throw error(404, 'User Not Found');
			} else {
				return res.data;
			}
		}
	}
	//throwing error for invalid user id
	throw error(400, 'Invalid User ID');
}
