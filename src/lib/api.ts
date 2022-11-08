import { PUBLIC_BACKEND_URL } from '$env/static/public';


type JSONValue =
	| string
	| number
	| boolean
	| { [x: string]: JSONValue }
	| Array<JSONValue>;


async function send({ method, path, data, token }: { method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH", path: string, data?: JSONValue, token?: string }) {
	const opts: { method: string, headers: Headers, body?: string } = { method, headers: new Headers() };

	if (data) {
		opts.headers.set('Content-Type', 'application/json');
		opts.body = JSON.stringify(data);
	}

	if (token) {
		opts.headers.set('Authorization', `Token ${token}`);
	}

	const res = await fetch(`${PUBLIC_BACKEND_URL}/${path}`, opts);
	return res;
}

export function get(path: string, token?: string) {
	return send({ method: 'GET', path, token });
}

export function del(path: string, token?: string) {
	return send({ method: 'DELETE', path, token });
}

export function post(path: string, data: JSONValue, token?: string) {
	return send({ method: 'POST', path, data, token });
}

export function put(path: string, data: JSONValue, token?: string) {
	return send({ method: 'PUT', path, data, token });
}