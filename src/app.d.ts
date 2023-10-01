// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

import type { components } from '$lib/api_schema';
declare namespace App {
	// interface Locals {}
	interface Locals {
		user: components['LoginSuccessResponse'];
	}
	interface PageData {
		user: components['LoginSuccessResponse'];
	}
	// interface Error {}
	// interface Platform {}
}
