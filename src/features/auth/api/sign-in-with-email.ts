import { createClient } from '@/lib/supabase/client';
import { Result } from '@/types/result';


// Magic Link
export default async function signInWithEmail({
	email,
}: {
	email: string;
}): Promise<Result<true>> {
	const origin = process.env.NEXT_PUBLIC_SITE_URL;
	const supabase = createClient();
	const { error } = await supabase.auth.signInWithOtp({
		email,
		options: {
			emailRedirectTo: `${origin}/auth/callback`,
		},
	});

	if (error) {
		console.error('signInWithEmail error', error);
		return { data: null, error: error.message };
	}
	return { data: true, error: null };
}
