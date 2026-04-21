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
		if (error.message !== 'Auth session missing!') {
			return { data: null, error: null };
		}

		return { data: null, error: error.message };
	}

	return { data: user, error: null };
}
