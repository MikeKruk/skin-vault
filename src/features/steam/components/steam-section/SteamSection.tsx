'use client';
import { convertDate } from '@/lib/date';
import useSteamProfile from '../../hooks/use-steam-profile';
import SteamSyncButton from './SteamSyncButton';

export default function SteamSection() {
	const { data: steamProfile } = useSteamProfile();
  
	const date = steamProfile?.last_synced
		? convertDate(steamProfile.last_synced)
		: null;

	return (
		<div className='flex flex-col gap-4'>
			<SteamSyncButton />
			<div>
				<p className='text-center text-teal-muted w-full'>
					{steamProfile
						? `Last synced with Steam: ${date}`
						: 'Steam is not connected'}
				</p>
			</div>
		</div>
	);
}
