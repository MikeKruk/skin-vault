import { createClient } from '@/lib/supabase/client';
import { Result } from '@/types/result';

export default async function deleteSteamSync(
	userId: string
): Promise<Result<true>> {
	const supabase = createClient();

	const { error } = await supabase
		.from('steam_profiles')
		.delete()
		.eq('id', userId);

	if (error) {
		console.error('deleteSteamSync error:', error.message);
		return { data: null, error: error.message };
	}

	return { data: true, error: null };
}
