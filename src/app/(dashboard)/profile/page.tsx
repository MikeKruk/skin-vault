import { Separator } from '@/components/ui/separator';
import ProfileHeader from '@/features/profile/components/profile-section/ProfileHeader';
import SteamSection from '@/features/steam/components/steam-section/SteamSection';

import ProfileGuard from './components/ProfileGuard';

export default async function Profile() {  
	return (
		<div className='flex-1 flex items-center justify-center'>
			<div className='w-full max-w-md flex flex-col gap-4'>
				<ProfileGuard>
					<ProfileHeader />
					<Separator />
					<SteamSection />
					<Separator />
				</ProfileGuard>
			</div>
		</div>
	);
}
