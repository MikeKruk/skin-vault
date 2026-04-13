import { createClient } from '@/lib/supabase/client';
import { ResultNullable } from '@/types/result';
import { SteamProfile } from '@/types/tabels';

export default async function getSteamProfile(
	userId: string
): Promise<ResultNullable<SteamProfile>> {
	const supabase = createClient();
	const { data: steamProfile, error } = await supabase
		.from('steam_profiles')
		.select('*')
		.eq('id', userId)
		.maybeSingle();

	if (error) {
		console.error('getSteamProfile error:', error.message);
		return { data: null, error: error.message };
	}

	return { data: steamProfile, error: null };
}
