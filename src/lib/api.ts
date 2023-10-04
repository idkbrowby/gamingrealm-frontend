import createClient from 'openapi-fetch';
import type { paths } from './api_schema'; // generated from openapi-typescript
import { PUBLIC_BACKEND_URL } from '$env/static/public';
const { GET, PUT, POST, PATCH } = createClient<paths>({
	baseUrl: PUBLIC_BACKEND_URL
});

export async function signup(username: string, password: string, email: string) {
	const { data, error } = await POST('/user/signup', {
		body: {
			username: username,
			password: password,
			email: email
		}
	});
	return { data, error };
}

export async function login(username: string, password: string) {
	const { data, error } = await POST('/user/login', {
		body: {
			username: username,
			password: password
		},
		params: {
			header: undefined
		}
	});
	return { data, error };
}

export async function logout(session_id: string) {
	const { data, error } = await POST('/user/logout', {
		params: {
			header: {
				'session-id': session_id
			}
		}
	});
	return { data, error };
}
