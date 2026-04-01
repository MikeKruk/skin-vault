import { createClient } from '@/lib/supabase/client';
import { Tables } from '@/types/database.types';
type Profile = Tables<'profiles'>;

export default async function getProfile(): Promise<Profile | null> {
	const supabase = createClient();

	const { data, error } = await supabase
		.from('profiles')
		.select('*')
		.maybeSingle();

	if (error) {
		console.error('getProfile error:', error.message);
		return null;
	}

	return data;
}
