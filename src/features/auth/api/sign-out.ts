import { createClient } from '@/lib/supabase/client';
import { Result } from '@/types/result';

export default async function signOut(): Promise<Result<true>> {
	const supabase = createClient();
	const { error } = await supabase.auth.signOut();

	if (error) {
		console.error('signOut error:', error.message);
		return { data: null, error: error.message };
	}

	return { data: true, error: null };
}
