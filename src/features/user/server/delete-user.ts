'use server';

import { supabaseAdmin } from '@/lib/supabase/admin';
import { createClient } from '@/lib/supabase/server';
import { Result } from '@/types/result';

export default async function deleteUser(): Promise<Result<true>> {
	const supabase = await createClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) {
		throw new Error('Not authenticated');
	}

	const { error } = await supabaseAdmin.auth.admin.deleteUser(user.id);

	if (error) {
		return { data: null, error: error.message };
	}

	return { data: true, error: null };
}
