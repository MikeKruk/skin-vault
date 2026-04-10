import getUser from '@/features/user/api/get-user';
import { createClient } from '@/lib/supabase/client';
import { ResultNullable } from '@/types/result';
import { SteamProfile } from '@/types/tabels';

export default async function getSteamProfile(): Promise<
	ResultNullable<SteamProfile>
> {
	const supabase = createClient();
	const { data: user, error: userError } = await getUser();

  if(userError) {
    return { data: null, error: userError };
  }

	if (!user) {
		return { data: null, error: null };
	}

	const { data: steamProfile, error } = await supabase
		.from('steam_profiles')
		.select('*')
		.eq('id', user.id)
		.maybeSingle();

	if (error) {
		console.error('getSteamProfile error:', error.message);
		return { data: null, error: error.message };
	}

	return { data: steamProfile, error: null };
}
