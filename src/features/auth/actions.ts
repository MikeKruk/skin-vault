import { createClient } from '@/lib/supabase/client';

// Magic Link
async function signInWithEmail({ email }: { email: string }) {
	const origin = process.env.NEXT_PUBLIC_SITE_URL;
	const supabase = createClient();
	const { error } = await supabase.auth.signInWithOtp({
		email,
		options: {
			emailRedirectTo: `${origin}/auth/callback`,
		},
	});

	if (error) {
		return { error: error.message };
	}

	return { success: true };
}

async function signInWithGoogle() {
	const origin = process.env.NEXT_PUBLIC_SITE_URL;
	const supabase = createClient();
	const { error, data } = await supabase.auth.signInWithOAuth({
		provider: 'google',
		options: {
			redirectTo: `${origin}/auth/callback`,
		},
	});

	if (error) {
		return { error: error.message };
	}

	return { redirect: data.url };
}

async function signOut() {
	const supabase = createClient();
	await supabase.auth.signOut();
}

export { signInWithEmail, signInWithGoogle, signOut };
