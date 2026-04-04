import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';

export default async function Profile() {
	const supabase = await createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) {
		return (
      <div>
        <p>For access to this page you need to be sign in</p>
        <Link href={'/sign-in'}>Sign in</Link>
      </div>
    )
	}

	const { data: steamProfile } = await supabase
		.from('steam_profiles')
		.select('*')
		.eq('id', user?.id)
		.maybeSingle();

	const isSynced = !!steamProfile;

	return (
		<div>
			<a href={'/api/steam/connect'}>
				{isSynced ? 'Re-sync Steam' : 'Sync with Steam'}
			</a>
			<p>Status: {isSynced ? 'Synced' : 'Not synced'}</p>
		</div>
	);
}
