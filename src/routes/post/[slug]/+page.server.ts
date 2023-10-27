import { error } from '@sveltejs/kit';
import * as api from '$lib/api';

export async function load({ params, locals }) {
	if (
		/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(params.slug)
	) {
		if (locals && locals.user) {
			const res = await api.get_post(params.slug);
			console.log(res);
			if (res.error) {
				// throwing error for user not found
				console.log(res.error);
				throw error(400, 'Post Not Found');
			} else {
				if (res.data) {
					console.log(res.data);
					return res.data;
				}
			}
		}
	}
	//throwing error for invalid user id
	throw error(400, 'Not Logged in ');
}
