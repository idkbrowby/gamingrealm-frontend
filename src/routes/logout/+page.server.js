import { invalid, redirect } from '@sveltejs/kit';


/** @type {import('./$types').PageServerLoad} */
export async function load({ locals ,cookies}) {
	if (!locals.user) throw redirect(307, '/');
    await cookies.delete('user');
}
