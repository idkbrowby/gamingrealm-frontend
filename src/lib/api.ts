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

// export async function login(username: string, password: string) {
// 	const { data, value } = await POST("/user/login/", {
// 		params: {
// 			"username": username,
// 			"password": password
// 		}

// 	});
// }
