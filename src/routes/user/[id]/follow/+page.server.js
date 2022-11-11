import { redirect } from '@sveltejs/kit';
import * as api from "../../../../lib/api";


/** @type {import('./$types').PageServerLoad} */
export async function load({ params, locals ,cookies}) {
	if (!locals.user) { throw redirect(307, '/') };
    const unparsedCookie = cookies.get("user");
    let headers;
    const cookie = JSON.parse(atob(unparsedCookie));
    headers = new Headers();
    headers.set("user-id", cookie.user.id);
    headers.set("session-id", cookie.session_id);
    console.log(headers);
    //const res = await api.post(`user/${params.id}/follow`, {}, headers);
    const res = await fetch(`http://localhost:8000/user/${params.id}/follow`, {
        headers: headers,
        method: "POST",
    });
    throw redirect(307, `/user/${params.id}`)
}
