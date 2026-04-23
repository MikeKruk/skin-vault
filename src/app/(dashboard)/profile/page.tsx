import { Separator } from '@/components/ui/separator';
import ProfileHeader from '@/features/profile/components/profile-section/ProfileHeader';
import SteamSection from '@/features/steam/components/steam-section/SteamSection';

import DangerSection from '@/features/profile/components/DangerSection';
import { Suspense } from 'react';
import ProfileGuard from './components/ProfileGuard';

export default async function Profile() {
	return (
		<div className='flex-1 flex items-center justify-center'>
			<div className='w-full max-w-md flex flex-col gap-4'>
				<Suspense fallback={null}>
					<ProfileGuard>
						<ProfileHeader />
						<Separator />
						<SteamSection />
						<Separator />
						<DangerSection />
					</ProfileGuard>
				</Suspense>
			</div>
		</div>
	);
}
