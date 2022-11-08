import { invalid, redirect } from '@sveltejs/kit';
import { usernameStore } from '$lib/stores.js';
import { COOKIE_MAX_AGE } from '$lib/constants';
import * as api from '$lib/api.js';

/** @type {import('../../../.svelte-kit/types/src/routes/login/$types').Actions} */
export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        // @ts-ignore
        const res = await api.post('user/login', {
            email: data.get('email'),
            password: data.get('password')
        });
        const responseData = await res.json();
        if (!res.ok) {
            return invalid(400, responseData);
        }
        cookies.set('session-id', responseData['session_id'], { path: '/', maxAge: COOKIE_MAX_AGE });
        usernameStore.set(responseData.username);
        throw redirect(307, '/');
    }
};