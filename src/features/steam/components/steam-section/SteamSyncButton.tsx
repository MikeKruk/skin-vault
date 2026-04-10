'use client';
import { Button } from '@/components/ui/button';
import useSteamProfile from '../../hooks/use-steam-profile';

export default function SteamSyncButton() {
	const { data: steamProfile } = useSteamProfile();
	return (
		<Button asChild className='w-full bg-transparent' variant={'teal'}>
			<a href='/api/steam/connect'>
				{steamProfile ? 'Resync' : 'Connect Steam'}
			</a>
		</Button>
	);
}
