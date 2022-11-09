// @ts-nocheck
import { invalid, redirect } from '@sveltejs/kit';
import { usernameStore } from '$lib/stores.js';
import { COOKIE_MAX_AGE } from '$lib/constants';
import * as api from '../../lib/api';


/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	if (locals.user) throw redirect(307, '/');
}


/** @type {import('../../../.svelte-kit/types/src/routes/login/$types').Actions} */
export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        // @ts-ignore
        const res = await api.post('user/login', {
            username: data.get('username'),
            password: data.get('password')
        });
        const responseData = await res.json();
        if (!res.ok) {
            return invalid(400, responseData);
        }
        const user = responseData.user;
        const value = btoa(JSON.stringify(user));
        cookies.set('user', value, { path: '/', maxAge: COOKIE_MAX_AGE });
        usernameStore.set(responseData.username);
        throw redirect(307, '/');
    }
};