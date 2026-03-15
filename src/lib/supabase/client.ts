import { createBrowserClient } from '@supabase/ssr';
export function createClient() {
	return createBrowserClient(
		// Create a supabase client on the browser with project's credentials
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
	);
}
