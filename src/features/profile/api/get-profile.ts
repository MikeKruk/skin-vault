import { createClient } from '@/lib/supabase/client';
import { ResultNullable } from '@/types/result';
import { Profile } from '@/types/tabels';

export default async function getProfile(
	userId: string
): Promise<ResultNullable<Profile>> {
	const supabase = createClient();

	const { data, error } = await supabase
		.from('profiles')
		.select('*')
		.eq('id', userId)
		.maybeSingle();

	if (error) {
		console.error('getProfile error:', error.message);
		return { data: null, error: error.message };
	}

	return { data: data, error: null };
}
