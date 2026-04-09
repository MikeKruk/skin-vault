import { createClient } from '@/lib/supabase/client';
import { ResultNullable } from '@/types/result';
import { User } from '@supabase/supabase-js';

export default async function getUser(): Promise<ResultNullable<User>> {
	const supabase = createClient();
	const {
		data: { user },
		error,
	} = await supabase.auth.getUser();

	if (error) {
		//TODO: add logger
		if (error.message !== 'Auth session missing!') {
			console.error('getUser error:', error.message);
		}
		return { data: null, error: error.message };
	}

	return { data: user, error: null };
}
