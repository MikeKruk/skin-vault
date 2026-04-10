import getUser from '@/features/user/api/get-user';
import { createClient } from '@/lib/supabase/client';
import { ResultNullable } from '@/types/result';
import { Profile } from '@/types/tabels';

export default async function getProfile(): Promise<ResultNullable<Profile>> {
	const supabase = createClient();
	const { data: user, error: userError } = await getUser();

	if (userError) {
		return { data: null, error: userError };
	}

	if (!user) {
		return { data: null, error: null };
	}

	const { data, error } = await supabase
		.from('profiles')
		.select('*')
		.eq('id', user.id)
		.maybeSingle();

	if (error) {
		console.error('getProfile error:', error.message);
		return { data: null, error: error.message };
	}

	return { data: data, error: null };
}
