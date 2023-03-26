import { invalid, redirect } from '@sveltejs/kit';

import * as api from "../../../lib/api";

async function fetchTags(){
	let response = await api.get("tags");
	let tags = await response.json();
	return tags;
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	if (!locals.user) {
		throw redirect(307, '/login');
	}
	let tags = await fetchTags();
	return {"tags": tags};
}