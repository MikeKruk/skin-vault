import getUser from '@/features/user/api/get-user';
import { createClient } from '@/lib/supabase/client';
import { Result } from '@/types/result';
import { Profile } from '@/types/tabels';

export default async function updateProfileUserName(
	username: string
): Promise<Result<Profile>> {
	const supabase = createClient();

	const { data: user } = await getUser();

	if (!user) {
		return { data: null, error: 'Unauthorized' };
	}

	const { data, error } = await supabase
		.from('profiles')
		.update({ username })
		.eq('id', user.id)
		.select('*')
		.single();

	if (error) {
		console.error('updateProfileUserName error:', error.message);
		return { data: null, error: error.message };
	}

	return { data: data, error: null };
}
