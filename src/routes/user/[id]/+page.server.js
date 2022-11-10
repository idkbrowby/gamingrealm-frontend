import * as api from "../../../lib/api";


/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies, request, params }) {
    const unparsedCookie = cookies.get("user");
    let headers;
    if (unparsedCookie) {
      const cookie = JSON.parse(atob(unparsedCookie));
      headers = new Headers();
      headers.set("user-id", cookie.user.id);
      headers.set("session-id", cookie.session_id);
    } else {
      headers = undefined;
    }
    const res = await api.get(`user/${params.id}`, headers);
    let data = await res.json();
    return data;
  }