import { Separator } from '@/components/ui/separator';
import ProfileHeader from '@/features/profile/components/profile-section/ProfileHeader';
import SteamSection from '@/features/steam/components/steam-section/SteamSection';

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
		);
	}

	const { data: steamProfile } = await supabase
		.from('steam_profiles')
		.select('*')
		.eq('id', user?.id)
		.maybeSingle();

	const isSynced = !!steamProfile;

	return (
		<div className='flex-1 flex items-center justify-center'>
			<div className='w-full max-w-md flex flex-col gap-4'>
				<ProfileHeader />
        <Separator />
				<SteamSection />
        <Separator />
			</div>
		</div>
	);
}
