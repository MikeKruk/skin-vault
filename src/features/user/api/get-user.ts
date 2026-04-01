import { createClient } from '@/lib/supabase/client';
import { User } from '@supabase/supabase-js';

export default async function getUser(): Promise<User | null> {
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
		return null;
	}

	return user;
}
