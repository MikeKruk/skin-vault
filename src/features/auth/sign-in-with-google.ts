import { createClient } from '@/lib/supabase/client';
import { Result } from './types';

export default async function signInWithGoogle(): Promise<Result<string>> {
	const origin = process.env.NEXT_PUBLIC_SITE_URL;
	const supabase = createClient();
	const { error, data } = await supabase.auth.signInWithOAuth({
		provider: 'google',
		options: {
			redirectTo: `${origin}/auth/callback`,
		},
	});

	if (error) {
		console.error('signInWithGoogle error:', error.message);
		return { data: null, error: error.message };
	}

	return { data: data.url, error: null };
}
